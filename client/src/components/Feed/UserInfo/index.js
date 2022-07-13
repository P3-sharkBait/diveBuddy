import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../../utils/auth';


const UserInfo = (props) => {

  return (
    <div className="bg-primary text-light mb-4 pt-2">
      <div className="container flex-column justify-center align-center">
        <div id="userInfoContainer" className="flex-column justify-center align-center">
          <div id="userFeedInfo">
            <p>Welcome</p>
            <Link to="/account">
              <p>{Auth.getProfile().data.username}</p>
            </Link>
            <p>Give your ID to Friends!</p>
            <p>{Auth.getProfile().data._id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;