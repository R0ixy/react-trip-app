import * as React from 'react';
import {Link} from 'react-router-dom';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useHandleSignForm} from "../../hooks/useHandleSignForm";


export const SignUp = () => {
    const [name, setName] = useState('');
    const [nameWarning, setNameWarning] = useState(false);

    const {useEmail, usePassword} = useHandleSignForm();
    const {email, emailWarning, setEmailWarning, handleEmailChange} = useEmail;
    const {password, passwordWarning, setPasswordWarning, handlePasswordChange} = usePassword;

    const navigate = useNavigate();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
        if (nameWarning) {
            setNameWarning(false);
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name) {
            setNameWarning(true);
        }
        if (!email) {
            setEmailWarning(true);
        }
        if (!password) {
            setPasswordWarning(true);
        }

        if(!nameWarning && !emailWarning && !passwordWarning && name && email && password) {
            navigate('/',{replace: true});
        }
    }


    return (
        <main className="sign-up-page">
            <h1 className="visually-hidden">Travel App</h1>
            <form className="sign-up-form" autoComplete="off">
                <h2 className="sign-up-form__title">Sign Up</h2>
                <label className="trip-popup__input input">
                    <span className="input__heading">Full name</span>
                    <input name="full-name" type="text" onChange={handleNameChange} value={name} required/>
                    {nameWarning && <span className="warning">Name filed is required!</span>}
                </label>
                <label className="trip-popup__input input">
                    <span className="input__heading">Email</span>
                    <input name="email" type="email" onChange={handleEmailChange} value={email} required/>
                    {emailWarning && <span className="warning">Email filed is required!</span>}
                </label>
                <label className="trip-popup__input input">
                    <span className="input__heading">Password</span>
                    <input name="password" type="password" autoComplete="new-password" onChange={handlePasswordChange}
                           required/>
                    {passwordWarning && <span className="warning">Password must be 3 to 20 characters long!</span>}
                </label>
                <button className="button" type="submit" onClick={handleSubmit}>Sign Up</button>
            </form>
            <span>
                Already have an account?
                <Link to="/sign-in" className="sign-up-form__link">Sign In</Link>
            </span>
        </main>
    );
}