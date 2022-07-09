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
        return <h3>No Logs Yet</h3>;
    }
    return (
        <div className="bg-primary text-light mb-4 py-3 flex-row align-center">
            {showTitle && <h3>{title}</h3>}
            {/* Create for each log???? */}
            <div className="container flex-row justify-space-between-lg justify-center align-center">
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