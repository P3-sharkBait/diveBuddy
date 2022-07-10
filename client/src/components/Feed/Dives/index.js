// Component that displays all the logs that you and your friends have entered.
// Will conditionally render just yours, or all depending on which filter is selected.


import React from "react";
import DiveList from "../DiveList"

const Dives = (
  {
    users,
    title,
    showTitle = true,
    showUsername = true,
  }
) => {
  if (!users.length) {
    return <h3>No Logs Yet</h3>;
  }
  return (
    <div className="bg-primary text-light mb-4 py-3 flex-row align-center">
      {showTitle && <h3>{title}</h3>}
      {/* Create for each log???? */}
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        {users &&
          users.map((user) => (
            <div className="card mb-3">
              <DiveList logs={user.logs} />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Dives;