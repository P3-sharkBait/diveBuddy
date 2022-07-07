import React, { useState } from "react";
import LogForm from "../components/AddLog/index";
import Test from "../components/DataBase Checker";

// need a click event in LoginForm.js to change state here.

export default function ADDLOG() {
    
    return (
      <>
      <Test />
        <LogForm />
        <>
          {" "}
          <button
            className="btn btn-sm btn-info mx-2"
          >
          </button>{" "}
        </>
    
      </>
    );
  };


