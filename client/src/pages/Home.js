import React from "react";
import { Link } from "react-router-dom";


const Home = (props) => {
  return (
    <main className="flex-column justify-center mb-4">
        <div className="container text-center">
          <Link className="btn btn-md btn-info m-2" to="/feed">
            Dive In!
          </Link>
        </div>
    </main>
  );
};

export default Home;
