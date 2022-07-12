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
    "number"
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
    console.log(name, realValue);

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
    event.preventDefault()
    console.log(answerState);
    const username = Auth.getProfile().data.username;
    console.log({ username: username, ...answerState });
    console.log(username);

    const ans = Object.entries(answerState);
    // const ansV = Object.keys(answerState)

    try {

      const finalAns = {}
      
      // ans.map((value) => {
      //   const name = value[0]
        
      //   if (value[1] ==="" || value[1] < 0) {
      //     value[1] = 1;
      //     return (setAnswerState({...answerState,
      //       name: value[1]}))
      //   } 
      // })
    
      // setAnswerState({
      //   ...finalAns
      // })

      console.log(answerState)
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
      nextDepth:"",
      residualNitrogenTime: "",
      actualDiveTime: "",
    });
  };

  const handleNextBack = (event) => {
    event.preventDefault();
    const btn = event.target.id;
    console.log(btn);
    const t = questions.indexOf(qState.q);
    const ans = Object.values(answerState);

    if (t >= 23) {
      handleFormSubmit(event);
    } else {
      if (btn === "NextBTN") {
        setQstate({ q: questions[t + 1] });
        setTypestate({ type: type[t + 1] });
        setFormState({
          input: ans[t+1],
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
      setDisplay("All")
    } else {
      setDisplay("one")
    }
  }
  if (display === "one") {
    console.log(display)
    return (
      <main className="subBG flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <h4 className="card-header bg-dark text-light p-2">Dive Info</h4>
            <div className="card-body">
              {data ? (
                <p>
                  Success! You may now head{" "}
                  <Link to="/">back to the homepage.</Link>
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
                      style={{ cursor: "pointer" }}
                      type="submit"
                      id="NextBTN"
                      onClick={handleNextBack}
                    >
                      Next
                    </button>

                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer" }}
                      type="submit"
                      id="BackBTN"
                      onClick={handleNextBack}
                    >
                      Back
                    </button>

                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer" }}
                      type="submit"
                      id="BackBTN"
                      onClick={changeDisplay}
                    >
                      Show All
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
    console.log(display)
    return (
      <main className="subBG flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <h4 className="card-header bg-dark text-light p-2">Dive Info</h4>
            <div className="card-body">
              {data ? (
                <p>
                  Success! You may now head{" "}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <div>
                  <form >
                    <input
                      className="form-input"
                      // placeholder="Dive Number2"
                      name="diveNumber"
                      type="number"
                      value={answerState.diveNumber}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Location"
                      name="location"
                      type="text"
                      value={answerState.location}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Date"
                      name="dateTime"
                      type="text"
                      value={answerState.dateTime}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Breathing Mixture"
                      name="breathingMixture"
                      type="text"
                      value={answerState.breathingMixture}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Tank Type"
                      name="tankType"
                      type="text"
                      value={answerState.tankType}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Tank Capacity"
                      name="tankCapacity"
                      type="number"
                      value={answerState.tankCapacity}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Starting Pressure"
                      name="startPressure"
                      type="number"
                      value={answerState.startPressure}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Ending Pressure"
                      name="endPressure"
                      type="number"
                      value={answerState.endPressure}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Ballast"
                      name="ballast"
                      type="text"
                      value={answerState.ballast}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Extra Equipment"
                      name="extraEquipment"
                      type="text"
                      value={answerState.extraEquipment}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Suit"
                      name="suit"
                      type="text"
                      value={answerState.suit}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Weather Condition"
                      name="weatherCond"
                      type="text"
                      value={answerState.weatherCond}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Air Temp"
                      name="airTemp"
                      type="number"
                      value={answerState.airTemp}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Water Type"
                      name="waterType"
                      type="text"
                      value={answerState.waterType}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Underwater Visibility"
                      name="underwaterVisibility"
                      type="number"
                      value={answerState.underwaterVisibility}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Water Temp"
                      name="waterTemp"
                      type="number"
                      value={answerState.waterTemp}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Water Condition"
                      name="waterCond"
                      type="text"
                      value={answerState.waterCond}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="SurfaceInt"
                      name="surfaceInt"
                      type="number"
                      value={answerState.surfaceInt}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="NextSurfaceInt"
                      name="nextSurfaceInt"
                      type="number"
                      value={answerState.nextSurfaceInt}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Previous End Letter"
                      name="previousEndLetter"
                      type="text"
                      value={answerState.previousEndLetter}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Max Depth"
                      name="maxDepth"
                      type="number"
                      value={answerState.maxDepth}
                      onChange={handleChange}
                    />
                                 <input
                      className="form-input"
                      placeholder="Next Depth"
                      name="nextDepth"
                      type="number"
                      value={answerState.maxDepth}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Residual Nitrogen Time"
                      name="residualNitrogenTime"
                      type="number"
                      value={answerState.residualNitrogenTime}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="actual Dive Time"
                      name="actualDiveTime"
                      type="number"
                      value={answerState.actualDiveTime}
                      onChange={handleChange}
                    />

                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer" }}
                      type="submit"
                      onClick={handleFormSubmit}
                    >
                      Submit
                    </button>

                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer" }}
                      type="submit"
                      id="BackBTN"
                      onClick={changeDisplay}
                    >
                      Show All
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
