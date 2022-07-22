import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Nav} from "../headerNav";

export const Header = () => {
    const [isNavShown, setIsNavShown] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/sign-in' || location.pathname === '/sign-up') {
            setIsNavShown(false);
        } else {
            setIsNavShown(true);
        }
    }, [location]);


    return (
        <header className="header">
            <div className="header__inner">
                <Link to="/" className="header__logo">Travel App</Link>
                {isNavShown && <Nav/>}
            </div>
        </header>
    );
}