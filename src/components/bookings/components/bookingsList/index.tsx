import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../../hooks/typedReduxHooks";
import {BookingCard} from "../bookingCard";
import {Loader} from "../../../loader";
import {bookings as bookingsActionCreator} from "../../../../store/actions";
import {iBooking} from "../../../../interfaces/bookings/iBooking";
import {showNotification} from "../../../../common/toastr/toastr";


export const Bookings = () => {
    const {bookings, status} = useAppSelector(({bookings}) => ({
        bookings: bookings.bookings,
        status: bookings.status,
    }));
    const dispatch = useAppDispatch();

    const bookingsList: iBooking[] = [...bookings].sort(
        (b1, b2) => new Date(b1.date).getTime() - new Date(b2.date).getTime()
    )

    useEffect(() => {
        dispatch(bookingsActionCreator.fetchBookings()).unwrap().catch(e => {
            showNotification(`Error: ${e.message}`, 'error');
        });
    }, [dispatch]);


    if (status === 'pending') {
        return (<Loader/>);
    }

    return (
        <main className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">

                {bookingsList.map((booking) => <BookingCard key={booking.id}
                                                            booking={booking}/>)
                }
            </ul>
        </main>
    );
}