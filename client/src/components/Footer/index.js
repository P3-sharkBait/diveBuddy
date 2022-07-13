import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-100 bg-secondary p-4">
      <div className="container text-center mb-2">
        <Link className="btn-light p-0" to="/about">
          <button className="btn btn-sm btn-light">About/Donate</button>
        </Link>
        <button className="btn btn-sm btn-light m-2">
          <a
            href="https://github.com/P3-sharkBait/diveBuddy"
            title="GitHub"
            className=""
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </button>
      </div>
      <div className="container text-center mb-2">
        <p>
          &copy; 2022 Andrew Moody, Abeer Naeem, William Qualls, Nat Triffo, &
          Theo Ward
        </p>
      </div>
    </footer>
  );
};

export default Footer;
