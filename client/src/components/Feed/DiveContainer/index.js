import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USERS, QUERY_ME } from "../../../utils/queries";
import { Link } from "react-router-dom";
import Auth from "../../../utils/auth";
import AllDives from "../AllDives";

const DiveContainer = ({ filterState }) => {
  const username = Auth.getProfile().data.username;
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];
  const { loading: loadingMe, data: myData } = useQuery(QUERY_ME, {
    variables: { username: username },
  });
  const me = myData?.user || [];

  return (
    <main className="flex-column justify-center">
      <div className="text-light mb-4 py-3 flex-column align-center">
        <div className="flex-row justify-space-between-lg justify-center align-center">
          <div id="diveContainer" className="container">
            {loadingMe ? (
              <div>Loading...</div>
            ) : (
              <>
                <Link className="btn btn-md btn-info m-2" to="/addLog">
                  Add Log
                </Link>
                <AllDives filterState={filterState} users={me.friends} me={me} title="Dive On In" />
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DiveContainer;
