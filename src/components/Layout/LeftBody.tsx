import { useState } from 'react';

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

import { Button } from '@mui/material';

import { filterableTypes } from '../../data';
import Filter from '../Filter';
import List from '../List';

const LeftBody = () => {
    const dispatch = useDispatch();
    const { sortByName, sortByYear, filterByType, reset } = bindActionCreators(actionCreators, dispatch);

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
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", margin: "10px 5px" }}>
                    Sort by:
                    <Button variant="text" onClick={sort.byName}>Name</Button>
                    <Button variant="text" onClick={sort.byYear}>Year</Button>
                </div>

                <Filter options={filterableTypes} filter={filter} />

                <List />

            </div>
        </>
    );
};

export default LeftBody;
