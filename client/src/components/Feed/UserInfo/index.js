import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../../utils/auth';

const UserInfo = (props) => {
  return (
    <div className="bg-primary text-light mb-4 py-3">
      <div className="container flex-column justify-center align-center">
        <div id="userInfoContainer" className="flex-column justify-center align-center">
          <div id="userFeedInfo">
            <Link to="/dashboard">
              <img alt="User avatar"></img>
              <p>{Auth.getProfile().data.username}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;