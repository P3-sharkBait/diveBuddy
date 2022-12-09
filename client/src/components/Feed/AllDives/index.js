import React from "react";
import DivesList from "../DivesList";
import _ from 'lodash';

const AllDives = ({ me, users, filterState, title, showTitle = true, showUsername = true }) => {
  const divers = [];
  const friendLogs = [];
  divers.push(me);
  users.forEach(element => {
    divers.push(element)
  });
  const diversClone = _.cloneDeep(divers);
  diversClone.forEach(diver => {
    diver.logs.forEach(log => {
      log['username'] = diver.username;
    })
    diver.logs.forEach(log => {
      friendLogs.push(log);
    })
  })
  //eventually need to fix createdAt in Log model to be truely chronological
  let sortedLogs = friendLogs.sort(
    (l1, l2) => (l1.diveNumber < l2.diveNumber) ? 1 : (l1.diveNumber > l2.diveNumber) ? -1 : 0);
  if (!me.logs.length) {
    return (
      <div className="dashContainer flex-column justify-space-between-lg  mb-4 py-3">
        <div className="card"><h3>No Logs Yet</h3></div>
      </div>
    );
  }
  else if (filterState === 'All') {
    return (
      <div className="dashContainer container text-dark mb-4 py-3 flex-column align-center" style={{ height: "600px" }}>
        <div className="container flex-column justify-space-between-lg justify-center align-center">
          {me && (
            <div className="card">
              <h3 className="align-center justify-center">My Dives</h3>
              <DivesList logs={sortedLogs} />
            </div>
          )}
        </div>
      </div>
    )
  } else {
    return (
      <div className="dashContainer container text-dark mb-4 py-3 flex-column align-center" style={{ height: "600px" }}>
        <div className="container flex-column justify-space-between-lg justify-center align-center">
          {me && (
            <div className="card">
              <h3 className="align-center justify-center">My Dives</h3>
              <DivesList logs={me.logs} />
            </div>
          )}
        </div>
      </div>
    )
  };
};

export default AllDives;
