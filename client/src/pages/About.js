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
      <main className="container flex-column justify-center">
        <div className="content">
          <div
            id="devContainer"
            className="container flex-column justify-center mb-4 align-center w-auto"
          >
            <h2 className="text-center">The Dev Team</h2>
            <Link
              className="btn btn-md btn-info m-2 justify-content-center"
              to="/"
            >
              Donate to Ocean Conservation
            </Link>
            <div className="devInfo flex-row flex-no-wrap justify-spacebetween m-2">
              <div className="flex-column justify-center mx-2">
                <h3>Andrew Moody</h3>
                <p>
                  MERN & Music. I am attending Northwestern University's Full
                  Stack Bootcamp, and graduated from Millikin University in 2019
                  with a degree in audio engineering. I'm an avid football fan &
                  I love 72º days with a light breeze.
                </p>
              </div>
              <img src={andrewPic} alt="Andrew Moody" className="devPic"></img>
            </div>
            <div className="devInfo flex-row flex-no-wrap justify-spacebetween m-2">
              <img src={abeerPic} alt="Abeer Naeem" className="devPic"></img>
              <div className="flex-column justify-center mx-2">
                <h3>Abeer Naeem</h3>
                <p>Abeer Bio</p>
              </div>
            </div>
            <div className="devInfo flex-row flex-no-wrap justify-spacebetween m-2">
              <div className="flex-column justify-center mx-2">
                <h3>William Qualls</h3>
                <p>Will Bio</p>
              </div>
              <img src={willPic} alt="William Qualls" className="devPic"></img>
            </div>
            <div className="devInfo flex-row flex-no-wrap justify-spacebetween m-2">
              <img src={natPic} alt="Nat Triffo" className="devPic"></img>
              <div className="flex-column justify-center mx-2">
                <h3>Nat Triffo</h3>
                <p>Nat Bio</p>
              </div>
            </div>
            <div className="devInfo flex-row flex-no-wrap justify-spacebetween m-2">
              <div className="flex-column justify-center mx-2">
                <h3>Theo Ward</h3>
                <p>
                  My name is Theo. In my time outside of work and class, I’m an
                  avid endurance athlete. I can regularly be found running or
                  cycling along Chicago’s lakefront and generally enjoying the
                  outdoors. On top of that I love to play strategy games with my
                  partner and friends. My top three right now are called
                  Gloomhaven, Scythe, and Betrayal at the House on the Hill!
                </p>
              </div>
              <img src={theoPic} alt="Theo Ward" className="devPic"></img>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
