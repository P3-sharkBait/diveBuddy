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
                                    <p>{log.tankType} Tank</p>
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
                                <div className="card-body">
                                    <p>Weight {log.ballast}</p>
                                    <p>Suit Type: {log.suit || 'No additional suit'}</p>
                                    <section>
                                        Additional Equiptment:
                                        <p>{log.extraEquipment}</p>
                                    </section>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        Air Temperature and Surface Weather
                                        <li>
                                            {log.airTemp} degrees F
                                        </li>
                                        <li>
                                            {log.weatherCond || 'No weather recorded'}
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        Water Temperature and Conditions
                                        <li>
                                            {log.waterType}
                                        </li>
                                        <li>
                                            {log.waterTemp} degrees F
                                        </li>
                                        <li>
                                            U/W Vis: {log.underwaterVisibility}
                                        </li>
                                        <li>
                                            {log.waterCond}
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <ul>
                                        <li>
                                            <ul>
                                                Starting Letter Group
                                                <li>{log.previousEndLetter || 'No Starting Letter'}</li>
                                                <li>Surface Interval {log.surfaceInt}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                Max Depth
                                                <li>{log.maxDepth}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                Ending Letter Group
                                                <li>{log.EndingLetterGroup}</li>
                                                <li>Surface Interval {log.nextSurfaceInt}</li>
                                            </ul>
                                        </li>
                                        <li>Residual Nitrogen Time {log.residualNitrogenTime}</li>
                                        <li>Actual Dive Time {log.actualDiveTime}</li>
                                        <li>Total Nitrogen Time {log.TotalNitrogenTime}</li>
                                    </ul>
                                </div>
                                <div className="card-body">
                                    <h6>Next Dive Planning</h6>
                                    <ul>
                                        <li>
                                            <ul>
                                                Planned Time to Next Dive
                                                <li>{log.nextSurfaceInt}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                Next Planned Depth
                                                <li>{log.nextDepth}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <ul>
                                                Residual Nitrogen Time for Next Dive
                                                <li>{log.NextResidualNitrogenTime}</li>
                                            </ul>
                                        </li>
                                        <li>
                                            New Starting Letter Group will be: {log.NewStartingLetterGroup}
                                        </li>
                                        <li>
                                            The max time at the next planned depth is {log.NextMaxDiveTime} minutes
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default DiveList;