import {iBooking} from "../../interfaces/iBooking";

interface iBookingCardProps {
    canceled: string[];
    booking: iBooking;
    setCanceled: (id: string[]) => void;
}

export const BookingCard = ({canceled, booking, setCanceled}: iBookingCardProps) => {

    const handleCancel = () => {
        setCanceled([...canceled, booking.id]);
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