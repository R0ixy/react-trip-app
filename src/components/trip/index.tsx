import {useEffect, useState} from "react";
import {useParams, useNavigate, Navigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/typedReduxHooks";
import {Modal} from "../modal";
import {Loader} from "../loader";
import {DataStatus} from "../../common/app/data-status.enum";
import {trips as tripsActionCreator} from "../../store/actions";

export const Trip = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {trip, status} = useAppSelector(({trips}) => ({
        trip: trips.trips[0],
        status: trips.status,
    }));

    const {error_message, error_type} = useAppSelector(({errors}) => ({
        error_message: errors.error_message,
        error_type: errors.error_type,
    }));


    useEffect(() => {
        if (id) {
            dispatch(tripsActionCreator.fetchOneTrip({id}));
        }
    }, [dispatch, id, navigate]);


    if (error_message === '404' && error_type === '/trip/rejected') {
        return (<Navigate to="/" replace={true}/>);
    }

    if (status === DataStatus.SUCCESS) {
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
    } else {
        return (<Loader/>);
    }
}