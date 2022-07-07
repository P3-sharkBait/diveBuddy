import React from "react";
import Dives from "../Dives";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../../../utils/queries";
import { Link } from "react-router-dom";

const DiveContainer = (props) => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];
  console.log(users);

  return (
    <div className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div id="diveContainer">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <>
              <Link className="btn btn-md btn-info m-2" to="/">
                Add Log
              </Link>
              <Dives users={users} title="Dive On In" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiveContainer;
