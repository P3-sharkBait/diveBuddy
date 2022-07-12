import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="text-dark mb-4 py-3 flex-row align-center">
      <div id="header" className="container flex-row justify-space-between-lg justify-center align-center">
        <div className="text-center">
          <Link className="text-light" to="/">
            <h1 className="m-0 text-dark" id="headerName">Dive Buddy</h1>
          </Link>
          <p className="m-2" id="headerSubtitle">All of your logs, in one convenient spot.</p>
        </div>
        <div>
          <Link className="btn-light p-0" to="/feed">
            <button className="btn btn-sm btn-light m-2">Feed</button>
          </Link>
          <Link className="btn-light p-0" to="/dashboard">
            <button className="btn btn-sm btn-light m-2">Dashboard</button>
          </Link>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-sm btn-info m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-sm btn-info m-2" to="/login">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
