import React from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_LOG } from "../../utils/mutations";
import { REMOVE_USER } from "../../utils/mutations";
import { useState } from "react";
import Auth from "../../utils/auth";

const DashboardDiveList = ({
    me,
    title,
    showTitle = true,
    showUsername = true,
    display,
    setDisplay,
}) => {
    const [removeLog, { error, data }] = useMutation(REMOVE_LOG);
    const [hideForm, setHideForm] = useState('Hidden');
    const [showLog, setShowLog] = useState(false);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("Working")
        try {
            const { data } = await removeLog({
                variables: { id: showLog },
            });

            console.log(showLog)
            console.log(data)
            setDisplay(!display)
            // Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

    }
    const handleLogClick = id => {
        console.log("handle log click", id);
        if (showLog) {
            setShowLog(false);
        } else {
            setShowLog(id)
        }
    }


    if (!me.logs.length) {
        return <h3></h3>;
    }
    return (
        <>
            <h3
                className="p-5 display-inline-block"
                style={{ borderBottom: '1px dotted #1a1a1a' }}
            >
                Dives
            </h3>
            <div className="flex-row my-4">
                {me.logs &&
                    me.logs.map((log) => (
                        <div key={log._id} className='col-12 mb-3 pb-3'>
                            <div className="p-3 bg-dark text-light">
                                <div className="card-header">
                                    <h6>Dive Number {log.diveNumber}</h6>
                                    <h5> Location {log.location || 'No Location Specified'}</h5>
                                </div>
                                <button type="button" className="btn btn-sm btn-danger m-2" onClick={() => handleLogClick(log._id)}>{log._id == showLog ? 'Cancel' : "Delete Log"}</button>
                                <form onSubmit={handleFormSubmit} className={log._id == showLog ? '' : 'hideInfo'}>

                                    <button
                                        id={log.diveNumber}
                                        className="btn btn-block btn-Danger"
                                        style={{ cursor: "pointer" }}
                                        type="submit"

                                    >
                                        Confirm Delete
                                    </button>
                                </form>

                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default DashboardDiveList;