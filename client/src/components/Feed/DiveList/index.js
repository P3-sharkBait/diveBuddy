import React from "react";
import { useState } from "react";

const DiveList = ({ logs = [] }) => {
  const [hideInfo, setHideInfo] = useState("Hidden");
  const [showLog, setShowLog] = useState(false);

  const handleClick = (id) => {
    console.log("handle log click", id);
    if (showLog) {
      setShowLog(false);
    } else {
      setShowLog(id);
    }
  };
  console.log('==================');
  console.log(logs);
  if (!logs.length) {
    return <h3></h3>;
  }
  return (
    <>
      {/* <h3
                className="p-5 display-inline-block"
                style={{ borderBottom: '1px dotted #1a1a1a' }}
            >
                Dives
            </h3> */}
      <div className="flex-row my-4">
        {logs &&
          logs.map((log) => (
            <div key={log._id} className="col-12 pb-3">
              <div
                className="m-3 text-dark"
                style={{
                  backgroundColor: "rgba(128, 168, 145, 0.9)",
                  boxShadow: "0px 0px 8px 2px #262626",
                }}
              >
                <div className="card-header">
                  {/* <h6>{logs.username}</h6> */}
                  <h6>Dive Number {log.diveNumber}</h6>
                  <h5 className={log._id === showLog ? "" : "hideInfo"}>
                    {" "}
                    {log.location || "No Location Specified"}
                  </h5>
                </div>
                <div className="card-body text-left text-left my-2">
                  <ul>
                    <li className={log._id === showLog ? "" : "hideInfo"}>
                      <span>Breathing Mix: </span>{" "}
                      {log.breathingMixture ||
                        "No Data Entered"}
                    </li>
                    <li className={log._id === showLog ? "" : "hideInfo"}>
                      <span>Tank: </span>{" "}
                      {log.tankType ||
                        "No Data Entered"}
                    </li>
                    <li className={log._id === showLog ? "" : "hideInfo"}>
                      <span>Rated Capacity: </span>{" "}
                      {log.tankCapacity ||
                        "No Data Entered"}
                    </li>
                    <li className={log._id === showLog ? "" : "hideInfo"}>
                      <span>Starting Pressure: </span>{" "}
                      {log.startPressure ||
                        "No Data Entered"}
                    </li>
                    <li className={log._id === showLog ? "" : "hideInfo"}>
                      <span>Ending Pressure: </span>{" "}
                      {log.endPressure ||
                        "No Data Entered"}
                    </li>
                    <li>Pressure Used: {log.pressureUsed}</li>
                    <li className={log._id === showLog ? "" : "hideInfo"}>
                      Surface Air Consumption: {log.pressureUsed}
                    </li>
                    <li className={log._id === showLog ? "" : "hideInfo"}>
                      <li>
                        <span className="">Starting Letter Group: </span>
                        {log.previousEndLetter || "No Starting Letter"}
                      </li>
                      <li>
                        <span className="">Surface Interval: </span>
                        {log.surfaceInt}
                      </li>
                    </li>
                    <li>Max Depth: {log.maxDepth}</li>
                    <li>
                      <span className="">Ending Letter Group: </span>
                      {log.EndingLetterGroup}
                    </li>
                    <li>
                      <span className="">Surface Interval: </span>
                      {log.nextSurfaceInt}
                    </li>
                    <li>
                      <span>Residual Nitrogen Time: </span>{" "}
                      {log.residualNitrogenTime ||
                        "No Residual Nitrogen Time from last Dive"}
                    </li>
                    <li>
                      <span className="">Actual Dive Time: </span>
                      {log.actualDiveTime}
                    </li>
                    <li>
                      <span className="">Total Nitrogen Time: </span>
                      {log.TotalNitrogenTime}
                    </li>
                  </ul>
                </div>
                <div className={log._id === showLog ? "" : "hideInfo"}>
                  <div className="card-body text-left">
                    <ul>
                      <section>
                        <h6>Additional Equiptment</h6>
                        <li>Suit Type: {log.suit || "No additional suit"}</li>
                        <li>Weight {log.ballast}</li>
                        <li>Extra: {log.extraEquipment || "No additional equipment"}</li>
                      </section>
                    </ul>
                  </div>

                  <div className="card-body text-left">
                    <ul>
                      <h6>Air Temperature and Surface Weather</h6>
                      <li>Air Temp: {log.airTemp}º F</li>
                      <li>Weather Conditions: {log.weatherCond || "No Weather Recorded"}</li>
                    </ul>
                  </div>

                  <div className="card-body text-left">
                    <ul>
                      <h6>Water Temperature and Conditions</h6>
                      <li>Water Type: {log.waterType || "No Data Entered"}</li>
                      <li>Water Temp: {log.waterTemp}º F</li>
                      <li>U/W Vis: {log.underwaterVisibility}</li>
                      <li>Water Conditions: {log.waterCond || "No Data Entered"}</li>
                    </ul>
                  </div>
                </div>
                <div className={log._id === showLog ? "" : "hideInfo"}>
                  <div className="card-body text-left">
                    <ul>
                      <h6>Next Dive Planning</h6>
                      <li>
                        <span className="">Planned Time to Next Dive: </span>
                        {log.nextSurfaceInt}
                      </li>
                      <li>
                        <span className="">Next Planned Depth: </span>
                        {log.nextDepth}
                      </li>
                      <li>
                        <span className="">
                          Residual Nitrogen Time for Next Dive:{" "}
                        </span>
                        {log.NextResidualNitrogenTime}
                      </li>
                      <li>
                        <span className="">
                          New Starting Letter Group will be:{" "}
                        </span>
                        {log.NewStartingLetterGroup}
                      </li>
                      <li>
                        <span className="">
                          The max time at the next planned depth is:{" "}
                        </span>
                        {log.NextMaxDiveTime} minutes
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  className="btn btn-sm btn-light m-2 text-center"
                  onClick={() => handleClick(log._id)}
                >
                  {log._id === showLog ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default DiveList;
