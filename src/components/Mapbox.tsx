import React, { useEffect, useState, useRef } from 'react';
import { LifeEvent } from '../models/LifeEvent';
import mapboxgl, { Map } from "mapbox-gl";
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../state';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FrYWdnaSIsImEiOiJjbDB2enIyczIwa3pqM2RvMmF4djhibmZhIn0.7mjlDHruPiQ-tS6alWfzzw';

const Mapbox: React.FC<{ lookAt: LifeEvent }> = (props) => {
    const dispatch = useDispatch();
    const selectedLifeEvents = useSelector((state: State) => state.lifeEvents);
    const mapContainer = useRef(null);
    const map = useRef<Map | null>(null);
    const [lnglat, setLngLat] = useState([selectedLifeEvents[0].coordinates.lng.toFixed(4) as unknown as number, selectedLifeEvents[0].coordinates.lat.toFixed(4) as unknown as number])
    const [zoom, setZoom] = useState(9);
    const [ifMarkersAdded, setIfMarkersAdded] = useState(false);
    const [activePlaceDescription, setActivePlaceDescription] = useState("Hola")
    function flyToTheSelectedLocation() {
        if (!selectedLifeEvents.length) return;
        map.current?.flyTo({
            center: [props.lookAt.coordinates.lng.toFixed(4) as unknown as number, props.lookAt.coordinates.lat.toFixed(4) as unknown as number],
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
        setActivePlaceDescription(`${selectedLifeEvents[0].place}: ${selectedLifeEvents[0].details}`);
        setLngLat([map.current?.getCenter().lng.toFixed(4) as unknown as number, map.current?.getCenter().lat.toFixed(4) as unknown as number]);
    }

    useEffect(() => {
        if (map.current) {
            flyToTheSelectedLocation();
            return;
        } // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lnglat[0], lnglat[1]],
            zoom: zoom,

        });
        if (!ifMarkersAdded) {
            selectedLifeEvents.map(selectedEvent =>
                new mapboxgl.Marker({ color: 'black' })
                    .setLngLat([selectedEvent.coordinates.lng, selectedEvent.coordinates.lat])
                    .addTo(map.current!).setPopup(new mapboxgl.Popup({ offset: 25 }).setText(`${selectedEvent.place}: ${selectedEvent.details}`))
            );
            setIfMarkersAdded(true);
        }// add markers only once
    }, [props.lookAt]);

    return (
        <>
            <div>

                <div ref={mapContainer} className="map-container"><div className='sidebar'>{activePlaceDescription}</div></div>
            </div>

        </>
    );
};

export default Mapbox;
