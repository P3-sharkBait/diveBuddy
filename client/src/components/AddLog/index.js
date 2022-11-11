import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_LOG } from "../../utils/mutations";
import Auth from "../../utils/auth";

const LogForm = (props) => {
  const [display, setDisplay] = useState("one");
  const [formState, setFormState] = useState({
    input: "",
  });

  const [answerState, setAnswerState] = useState({
    diveNumber: 1,
    location: "",
    dateTime: "",
    breathingMixture: "",
    tankType: "",
    tankCapacity: 3000,
    startPressure: 3000,
    endPressure: 800,
    ballast: 1,
    extraEquipment: "",
    suit: "",
    weatherCond: "",
    airTemp: 80,
    waterType: "",
    underwaterVisibility: 50,
    waterTemp: 83,
    waterCond: "",
    surfaceInt: 1440,
    nextSurfaceInt: 10,
    previousEndLetter: "",
    maxDepth: 30,
    nextDepth: 30,
    residualNitrogenTime: 1,
    actualDiveTime: 1,
  });

  const questions = [
    "diveNumber",
    "location",
    "dateTime",
    "breathingMixture",
    "tankType",
    "tankCapacity",
    "startPressure",
    "endPressure",
    "ballast",
    "extraEquipment",
    "suit",
    "weatherCond",
    "airTemp",
    "waterType",
    "underwaterVisibility",
    "waterTemp",
    "waterCond",
    "surfaceInt",
    "nextSurfaceInt",
    "previousEndLetter",
    "maxDepth",
    "nextDepth",
    "residualNitrogenTime",
    "actualDiveTime",
  ];

  const type = [
    "number",
    "text",
    "text",
    "text",
    "text",
    "number",
    "number",
    "number",
    "text",
    "text",
    "text",
    "text",
    "number",
    "text",
    "number",
    "number",
    "text",
    "number",
    "number",
    "text",
    "number",
    "number",
    "number",
    "number",
  ];

  const [qState, setQstate] = useState({ q: questions[0] });
  const [typeState, setTypestate] = useState({ type: type[0] });

  const [addLog, { error, data }] = useMutation(ADD_LOG);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    var realValue = "";

    if (parseInt(value) > 0) {
      realValue = parseInt(value);
    } else {
      realValue = value;
    }

    setFormState({
      input: realValue,
    });

    setAnswerState({
      ...answerState,
      [name]: realValue,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const username = Auth.getProfile().data.username;

    const ans = Object.entries(answerState);
    // const ansV = Object.keys(answerState)

    try {
      const finalAns = {};

      const { data } = await addLog({
        variables: { username: username, ...answerState },
      });
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setAnswerState({
      diveNumber: "",
      location: "",
      dateTime: "",
      breathingMixture: "",
      tankType: "",
      tankCapacity: "",
      startPressure: "",
      endPressure: "",
      ballast: "",
      extraEquipment: "",
      suit: "",
      weatherCond: "",
      airTemp: "",
      waterType: "",
      underwaterVisibility: "",
      waterTemp: "",
      waterCond: "",
      surfaceInt: "",
      nextSurfaceInt: "",
      previousEndLetter: "",
      maxDepth: "",
      nextDepth: "",
      residualNitrogenTime: "",
      actualDiveTime: "",
    });
  };

  const handleNextBack = (event) => {
    event.preventDefault();
    const btn = event.target.id;

    const t = questions.indexOf(qState.q);
    const ans = Object.values(answerState);

    if (t >= 23) {
      handleFormSubmit(event);
    } else {
      if (btn === "NextBTN") {
        setQstate({ q: questions[t + 1] });
        setTypestate({ type: type[t + 1] });
        setFormState({
          input: ans[t + 1],
        });
      } else {
        setQstate({ q: questions[t - 1] });
        setTypestate({ type: type[t - 1] });
        setFormState({
          input: ans[t - 1],
        });
      }
    }
  };

  const changeDisplay = (event) => {
    if (display === "one") {
      setDisplay("All");
    } else {
      setDisplay("one");
    }
  };
  if (display === "one") {
    return (
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <h4 className="card-header bg-dark text-light p-2">Dive Info</h4>
            <div className="card-body dashContainer p-2">
              {data ? (
                <p>
                  {" "}
                  <Link to="/feed">Success! Click here to view your feed.</Link>
                </p>
              ) : (
                <div>
                  <form>
                    {qState.q}
                    <input
                      className="form-input"
                      placeholder={typeState.type}
                      name={qState.q}
                      type={typeState.type}
                      value={formState.input}
                      onChange={handleChange}
                    />

                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer", margin: "10px 0" }}
                      type="submit"
                      id="NextBTN"
                      onClick={handleNextBack}
                    >
                      Next
                    </button>

                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer", margin: "10px 0" }}
                      type="submit"
                      id="BackBTN"
                      onClick={handleNextBack}
                    >
                      Back
                    </button>

                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer", margin: "10px 0" }}
                      type="submit"
                      id="BackBTN"
                      onClick={changeDisplay}
                    >
                      Show List
                    </button>
                  </form>
                </div>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  } else if (display === "All") {
    return (
      <main className="flex-row justify-center my-5 mb-4">
        <div className="col-12 col-lg-10 fullList">
          <div className="card my-5">
            <h4 className="card-header bg-dark text-light my-5 p-2">
              Dive Info
            </h4>
            <div
              className="card-body dashContainer my-4 p-2"
              style={{ height: "600px" }}
            >
              {data ? (
                <p>
                  {" "}
                  <Link to="/feed">Success! Click here to view your feed.</Link>
                </p>
              ) : (
                <div>
                  <form>
                    Dive Number
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="diveNumber"
                      type="number"
                      value={answerState.diveNumber}
                      onChange={handleChange}
                    />
                    Location
                    <input
                      className="form-input"
                      placeholder="Text"
                      name="location"
                      type="text"
                      value={answerState.location}
                      onChange={handleChange}
                    />
                    Date
                    <input
                      className="form-input"
                      placeholder="Date"
                      name="dateTime"
                      type="text"
                      value={answerState.dateTime}
                      onChange={handleChange}
                    />
                    Breathing Mixture
                    <input
                      className="form-input"
                      placeholder="Text"
                      name="breathingMixture"
                      type="text"
                      value={answerState.breathingMixture}
                      onChange={handleChange}
                    />
                    Tank Type
                    <input
                      className="form-input"
                      placeholder="Text"
                      name="tankType"
                      type="text"
                      value={answerState.tankType}
                      onChange={handleChange}
                    />
                    Tank Capacity
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="tankCapacity"
                      type="number"
                      value={answerState.tankCapacity}
                      onChange={handleChange}
                    />
                    Starting Pressure
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="startPressure"
                      type="number"
                      value={answerState.startPressure}
                      onChange={handleChange}
                    />
                    Ending Pressure
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="endPressure"
                      type="number"
                      value={answerState.endPressure}
                      onChange={handleChange}
                    />
                    Ballast
                    <input
                      className="form-input"
                      placeholder="Text"
                      name="ballast"
                      type="text"
                      value={answerState.ballast}
                      onChange={handleChange}
                    />
                    Extra Equipment
                    <input
                      className="form-input"
                      placeholder="Text"
                      name="extraEquipment"
                      type="text"
                      value={answerState.extraEquipment}
                      onChange={handleChange}
                    />
                    Suit
                    <input
                      className="form-input"
                      placeholder="Text"
                      name="suit"
                      type="text"
                      value={answerState.suit}
                      onChange={handleChange}
                    />
                    Weather Condition
                    <input
                      className="form-input"
                      placeholder="Text"
                      name="weatherCond"
                      type="text"
                      value={answerState.weatherCond}
                      onChange={handleChange}
                    />
                    Air Temperature
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="airTemp"
                      type="number"
                      value={answerState.airTemp}
                      onChange={handleChange}
                    />
                    Water Type
                    <input
                      className="form-input"
                      placeholder="Text"
                      name="waterType"
                      type="text"
                      value={answerState.waterType}
                      onChange={handleChange}
                    />
                    Underwater Visibility
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="underwaterVisibility"
                      type="number"
                      value={answerState.underwaterVisibility}
                      onChange={handleChange}
                    />
                    Water Temperature
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="waterTemp"
                      type="number"
                      value={answerState.waterTemp}
                      onChange={handleChange}
                    />
                    Water Condition
                    <input
                      className="form-input"
                      placeholder="Text"
                      name="waterCond"
                      type="text"
                      value={answerState.waterCond}
                      onChange={handleChange}
                    />
                    Surface Interval
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="surfaceInt"
                      type="number"
                      value={answerState.surfaceInt}
                      onChange={handleChange}
                    />
                    Next Surface Interval
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="nextSurfaceInt"
                      type="number"
                      value={answerState.nextSurfaceInt}
                      onChange={handleChange}
                    />
                    previous End Letter
                    <input
                      className="form-input"
                      placeholder="Text"
                      name="previousEndLetter"
                      type="text"
                      value={answerState.previousEndLetter}
                      onChange={handleChange}
                    />
                    Max Depth
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="maxDepth"
                      type="number"
                      value={answerState.maxDepth}
                      onChange={handleChange}
                    />
                    Next Depth
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="nextDepth"
                      type="number"
                      value={answerState.maxDepth}
                      onChange={handleChange}
                    />
                    residual Nitrogen Time
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="residualNitrogenTime"
                      type="number"
                      value={answerState.residualNitrogenTime}
                      onChange={handleChange}
                    />
                    Actual Dive Time
                    <input
                      className="form-input"
                      placeholder="Number"
                      name="actualDiveTime"
                      type="number"
                      value={answerState.actualDiveTime}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer", margin: "10px 0" }}
                      type="submit"
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </button>
                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer", margin: "10px 0" }}
                      type="submit"
                      id="BackBTN"
                      onClick={changeDisplay}
                    >
                      Show Less
                    </button>
                  </form>
                </div>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default LogForm;
