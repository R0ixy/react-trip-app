import trips from '../../../../data/trips.json';
import {TripCard} from "../tripCard";
import {FilterTrips} from "../filterTrips";

export const MainPage = () => {



    return(
        <main>
            <h1 className="visually-hidden">Travel App</h1>
            <FilterTrips/>

            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    <>
                    {trips.map((trip) => <TripCard trip={trip} key={trip.id}/>)}
                    </>
                </ul>
            </section>
        </main>
    );
}