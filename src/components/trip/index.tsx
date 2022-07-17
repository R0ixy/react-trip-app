import {useState} from "react";
import {useParams, Navigate} from 'react-router-dom';
import {Modal} from "../modal";
import trips from '../../data/trips.json';
import {iTrip} from "../mainPage/interfaces/iTrip";

export const Trip = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {id} = useParams();
    const trip: iTrip | undefined = trips.find((trip) => trip.id === id);


    if (!trip) {
        return (<Navigate to="/" replace={true}/>);

    } else {

        return (
            <main className="trip-page">
                <h1 className="visually-hidden">Travel App</h1>
                <div className="trip">
                    <img src={trip.image} className="trip__img" alt="trip"/>
                    <div className="trip__content">
                        <div className="trip-info">
                            <h3 className="trip-info__title">{trip.title}</h3>
                            <div className="trip-info__content">
                                <span className="trip-info__duration"><strong>{trip.duration}</strong> days</span>
                                <span className="trip-info__level">{trip.level}</span>
                            </div>
                        </div>
                        <div className="trip__description">
                            {trip.description}
                        </div>
                        <div className="trip-price">
                            <span>Price</span>
                            <strong className="trip-price__value">{trip.price} $</strong>
                        </div>
                        <button className="trip__button button" onClick={() => setIsModalOpen(true)}>Book a trip
                        </button>
                        {isModalOpen && <Modal trip={trip} setIsModalOpen={setIsModalOpen}/>}
                    </div>
                </div>
            </main>
        );
    }
}