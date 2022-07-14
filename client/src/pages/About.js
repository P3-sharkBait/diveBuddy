import React, { useState } from "react";
import { Link } from "react-router-dom";

// DEV PICS:
import andrewPic from "../images/andrewPic.jpeg";
import abeerPic from "../images/abeerPic.png";
import willPic from "../images/willPic.jpg";
import natPic from "../images/natPic.JPG";
import theoPic from "../images/theoPic.jpg";

const About = (props) => {
  return (
    <>
      <div className="water"></div>
      <main className="flex-column justify-center">
        <div className="text-center">
          <div className="justify-center align-center dashContainer m-4">
            <h2 className="text-center">The Dev Team</h2>
          </div>
          <div className="flex-row justify-center mb-4 align-center">
            {/* <Link
              className="btn btn-md btn-info m-2 justify-content-center"
              to="/"
            >
              Donate to Ocean Conservation
            </Link> */}
            <div className="devInfo flex-column flex-no-wrap justify-spacebetween m-1">
              <div className="flex-column justify-center mx-2">
                <h3>Andrew Moody</h3>
              </div>
              <img src={andrewPic} alt="Andrew Moody" className="devPic"></img>
              <a
                href="https://github.com/andrewmoody96"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <button className="btn btn-sm btn-info m-2">GitHub</button>
              </a>
            </div>
            <div className="devInfo flex-column flex-no-wrap justify-spacebetween m-1">
              <div className="flex-column justify-center mx-2">
                <h3>Abeer Naeem</h3>
              </div>
              <img src={abeerPic} alt="Abeer Naeem" className="devPic"></img>
              <a
                href="https://github.com/anaeem23"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <button className="btn btn-sm btn-info m-2">GitHub</button>
              </a>
            </div>
            <div className="devInfo flex-column flex-no-wrap justify-spacebetween m-1">
              <div className="flex-column justify-center mx-2">
                <h3>William Qualls</h3>
              </div>
              <img src={willPic} alt="William Qualls" className="devPic"></img>
              <a
                href="https://github.com/wkqualls"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <button className="btn btn-sm btn-info m-2">GitHub</button>
              </a>
            </div>
            <div className="devInfo flex-column flex-no-wrap justify-spacebetween m-1">
              <div className="flex-column justify-center mx-2">
                <h3>Nat Triffo</h3>
              </div>
              <img src={natPic} alt="Nat Triffo" className="devPic"></img>
              <a
                href="https://github.com/natalietriffo"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <button className="btn btn-sm btn-info m-2">GitHub</button>
              </a>
            </div>
            <div className="devInfo flex-column flex-no-wrap justify-spacebetween m-1">
              <div className="flex-column justify-center mx-2">
                <h3>Theo Ward</h3>
              </div>
              <img src={theoPic} alt="Theo Ward" className="devPic"></img>
              <a
                href="https://github.com/Tward9"
                target="_blank"
                rel="noreferrer"
                className="text-light"
              >
                <button className="btn btn-sm btn-info m-2">GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
