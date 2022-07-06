import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_LOG } from "../../utils/mutations";

const LogForm = (props) => {
    const [formState, setFormState] = useState({ diveNumber: "", location: "", dateTime: "", breathingMixture: "", tankType: "", tankCapacity: "", startPressure: "", endPressure: "", ballast: "", extraEquipment: "", suit: "", weatherCond: "" , airTemp: "", waterType: "", underwaterVisibility: "", waterTemp:"", waterCond:"", surfaceInt:"", nextSurfaceInt:"",previousEndLetter:"", maxDepth:"",residualNitrogenTime:"", actualDiveTime:""});
    const [addLog, { error, data }] = useMutation(ADD_LOG);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await addLog({
          variables: { ...formState },
        });
  

      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
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
        weatherCond: "" , 
        airTemp: "", 
        waterType: "", 
        underwaterVisibility: "", 
        waterTemp:"", 
        waterCond:"", 
        surfaceInt:"", 
        nextSurfaceInt:"",
        previousEndLetter:"", 
        maxDepth:"",
        residualNitrogenTime:"", 
        actualDiveTime:""
      });
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
                    <input
                      className="form-input"
                      placeholder="Dive Number"
                      name="Dive Number"
                      type="number"
                      value={formState.diveNumber}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Location"
                      name="Location"
                      type="text"
                      value={formState.location}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Date"
                      name="Date"
                      type="text"
                      value={formState.dateTime}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Breathing Mixture"
                      name="Breathing Mixture"
                      type="text"
                      value={formState.breathingMixture}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Tank Type"
                      name="Tank Type"
                      type="text"
                      value={formState.tankType}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Tank Capacity"
                      name="Tank Capacity"
                      type="number"
                      value={formState.tankCapacity}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Starting Pressure"
                      name="Starting Pressure"
                      type="number"
                      value={formState.startPressure}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Ending Pressure"
                      name="Ending Pressure"
                      type="number"
                      value={formState.endPressure}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Ballast"
                      name="Ballast"
                      type="number"
                      value={formState.ballast}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Extra Equipment"
                      name="Extra Equipment"
                      type="text"
                      value={formState.extraEquipment}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Suit"
                      name="Suit"
                      type="text"
                      value={formState.suit}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Weather Condition"
                      name="Weather Condition"
                      type="text"
                      value={formState.weatherCond}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Air Temp"
                      name="Air Temp"
                      type="number"
                      value={formState.airTemp}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Water Type"
                      name="Water Type"
                      type="text"
                      value={formState.waterType}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Underwater Visibility"
                      name="Underwater Visibility"
                      type="number"
                      value={formState.underwaterVisibility}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Water Temp"
                      name="Water Temp"
                      type="number"
                      value={formState.waterTemp}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Water Condition"
                      name="Water Condition"
                      type="text"
                      value={formState.waterCond}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="SurfaceInt"
                      name="SurfaceInt"
                      type="number"
                      value={formState.surfaceInt}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="NextSurfaceInt"
                      name="Next Surface Int"
                      type="number"
                      value={formState.nextSurfaceInt}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Previous End Letter"
                      name="Previous End Letter"
                      type="text"
                      value={formState.previousEndLetter}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Mac Depth"
                      name="Max Depth"
                      type="number"
                      value={formState.maxDepth}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="Residual Nitrogen Time"
                      name="Residual Nitrogen Time"
                      type="number"
                      value={formState.residualNitrogenTime}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="actual Dive Time"
                      name="Actual Dive Time"
                      type="number"
                      value={formState.location}
                      onChange={handleChange}
                    />
                    
                    
                    
                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer" }}
                      type="submit"
                    >
                      Submit
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

  export default LogForm