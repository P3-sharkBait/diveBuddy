import React from "react";
import DiveList from "../DiveList";

const MyDives = ({ me, title, showTitle = true, showUsername = true }) => {
  if (!me.logs.length) {
    return (
      <div className="dashContainer flex-column justify-space-between-lg  mb-4 py-3">
        <div className="card"><h3>No Logs Yet</h3></div>
      </div>
    );
  }
  else return (
    <div className="dashContainer container text-dark mb-4 py-3 flex-column ">
      <h3>My Dives</h3>
      {/* Create for each log???? */}
      <div className="container flex-column">
        {me && (
          <div className="card">
            <DiveList logs={me.logs} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDives;
