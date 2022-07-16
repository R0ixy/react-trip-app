import {useState} from "react";
import bookings from '../../../../data/bookings.json';
import {BookingCard} from "../bookingCard";


export const Bookings = () => {
    const [canceled, setCanceled] = useState(['']);

    const bookingsList = bookings.filter(booking => canceled.indexOf(booking.id) === -1)
        .sort(
            (b1, b2) => new Date(b1.date).getTime() - new Date(b2.date).getTime()
        )

    return (
        <main className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">

                {bookingsList.map((booking) => <BookingCard key={booking.id}
                                                            booking={booking}
                                                            canceled={canceled}
                                                            setCanceled={setCanceled}/>)
                }
            </ul>
        </main>
    );
}