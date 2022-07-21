import {useState, useEffect} from "react";
// import trips from '../../../../data/trips.json';
import {TripCard} from "../tripCard";
import {FilterTrips} from "../filterTrips";
import {getFilteredTrips} from "../../helpers/get-filtered-trips.helper"
import {iFilterValues} from "../../interfaces/iFilterValues";
import {iTrip} from "../../interfaces/iTrip";
import {DEFAULT_FILTER_VALUES} from "../../constants/filterValues";
import {useAppDispatch, useAppSelector} from "../../../../hooks/typedReduxHooks";
import {trips as tripsActionCreator} from "../../../../store/actions";
import {Loader} from "../../../loader";
import {DataStatus} from "../../../../common/app/data-status.enum";


export const MainPage = () => {
    const [filterValues, setFilterValue] = useState(DEFAULT_FILTER_VALUES);
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.auth.user);
    const { trips, status } = useAppSelector((state) => state.trips);

    // const { trips, status } = useAppSelector(({ trips }) => ({
    //     trips: trips.trips,
    //     status: trips.status,
    // }));


    const filteredTrips: iTrip[] = getFilteredTrips(trips, filterValues);

    const handleFilterChange = (value: iFilterValues) => setFilterValue(value);


    useEffect(() => {
        if (user) {
            dispatch(tripsActionCreator.fetchTrips());
        }
    }, [dispatch, user]);

    if (status === DataStatus.PENDING) {
        return <Loader />;
    }

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