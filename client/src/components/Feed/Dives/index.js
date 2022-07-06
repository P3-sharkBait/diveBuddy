// Component that displays all the logs that you and your friends have entered.
// Will conditionally render just yours, or all depending on which filter is selected.


import React from "react";

const Dives = (props) => {
  return (
    <div className="bg-primary text-light mb-4 py-3 flex-row align-center">
      {/* Create for each log???? */}
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div id="logContainer">
          Pretty pre-formatted logs.
        </div>
      </div>
    </div>
  );
};

export default Dives;