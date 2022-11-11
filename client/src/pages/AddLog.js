import React, { useState } from "react";
import LogForm from "../components/AddLog/index";

// need a click event in LoginForm.js to change state here.

export default function ADDLOG() {
  let [userLocation, setUserLocation] = useState("");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(returnCoordinates);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  function returnCoordinates(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(lat, lon);
    return (lat, lon);
  }

  setUserLocation = getLocation();

  return (
    <>
      {getLocation()}
      <div className="water"></div>
      <main className="container flex-column justify-center">
        <div className="content">
          <LogForm
            userLocation={userLocation}
            setUserLocation={setUserLocation}
          />
        </div>
      </main>
    </>
  );
}
