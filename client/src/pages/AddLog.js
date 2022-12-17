import React, { useState } from "react";
import LogForm from "../components/AddLog/index";

// need a click event in LoginForm.js to change state here.

export default function ADDLOG() {
  let [userLocation, setUserLocation] = useState("");
  let blocked = "";

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(
            `${position.coords.latitude} ${position.coords.longitude}`
          );
        },
        () => {
          console.error("Unable to retrieve your location");
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser");
    }
  };

  // function getLocation() {
  //   console.log("getLocation ran");
  //   if (navigator.geolocation) {
  //     setUserLocation(navigator.geolocation.getCurrentPosition(returnCoordinates));
  //   } else {
  //     setUserLocation("");
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // }

  function returnCoordinates(position) {
    console.log(position);
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(lat, lon);
    // setUserLocation(`${lat} ${lon}`);
    console.log(userLocation);
    return userLocation;
  }
  
  console.log(userLocation);
  // getLocation();

  return (
    <>
      <div className="water"></div>
      <main className="container flex-column justify-center">
        <div className="content">
          <button className="w-25" onClick={getLocation}>Get Current Location</button>
          <LogForm
            userLocation={userLocation}
            setUserLocation={setUserLocation}
          />
        </div>
      </main>
    </>
  );

  // if (userLocation && userLocation !== "") {
  //   return (
  //     <>
  //       <div className="water"></div>
  //       <main className="container flex-column justify-center">
  //         <div className="content">
  //           <LogForm
  //             userLocation={userLocation}
  //             setUserLocation={setUserLocation}
  //           />
  //         </div>
  //       </main>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <div className="water"></div>
  //       <main className="container flex-column justify-center">
  //         <div className="content">
  //           <LogForm
  //             userLocation={userLocation}
  //             setUserLocation={setUserLocation}
  //           />
  //         </div>
  //       </main>
  //     </>
  //   );
  // }
}
