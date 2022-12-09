import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_LOG } from "../../utils/mutations";
import { useState } from "react";

const DashboardDiveList = ({
  me,
  title,
  showTitle = true,
  showUsername = true,
  display,
  setDisplay,
}) => {
  // eslint-disable-next-line
  const [removeLog, { error, data }] = useMutation(REMOVE_LOG);
  // eslint-disable-next-line
  const [hideForm, setHideForm] = useState("Hidden");
  const [showLog, setShowLog] = useState(false);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // eslint-disable-next-line
      const { data } = await removeLog({
        variables: { id: showLog },
      });

      setDisplay(!display);
    } catch (e) {
      console.error(e);
    }
  };
  const handleLogClick = (id) => {
    if (showLog) {
      setShowLog(false);
    } else {
      setShowLog(id);
    }
  };

  if (!me.logs.length) {
    return <h3>No Logs</h3>;
  }
  return (
    <div className="dashContainer p-1" style={{ height: "600px" }}>
      <h3 className="text-dark p-1 display-inline-block">Dives</h3>
      <h6 className="text-dark">Scroll for more dives...</h6>
      <div className="flex-column my-2">
        {me.logs &&
          me.logs.map((log) => (
            <div key={log._id} className="col-12 mb-3 pb-3">
              <div className="p-3 text-dark" style={{backgroundColor: "rgba(128, 168, 145, 0.9)", boxShadow: "0px 0px 8px 2px #262626"}}>
                <div className="card-header">
                  <h6>Dive Number {log.diveNumber}</h6>
                  <h5> Location {log.location || "No Location Specified"}</h5>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-md m-2"
                  onClick={() => handleLogClick(log._id)}
                >
                  {log._id === showLog ? "Cancel" : "Delete Log"}
                </button>
                <form
                  onSubmit={handleFormSubmit}
                  className={log._id === showLog ? "" : "hideInfo"}
                >
                  <button
                    id={log.diveNumber}
                    className="btn btn-block btn-danger my-1"
                    style={{ cursor: "pointer" }}
                    type="submit"
                  >
                    Confirm Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardDiveList;
