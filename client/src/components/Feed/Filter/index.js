// I envision a NavBar-esque set of 2-3 buttons. Will filter to only your dives, or all including your friends.
// maybe: unit conversion?

import React from "react";

const Filter = (props) => {
  return (
    <div className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-column justify-space-between-lg justify-center align-center">
        <h6>Filter Feed</h6>
        <div id="filterContainer" className="flex-row justify-center">
          <button className="btn btn-sm btn-light m-2">All</button>
          <button className="btn btn-sm btn-light m-2">Me</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;