import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    if (!Auth.loggedIn()) {
      return <Navigate to="/login" />;
    }
  };
  return (
    <header className="flex text-black flex-row items-center">
      <div className="w-[85%] max-w-[1200px] mx-auto flex flex-row justify-center md:justify-between items-center">
        <div className="text-center">
          <Link className="text-black" to="/">
            <h1 className="m-0 text-black">Dive Buddy</h1>
          </Link>
          <p className="m-2">All of your logs, in one convenient spot.</p>
        </div>
        <div>
          <Link className="" to="/feed">
            <button className="button rounded-lg px-2 py-1 bg-teal-400 btn btn-sm btn-light m-2">
              Feed
            </button>
          </Link>
          <Link className="" to="/account">
            <button className="button rounded-lg px-2 py-1 bg-teal-400 btn btn-sm btn-light m-2">
              Account
            </button>
          </Link>
          {Auth.loggedIn() ? (
            <>
              <button
                className="button rounded-lg px-2 py-1 bg-teal-400 btn btn-sm btn-info m-2"
                onClick={logout}
              >
                Logout
              </button>
              <br></br>
              <h6 id="uNameHeader" className="text-center">
                Hello, {Auth.getProfile().data.username}!
              </h6>
            </>
          ) : (
            <>
              <Link className="" to="/login">
                <button className="button rounded-lg px-2 py-1 bg-teal-400 btn btn-sm btn-info m-2">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
