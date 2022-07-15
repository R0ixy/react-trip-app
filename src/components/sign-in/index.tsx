import {Link} from 'react-router-dom';
import {useHandleSignForm} from "../../hooks/useHandleSignForm";
import {useNavigate} from "react-router-dom";
import * as React from "react";

export const SignIn = () => {
    const {useEmail, usePassword} = useHandleSignForm();
    const {email, emailWarning, setEmailWarning, handleEmailChange} = useEmail;
    const {password, passwordWarning, setPasswordWarning, handlePasswordChange} = usePassword;
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setEmailWarning(true);
        }
        if (!password) {
            setPasswordWarning(true);
        }

        if(!emailWarning && !passwordWarning  && email && password) {
            navigate('/',{replace: true});
        }
    }

    return (

        <main className="sign-in-page">
            <h1 className="visually-hidden">Travel App</h1>
            <form className="sign-in-form" autoComplete="off">
                <h2 className="sign-in-form__title">Sign In</h2>
                <label className="trip-popup__input input">
                    <span className="input__heading">Email</span>
                    <input name="email" type="email" onChange={handleEmailChange} required/>
                    {emailWarning && <span className="warning">Email filed is required!</span>}
                </label>
                <label className="trip-popup__input input">
                    <span className="input__heading">Password</span>
                    <input name="password" type="password" autoComplete="new-password" onChange={handlePasswordChange} required/>
                    {passwordWarning && <span className="warning">Password must be 3 to 20 characters long!</span>}
                </label>
                <button className="button" type="submit" onClick={handleSubmit}>Sign In</button>
            </form>
            <span>
                Already have an account?
                <Link to="/sign-up" className="sign-in-form__link">Sign Up</Link>
            </span>
        </main>

    );
}