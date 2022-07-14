import React from "react";
import DiveList from "../DiveList"

const MyDives = (
    {
        me,
        title,
        showTitle = true,
        showUsername = true,
    }
) => {
    if (!me.logs.length) {
        return <div className="dashContainer flex-column justify-space-between-lg justify-center align-center p-1"><h3>No Logs Yet</h3></div>;
    }
    return (
        <div className="text-dark mb-4 py-3 flex-column align-center">
            <h3>My Dives</h3>
            {/* Create for each log???? */}
            <div className="container flex-column justify-space-between-lg justify-center align-center">
                {me &&
                    <div className="card mb-3">
                        <DiveList logs={me.logs} />
                    </div>
                }
            </div>
        </div>
    );
};

export default MyDives;