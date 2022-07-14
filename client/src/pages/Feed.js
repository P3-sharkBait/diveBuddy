import React from "react";
import { useState } from "react";
import UserInfo from "../components/Feed/UserInfo";
import Filter from "../components/Feed/Filter";
import DiveContainer from "../components/Feed/DiveContainer";
import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";

// container component
// If user is logged in, render their feed. Else, redirect them to Login page.

const Feed = (props) => {
  const [filterState, setFilterState] = useState("All");
  console.log(filterState);
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
