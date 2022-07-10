import React from "react";
import Dives from "../Dives";
import { useQuery } from "@apollo/client";
import { QUERY_USERS, QUERY_ME } from "../../../utils/queries";
import { Link } from "react-router-dom";
import Auth from '../../../utils/auth';
import MyDives from '../MyDives';

const DiveContainer = ({ filterState }) => {
  const username = Auth.getProfile().data.username;
  console.log(filterState);
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];
  const { loading: loadingMe, data: myData } = useQuery(QUERY_ME, { variables: { username: username } });
  const me = myData?.user || [];
  console.log(me);
  console.log(users);
  if (filterState === 'All') {
    return (
      <div className="bg-primary text-light mb-4 py-3 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <div id="diveContainer">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>
                <Link className="btn btn-md btn-info m-2" to="/addLog">
                  Add Log
                </Link>
                <Dives users={users} title="Dive On In" />
              </>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-primary text-light mb-4 py-3 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          <div id="diveContainer">
            {loadingMe ? (
              <div>Loading...</div>
            ) : (
              <>
                <Link className="btn btn-md btn-info m-2" to="/addLog">
                  Add Log
                </Link>
                <MyDives me={me} title="Dive On In" />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default DiveContainer;
