import { LngLat } from "mapbox-gl";
import { LifeEvent } from "../models/LifeEvent";

const data = [
    {
        "start": "1994-05-10T00:00:00.000Z",
        "end": "1996-01-31T00:00:00.000Z",
        "place": "Pilani",
        "coordinates": { "lat": 28.378460635857618, "lng": 75.6062366041943 },
        "type": ["Home"],
        "details": "I was born in Pilani, Rajasthan, India"
    },
    {
        "start": "1996-02-01T00:00:00.000Z",
        "end": "2005-03-31T00:00:00.000Z",
        "place": "Bahal",
        "coordinates": { "lat": 28.629431055958577, "lng": 75.61842456432608 },
        "type": ["Home", "Study"],
        "details": "Moved to adjacent town to live with my aunt and complete my elementary school education"
    },
    {
        "start": "2005-04-01T00:00:00.000Z",
        "end": "2011-07-31T00:00:00.000Z",
        "place": "Pilani",
        "coordinates": { "lat": 28.378460635857618, "lng": 75.6062366041943 },
        "type": ["Home", "Study"],
        "details": "Returned to my hometown to live with my parents and complete my high school education"
    },
    {
        "start": "2011-08-01T00:00:00.000Z",
        "end": "2015-05-31T00:00:00.000Z",
        "place": "Jaipur",
        "coordinates": { "lat": 26.95686562686896, "lng": 75.77906407540769 },
        "type": ["Study"],
        "details": "Moved to Jaipur to do my Bachelors in Engineering"
    },
    {
        "start": "2015-07-01T00:00:00.000Z",
        "end": "2015-07-31T00:00:00.000Z",
        "place": "Nomi City, Ishikawa",
        "coordinates": { "lat": 36.44444651224091, "lng": 136.5924122462978 },
        "type": ["Internship"],
        "details": "Came to Japan for the first time to intern at Iida Laboratory in JAIST"
    },
    {
        "start": "2016-05-01T00:00:00.000Z",
        "end": "2017-03-31T00:00:00.000Z",
        "place": "Coimbatore",
        "coordinates": { "lat": 11.104034406417915, "lng": 76.98473728798214 },
        "type": ["Work"],
        "details": "Started to work in Cognizant as a software Tester"
    },
    {
        "start": "2017-01-10T00:00:00.000Z",
        "end": "2019-09-24T00:00:00.000Z",
        "place": "Nomi City, Ishikawa",
        "coordinates": { "lat": 36.44444651224091, "lng": 136.5924122462978 },
        "type": ["Study"],
        "details": "Came to JAIST again to do Masters in Iida Laboratory upon receiving MEXT Scholarship"
    },
    {
        "start": "2019-01-10T00:00:00.000Z",
        "end": "2022-03-18T00:00:00.000Z",
        "place": "Tokyo",
        "coordinates": { "lat": 35.664821023660544, "lng": 139.85926757977097 },
        "type": ["Work"],
        "details": "Started working at Arche Information Inc. as a Front-end developer"
    }

];

const allLifeEvents: LifeEvent[] = [];

data.map((lifeEvent) => {
    allLifeEvents.push(new LifeEvent(lifeEvent.start, lifeEvent.end, lifeEvent.place, lifeEvent.coordinates as unknown as LngLat, lifeEvent.type, lifeEvent.details))
})

export default allLifeEvents;