import React from 'react';
import './css/style.css';
import {Routes, Route} from 'react-router-dom';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {SignIn} from "./components/sign-in";
import {SignUp} from "./components/sign-up";
import {MainPage} from "./components/mainPage/components/tripList";
import {Bookings} from "./components/bookings/components/bookingsList";
import {Trip} from "./components/trip";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/bookings' element={<Bookings/>}/>
                <Route path='/trip/:id' element={<Trip />}/>
                <Route path="*" element={<MainPage/>}/>
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
