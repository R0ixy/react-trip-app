import React from 'react';
import './css/style.css';
import {Routes, Route} from 'react-router-dom';
import {Header} from "./components/header";
import {Footer} from "./components/footer";
import {SignIn} from "./components/sign-in";
import {SignUp} from "./components/sign-up";


function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<div>Home</div>}/>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                {/*<main className="main"></main>*/}
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
