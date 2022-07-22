import React, {useEffect} from 'react';
import './css/style.css';
import 'react-toastify/dist/ReactToastify.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Header} from "./components/header/components/headerContainer";
import {Footer} from "./components/footer";
import {SignIn} from "./components/sign-in";
import {SignUp} from "./components/sign-up";
import {MainPage} from "./components/mainPage/components/tripList";
import {Bookings} from "./components/bookings/components/bookingsList";
import {Trip} from "./components/trip";
import {ToastContainer} from "react-toastify";
import {useAppSelector, useAppDispatch} from "./hooks/typedReduxHooks";
import {auth as authActionCreator} from "./store/actions";
import {Loader} from "./components/loader";


function App() {

    const dispatch = useAppDispatch();

    const {status} = useAppSelector(({auth}) => ({
        status: auth.status
    }));

    useEffect(() => {
        dispatch(authActionCreator.getAuthenticatedUser())
    }, [dispatch]);

    if (status === 'pending') {
        return (<Loader/>)
    }

    return (
        <>
            <Header/>
            <ToastContainer/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/bookings' element={<Bookings/>}/>
                <Route path='/trip/:id' element={<Trip/>}/>

                <Route path="*" element={<Navigate to={'/'}/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
