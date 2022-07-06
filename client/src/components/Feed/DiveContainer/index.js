import React from "react";
import Dives from "../Dives"

const DiveContainer = (props) => {
  return (
    <div className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div id="diveContainer">
          <Dives />
        </div>
      </div>
    </div>
  );
};

export default DiveContainer;