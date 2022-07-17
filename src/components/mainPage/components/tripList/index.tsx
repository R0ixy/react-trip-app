import {useState} from "react";
import trips from '../../../../data/trips.json';
import {TripCard} from "../tripCard";
import {FilterTrips} from "../filterTrips";
import {getFilteredTrips} from "../../helpers/get-filtered-trips.helper"
import {iFilterValues} from "../../interfaces/iFilterValues";
import {iTrip} from "../../interfaces/iTrip";
import {DEFAULT_FILTER_VALUES} from "../../constants/filterValues";


export const MainPage = () => {
    const [filterValues, setFilterValue] = useState(DEFAULT_FILTER_VALUES);

    const filteredTrips: iTrip[] = getFilteredTrips(trips, filterValues);

    const handleFilterChange = (value: iFilterValues) => setFilterValue(value);


    return (
        <main>
            <h1 className="visually-hidden">Travel App</h1>
            <FilterTrips values={filterValues} onFilterChange={handleFilterChange}/>

            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    <>
                        {filteredTrips.map((trip) => <TripCard trip={trip} key={trip.id}/>)}
                    </>
                </ul>
            </section>
        </main>
    );
}