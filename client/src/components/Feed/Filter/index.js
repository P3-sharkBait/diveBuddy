import React from "react";

const Filter = ({ filterState, setFilterState }) => {
  const handleClick = (event) => {
    event.preventDefault();
    setFilterState(event.target.innerHTML);
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
