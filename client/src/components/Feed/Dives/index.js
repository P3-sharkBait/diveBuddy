// Component that displays all the logs that you and your friends have entered.
// Will conditionally render just yours, or all depending on which filter is selected.


import React from "react";
import DiveList from "../DiveList"
const Dives = (
  {
    users,
    me,
    title,
    showTitle = true,
    showUsername = true,
  }
) => {
  const divers = [];
  const friendLogs = [];
  // console.log(me);
  divers.push(me);
  users.forEach(element => {
    divers.push(element)
  });
  divers.forEach(diver => {
    console.log('adding diver logs');
    diver.logs.forEach(log => {
      friendLogs.push(log);
    })
    let sortedLogs = friendLogs.sort(
      (l1, l2) => (l1.diveNumber < l2.diveNumber) ? 1 : (l1.diveNumber > l2.diveNumber) ? -1 : 0);
    console.log(sortedLogs);
    // sorted logs are in psuedo chronological order, need to send logs to divelist not divers array
  })
  console.log(divers);
  if (!divers.length) {
    return <h3>No Logs Yet</h3>;
  }
  return (
    <div className="dashContainer text-dark mb-4 py-3 flex-column align-center" style={{ height: "600px" }}>
      {/* {showTitle && <h3>{title}</h3>} */}
      {/* Create for each log???? */}
      <div className="container flex-column justify-space-between-lg justify-center align-center">
        <div>
          <h6>Friends' Dives</h6>
          <div className="card">
            <DiveList divers={divers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dives;