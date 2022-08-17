import React from "react";
import MyDiveList from "../MyDiveList";

const MyDives = ({ me, title, showTitle = true, showUsername = true }) => {
  if (!me.logs.length) {
    return (
      <div className="dashContainer flex-column justify-space-between-lg  mb-4 py-3">
        <div className="card"><h3>No Logs Yet</h3></div>
      </div>
    );
  }
  else return (
    <div className="dashContainer container text-dark mb-4 py-3 flex-column align-center" style={{ height: "600px" }}>
      {/* Create for each log???? */}
      <div className="container flex-column justify-space-between-lg justify-center align-center">
        {me && (
          <div className="card">
            <h3 className="align-center justify-center">My Dives</h3>
            <MyDiveList logs={me.logs} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDives;
