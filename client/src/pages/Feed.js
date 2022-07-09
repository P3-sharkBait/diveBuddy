import React from "react";
import { useState } from "react";
import UserInfo from "../components/Feed/UserInfo"
import Filter from "../components/Feed/Filter"
import DiveContainer from "../components/Feed/DiveContainer"

// container component
// If user is logged in, render their feed. Else, redirect them to Login page. 

const Feed = (props) => {
  const [filterState, setFilterState] = useState('Me');
  console.log(filterState);
  return (
    <main className="flex-column justify-center mb-4">
        <div className="container text-center">
          {/* Will replace with user's actual username. */}
          <div className="flex-row justify-center">
            <UserInfo />
            <Filter filterState={filterState} setFilterState={setFilterState}/>
          </div>
          <DiveContainer filterState={filterState}/>
        </div>

    </main>
  );
};

export default Feed;