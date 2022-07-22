import React, {ChangeEvent, FormEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/typedReduxHooks";
import {iTrip} from "../../interfaces/trips/iTrip";
import {bookings as bookingsActionCreator} from "../../store/actions";

interface iModalProps {
    trip: iTrip;
    setIsModalOpen: (value: boolean) => void;
}

export const Modal = ({trip, setIsModalOpen}: iModalProps) => {
    const [guests, setGuests] = useState('1');
    const [totalPrice, setTotalPrice] = useState(trip.price);
    const [date, setDate] = useState('');
    const [dateWarning, setDateWarning] = useState(false);
    const [guestsWarning, setGuestsWarning] = useState(false);

    const dispatch = useAppDispatch();

    const {user} = useAppSelector(({auth}) => ({
        user: auth.user,
    }));


    const handleGuests = (e: ChangeEvent<HTMLInputElement>) => {
        if (guestsWarning) {
            setGuestsWarning(false);
        }
        const guests = e.target.value;
        if (+guests > 10 || +guests < 1) {
            setGuestsWarning(true);
        } else {
            setTotalPrice(trip.price * +guests);
        }

        setGuests(guests);
    }

    const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
        if (dateWarning) {
            setDateWarning(false);
        }
        setDate(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!date) {
            setDateWarning(true);
        }
        if (date && !dateWarning && !guestsWarning) {
            dispatch(bookingsActionCreator.addBooking({
                tripId: trip.id,
                userId: user.id,
                guests: +guests,
                date
            }));
            setIsModalOpen(false);
        }

    }

    return (
        <div className="modal">
            <div className="trip-popup">
                <button className="trip-popup__close"
                        onClick={() => {
                            setIsModalOpen(false)
                        }}>×
                </button>
                <form className="trip-popup__form" autoComplete="off">
                    <div className="trip-info">
                        <h3 className="trip-info__title">{trip.title}</h3>
                        <div className="trip-info__content">
                            <span className="trip-info__duration"><strong>{trip.duration}</strong> days</span>
                            <span className="trip-info__level">{trip.level}</span>
                        </div>
                    </div>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Date</span>
                        <input name="date" type="date"
                               min={new Date().toLocaleDateString('en-ca')}
                               value={date}
                               onChange={handleDate} required/>
                        {dateWarning && <span className="warning">Date filed is required!</span>}
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Number of guests</span>
                        <input name="guests" type="number"
                               min="1" max="10"
                               value={guests}
                               onChange={handleGuests}
                               required/>
                        {guestsWarning && <span className="warning">Number of guests must be 1 to 10!</span>}
                    </label>
                    <span className="trip-popup__total">
                        Total: <output className="trip-popup__total-value">{totalPrice}$</output>
                    </span>
                    <button className="button" type="submit" onClick={handleSubmit}>Book a trip</button>
                </form>
            </div>
        </div>
    );
}