import {iBooking} from "../../../../interfaces/bookings/iBooking";
import {bookings as bookingsActionCreator} from "../../../../store/actions";
import {useAppDispatch, useAppSelector} from "../../../../hooks/typedReduxHooks";
import React from "react";
import {showNotification} from "../../../../common/toastr/toastr";

interface iBookingCardProps {
    booking: iBooking;
}

export const BookingCard = ({booking}: iBookingCardProps) => {
    const dispatch = useAppDispatch();

    const handleCancel = () => {
        dispatch(bookingsActionCreator.deleteBooking(booking.id)).unwrap().catch((e)=>{
            showNotification(`Error ${e.message}`, 'error');
        });
    }

    return (
        <li className="booking">
            <h3 className="booking__title">{booking.trip.title}</h3>
            <span className="booking__guests">{booking.guests} guests</span>
            <span className="booking__date">{new Date(booking.date).toLocaleDateString('en-ca')}</span>
            <span className="booking__total">{booking.totalPrice} $</span>
            <button className="booking__cancel" title="Cancel booking" onClick={handleCancel}>
                <span className="visually-hidden">Cancel booking</span>
                ×
            </button>
        </li>
    );
}