import React from "react";
import { useState } from "react";
import UserInfo from "../components/Feed/UserInfo";
import Filter from "../components/Feed/Filter";
import DiveContainer from "../components/Feed/DiveContainer";
import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";

const Feed = (props) => {
  const [filterState, setFilterState] = useState("All");
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div className="water"></div>
      <main className="flex-column justify-center">
        <div className="text-center">
          {/* Will replace with user's actual username. */}
          <div className="dashContainer container flex-row justify-center my-4">
            <UserInfo />
            <Filter filterState={filterState} setFilterState={setFilterState} />
          </div>
          <div className="diveFeed flex-column ">
            <DiveContainer filterState={filterState} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Feed;

// Location button to get User Location
// Update Filter component to add "Add Log" button. If clicked, AddLog component is conditionally rendered through All Dives. Adds to options for All and My Dives.

// Allows us to pass state down to form input. 
