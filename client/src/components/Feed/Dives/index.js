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
    <div className="dashContainer text-dark mb-4 py-3 flex-column align-center" style={{ height: "600px" }}>
      {/* {showTitle && <h3>{title}</h3>} */}
      {/* Create for each log???? */}
      <div className="container flex-column justify-space-between-lg justify-center align-center">
        {users &&
          users.map((user) => (
            <div>
              <h6>{user.username}'s Dives</h6>
              <div className="card">
                <DiveList logs={user.logs} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Dives;