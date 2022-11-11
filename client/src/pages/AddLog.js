import React from "react";
import LogForm from "../components/AddLog/index";

// need a click event in LoginForm.js to change state here.

export default function ADDLOG() {
  return (
    <>
      <div className="water"></div>
      <main className="container flex-column justify-center">
        <div className="content">
          <LogForm />
        </div>
      </main>
    </>
  );
}
