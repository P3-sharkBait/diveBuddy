import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <div className="water"></div>
      <main className="flex flex-col justify-center w-[85%] max-w-[1200px] mx-auto">
        <div className="flex justify-center items-center absolute z-10 w-100 h-[calc(100vh-363px)] top-0 left-0 right-0 bottom-0">
          <img></img>
          <Link className="button rounded-lg px-2 py-1 bg-teal-400 btn btn-md btn-info m-2" to="/feed">
            Dive In!
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
