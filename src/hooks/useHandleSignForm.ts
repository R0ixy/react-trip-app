import {useState} from "react";
import * as React from "react";

export const useHandleSignForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailWarning, setEmailWarning] = useState(false);
    const [passwordWarning, setPasswordWarning] = useState(false);


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        if (emailWarning) {
            setEmailWarning(false);
        }
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setPassword(password);
        if (passwordWarning) {
            setPasswordWarning(false);
        }
        if (password.length < 3 || password.length > 20) {
            setPasswordWarning(true);
        }
    }

    return ({
        useEmail: {
            email,
            emailWarning,
            setEmailWarning,
            handleEmailChange
        },
        usePassword: {
            password,
            passwordWarning,
            setPasswordWarning,
            handlePasswordChange
        }
    })
}