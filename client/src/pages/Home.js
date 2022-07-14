import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <div className="water"></div>
      <main className="container flex-column justify-center">
        <div className="content">
          <img></img>
          <Link className="btn btn-md btn-info m-2" to="/feed">
            Dive In!
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
