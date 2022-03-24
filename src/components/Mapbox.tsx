import { useEffect, useState, useRef } from 'react';
import mapboxgl, { Map } from "mapbox-gl";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from '../state';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Metadata from './Metadata';
import { Button } from '@mui/material';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FrYWdnaSIsImEiOiJjbDB2enIyczIwa3pqM2RvMmF4djhibmZhIn0.7mjlDHruPiQ-tS6alWfzzw';

const Mapbox = () => {
    const dispatch = useDispatch();
    const { selectPrevious, selectNext } = bindActionCreators(actionCreators, dispatch)
    const state = useSelector((state: State) => state.lifeEvents);
    const mapContainer = useRef(null);
    const map = useRef<Map | null>(null);
    const defaultCoordinates = state.selectedLifeEvents.length > 0 ? state.selectedLifeEvents[0].coordinates : { lng: 0, lat: 0 };
    const [lnglat, setLngLat] = useState([defaultCoordinates.lng.toFixed(4) as unknown as number, defaultCoordinates.lat.toFixed(4) as unknown as number])
    // const [ifMarkersAdded, setIfMarkersAdded] = useState(false);

    const flyToTheSelectedLocation = () => {
        if (!state.selectedLifeEvents.length) return;
        map.current?.flyTo({
            center: [state.lookAt.coordinates.lng.toFixed(4) as unknown as number, state.lookAt.coordinates.lat.toFixed(4) as unknown as number],
            essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
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
            zoom: 10,
        });

        //OPTIONAL: Add markers to all the places
        // if (!ifMarkersAdded) {
        //     state.selectedLifeEvents.map(selectedEvent =>
        //         new mapboxgl.Marker({ color: 'black' })
        //             .setLngLat([selectedEvent.coordinates.lng, selectedEvent.coordinates.lat])
        //             .addTo(map.current!).setPopup(new mapboxgl.Popup({ offset: 25 }).setText(`${selectedEvent.place}: ${selectedEvent.details}`))
        //     );
        //     setIfMarkersAdded(true);
        // }// add markers only once

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.lookAt]);

    return (
        <>
            <div ref={mapContainer} className="map-container">
                <Metadata place={state.lookAt.place} start={state.lookAt.start} end={state.lookAt.end} type={state.lookAt.type} details={state.lookAt.details} />
                <div className='navigate-buttons'>
                    <Button variant="outlined" onClick={selectPrevious}><ArrowBackIosNewIcon /></Button>
                    <Button variant="outlined" onClick={selectNext}><ArrowForwardIosIcon /></Button>
                </div>
            </div>
        </>
    );
};

export default Mapbox;
