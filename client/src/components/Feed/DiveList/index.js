const DiveList = ({ logs = [] }) => {
    if (!logs.length) {
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
                {logs &&
                    logs.map((log) => (
                        <div key={log._id} className="col-12 mb-3 pb-3">
                            <div className="p-3 bg-dark text-light">
                                <h5 className="card-header">
                                    Dive Number {log.diveNumber}
                                </h5>
                                <p className="card-body">
                                    Actual Dive Time: {log.actualDiveTime} minutes
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default DiveList;