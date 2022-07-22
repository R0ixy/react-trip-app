import React from 'react';
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


function App() {
    return (
        <>
            <Header/>
            <ToastContainer />
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
