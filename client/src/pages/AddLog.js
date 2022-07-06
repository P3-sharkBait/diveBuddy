import React, { useState } from "react";
import LogForm from "../components/AddLog/index";

// need a click event in LoginForm.js to change state here.

export default function ADDLOG() {
    
    return (
      <>
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


