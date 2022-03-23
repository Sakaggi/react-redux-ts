import { useState } from "react";
import { IFilter } from "../models/IFilter";

const Filter = (props: IFilter) => {
    const defaultFilter = ["*"];
    const [filterBy, setFilterBy] = useState(defaultFilter);

    const filter = (selectedOption: string) => {
        let newFilters = [...filterBy];
        if (selectedOption === defaultFilter[0]) {
            newFilters = defaultFilter;
        } else {
            if (newFilters.includes(defaultFilter[0])) newFilters = [];
            newFilters = newFilters.includes(selectedOption) ? newFilters.filter(filter => filter !== selectedOption) : [...newFilters, selectedOption];
            if (newFilters.length === 0) newFilters = defaultFilter;
        }
        setFilterBy(newFilters);
        props.filter(newFilters);
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", margin: "10px 10px" }}>
                Filter By:
                <div>
                    {props.options.map((option) => {
                        return (
                            <button key={option} className={`filter ${filterBy.includes(option) && "selected"}`} onClick={() => filter(option)}>{option}</button>
                        );
                    })}
                    <button className={`filter`} onClick={() => filter(defaultFilter[0])}>Reset</button>
                </div>
            </div>
        </>
    );
};

export default Filter;