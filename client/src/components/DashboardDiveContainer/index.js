import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from '../../utils/queries';
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import DashboardDiveList from '../DashboardDiveList';
import { useState } from "react";

const DashboardDiveContainer = () => {
    const username = Auth.getProfile().data.username;
    const [display, setDisplay] = useState(true);

    const { loading: loadingMe, data: myData } = useQuery(QUERY_ME, { variables: { username: username } });
    const me = myData?.user || [];
    console.log(me);
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
                            <DashboardDiveList me={me} title="Dive On In" display={display} setDisplay={setDisplay}/>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardDiveContainer