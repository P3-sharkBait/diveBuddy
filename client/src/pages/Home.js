import React from "react";
import { Link } from "react-router-dom";


const Home = (props) => {
  return (
    <main className="flex-column justify-center mb-4">
      <div id="bgPic">
        <div className="container text-center">
          <Link className="btn btn-lg btn-info m-2" to="/login">
            Dive In!
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
