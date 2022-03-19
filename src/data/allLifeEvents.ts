import { LngLat } from "mapbox-gl";
import { LifeEvent } from "../models/LifeEvent";
import data from './timeline.json';

const allLifeEvents: LifeEvent[] = []
data.map((lifeEvent) => {
    allLifeEvents.push(new LifeEvent(lifeEvent.start, lifeEvent.end, lifeEvent.place, lifeEvent.coordinates as unknown as LngLat, lifeEvent.type, lifeEvent.details))
})

export default allLifeEvents;