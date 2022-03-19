import { LngLat } from "mapbox-gl";

export class LifeEvent {
    start: Date;
    end: Date;
    place: any;
    coordinates: LngLat
    type: any;
    details: any;
    constructor(start: string, end: string, place: string, coordinates: LngLat, type: string[], details: string) {
        this.start = new Date(start);
        this.end = new Date(end);
        this.place = place;
        this.coordinates = coordinates
        this.type = type;
        this.details = details;
    }
}