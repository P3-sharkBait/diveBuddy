const DiveList = ({ logs = [] }) => {
    if (!logs.length) {
        return <h3></h3>;
    }
        logs.map((log) => {
            console.log(log.startPressure);
            console.log(log.endPressure);
            console.log(log.pressureUsed);
        })
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
                                <div className="card-header">
                                    <h6>Dive Number {log.diveNumber}</h6>
                                    <h5> Location {log.location || 'No Location Specified'}</h5>
                                </div>
                                <div className="card-body">
                                    <p>Breathing Mix {log.breathingMixture}</p>
                                    <p>{log.tankType}</p>
                                    <ul>
                                        <li>
                                            <ul>
                                                Rated Capacity
                                                <li>{log.tankCapacity}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                Starting Pressure
                                                <li>{log.startPressure}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                Ending Pressure
                                                <li>{log.endPressure}</li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <p>Pressure Used {log.pressureUsed}</p>
                                    <p>Surface Air Consumption {log.SAC}</p>
                                </div>
                                <div>
                                    <p>Actual Dive Time: {log.actualDiveTime} minutes</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default DiveList;