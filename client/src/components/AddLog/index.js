import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_LOG } from "../../utils/mutations";
import Auth from "../../utils/auth";

const LogForm = (props) => {
  const [formState, setFormState] = useState({
    input:""
  });

  const [answerState, setAnswerState] = useState({
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
    residualNitrogenTime: "",
    actualDiveTime: "",
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
    "number",
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
  ];

  var i = 0;

  const [qState, setQstate] = useState({ q: questions[i] });
  const [typeState, setTypestate] = useState({ type: type[i]});

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
    event.preventDefault();
    const t = questions.indexOf(qState.q);
    console.log(t);
    if (t<22) {
      setQstate({ q: questions[t + 1] });
      setTypestate({ type: type[t + 1] });
      setFormState({
        input:""
      });

    } else {
      console.log(answerState);
      const username = Auth.getProfile().data.username;
      console.log({ username: username, ...answerState });
      console.log(username);
      try {
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
        residualNitrogenTime: "",
        actualDiveTime: "",
      });
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
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
                <form onSubmit={handleFormSubmit}>
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
                  >
                    Next
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
};

export default LogForm;
