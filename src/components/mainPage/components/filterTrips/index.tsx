import React from "react";
import {iFilterValues} from "../../../../interfaces/trips/iFilterValues";

interface iFilterProps {
    values: iFilterValues;
    onFilterChange: (value: iFilterValues) => void;
}


export const FilterTrips = ({values, onFilterChange}: iFilterProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
        const {name, value} = e.target;

        onFilterChange({
            ...values,
            [name]: value
        });
    }

    return (
        <section className="trips-filter">
            <h2 className="visually-hidden">Trips filter</h2>
            <form className="trips-filter__form" autoComplete="off">
                <label className="trips-filter__search input">
                    <span className="visually-hidden">Search by name</span>
                    <input name="search" type="search" onChange={handleChange} placeholder="search by title"/>
                </label>
                <label className="select">
                    <span className="visually-hidden">Search by duration</span>
                    <select name="duration" onChange={handleChange}>
                        <option value="any">duration</option>
                        <option value="0_x_5">&lt; 5 days</option>
                        <option value="5_x_10">&lt; 10 days</option>
                        <option value="10_x">&ge; 10 days</option>
                    </select>
                </label>
                <label className="select">
                    <span className="visually-hidden">Search by level</span>
                    <select name="level" onChange={handleChange}>
                        <option value="any">level</option>
                        <option value="easy">easy</option>
                        <option value="moderate">moderate</option>
                        <option value="difficult">difficult</option>
                    </select>
                </label>
            </form>
        </section>
    );
}