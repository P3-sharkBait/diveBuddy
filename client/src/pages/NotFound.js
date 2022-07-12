import React from "react";
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <main className="subBG flex-column justify-center mb-4">
      <div id="bgPic">
        <div className="container text-center">
        <h3>Error 404: This page does not exist. Click the button to return home.</h3>
          <Link className="btn btn-md btn-info m-2" to="/">
            Come Up For Air
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;