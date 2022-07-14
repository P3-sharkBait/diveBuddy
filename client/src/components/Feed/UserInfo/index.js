import React from "react";
import { Link } from "react-router-dom";
import Auth from '../../../utils/auth';


const UserInfo = (props) => {

  return (
    <div className="text-center text-dark">
      <div className="flex-column justify-center align-center">
        <div id="userInfoContainer" className="flex-column justify-center align-center">
          <div id="userFeedInfo" className="text-center px-4 py-2">
            <Link to={"/account"}><h4>{Auth.getProfile().data.username}</h4></Link>
            <h6>Share your ID with friends: <br></br>{Auth.getProfile().data._id}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;