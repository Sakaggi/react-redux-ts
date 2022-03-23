import { ITimeline } from "../models/ITimeline";
import ListEvents from "./ListEvents";
import Mapbox from "./Mapbox";


const Timeline = (props: ITimeline) => {
    const filterableTypes = Array.from(new Set<string>(props.allLifeEvents.map((lifeEvent) => lifeEvent.type).flat()));

    return (
        <div className="container">
            <ListEvents filterableTypes={filterableTypes} />
            <Mapbox />
        </div>

    );
};

export default Timeline;


