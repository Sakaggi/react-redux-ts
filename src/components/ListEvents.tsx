import { useState } from 'react';
import Filter from './Filter';

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";

import { LifeEvent } from "../models/LifeEvent";
import { IListEvents } from '../models/IListEvents';

const ListEvents = (props: IListEvents) => {
    const dispatch = useDispatch();
    const { sortByName, sortByYear, filterByType, selectCurrent, reset } = bindActionCreators(actionCreators, dispatch);
    const state = useSelector((state: State) => state.lifeEvents);

    const [isSortByNameAscending, setIsSortByNameAscending] = useState(true);
    const [isSortByYearAscending, setIsSortByYearAscending] = useState(true);

    const sort = {
        byName: () => {
            sortByName(isSortByNameAscending);
            setIsSortByNameAscending(isSortByNameAscending === true ? false : true);
        },
        byYear: () => {
            sortByYear(isSortByYearAscending);
            setIsSortByYearAscending(isSortByYearAscending === true ? false : true);
        }
    }

    const filter = (filterBy: any) => {
        filterBy.includes("*") ? reset() : filterByType(filterBy);
    }

    return (
        <>
            <div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin: "10px 5px" }}>
                    Sort by:
                    <button onClick={sort.byName}>Name</button>
                    <button onClick={sort.byYear}>Year</button>
                </div>

                <Filter options={props.filterableTypes} filter={filter} />

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {state.selectedLifeEvents.map((lifeEvent: LifeEvent, i: number) => <div key={i} className={`selectable-event ${state.lookAt === lifeEvent && 'selected'}`} onClick={() => selectCurrent(lifeEvent)}>{lifeEvent.place}</div>)}
                </div>

            </div>
        </>
    );
};

export default ListEvents;
