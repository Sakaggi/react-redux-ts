
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { LifeEvent } from "../models/LifeEvent";
import { actionCreators, State } from "../state";
import Mapbox from "./Mapbox";


const Timeline: React.FC<{ allLifeEvents: LifeEvent[] }> = (props) => {

    const dispatch = useDispatch();

    const { sortByName, sortByYear, filter } = bindActionCreators(actionCreators, dispatch)
    const selectedLifeEvents = useSelector((state: State) => state.lifeEvents);
    const [lookAt, setLookAt] = useState<LifeEvent>(selectedLifeEvents[0]);


    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
            <div>
                <button onClick={() => sortByName(true)}>
                    Sort by name
                </button>
                <button onClick={() => sortByYear(true)}>
                    Sort by year
                </button>
                <button onClick={() => filter(["Study"])}>Filter</button>
                {/* <LifeEvent events={lifeEvents} /> */}
                {selectedLifeEvents.map((lifeEvent: LifeEvent, i: number) => <li key={i} onClick={() => setLookAt(lifeEvent)}>{lifeEvent.place}</li>)}
            </div>
            <Mapbox lookAt={lookAt} />
        </div>

    );
};

export default Timeline;


