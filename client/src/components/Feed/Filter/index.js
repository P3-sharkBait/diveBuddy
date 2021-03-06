// I envision a NavBar-esque set of 2-3 buttons. Will filter to only your dives, or all including your friends.
// maybe: unit conversion?

import React from "react";
import { useState } from "react";

const Filter = ({ filterState, setFilterState }) => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log(filterState);
    setFilterState(event.target.innerHTML);
    console.log(filterState);
  };
  return (
    <div className="text-dark mb-2 flex-column justify-center align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h6>Filter Feed</h6>
        <div id="filterContainer" className="flex-row justify-center">
          <button className="btn btn-sm btn-light m-1" onClick={handleClick}>
            All
          </button>
          <button className="btn btn-sm btn-light m-1" onClick={handleClick}>
            Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
