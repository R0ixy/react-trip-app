import {Link} from 'react-router-dom';
import briefcase from '../../images/briefcase.svg';
import userImg from '../../images/user.svg';
import {useLocation, useNavigate, Navigate} from 'react-router-dom';
import {useState, useEffect, useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/typedReduxHooks";
import {auth as authActionCreator} from "../../store/actions";
import {toast} from "react-toastify";
import {DataStatus} from "../../common/app/data-status.enum";


const Nav = () => {
    let navigate = useNavigate();

    const dispatch = useAppDispatch();
    const {user, status} = useAppSelector(({auth}) => ({
        user: auth.user,
        status: auth.status,
    }));


    useEffect(() => {
        dispatch(authActionCreator.getAuthenticatedUser())
            // .unwrap()
            // .catch(e => {
            // if (e.message === '401') {
            //     navigate("/sign-in", {replace: true});
            // }
        // });
    }, [dispatch, navigate]);

    toast.onChange((payload) => {
        if (payload.content ==='Error: 401') {
            navigate("/sign-in", {replace: true});
        }
    });


    const onSignOut = () => {
        localStorage.removeItem("token");
        navigate("/sign-in", {replace: true});
    }

    if (status === 'auth/error') {
        console.log(status);
        return (<Navigate to="/sign-in" replace={true}/>);
    }


    return (
        <nav className="header__nav">
            <ul className="nav-header__list">
                <li className="nav-header__item" title="Bookings">
                    <Link to="/bookings" className="nav-header__inner">
                        <span className="visually-hidden">Bookings</span>
                        <img src={briefcase} alt=" icon"/>
                    </Link>
                </li>
                <li className="nav-header__item" title="Profile">
                    <div className="nav-header__inner profile-nav" tabIndex={0}>
                        <span className="visually-hidden">Profile</span>
                        <img src={userImg} alt="profile icon"/>
                        <ul className="profile-nav__list">
                            <li className="profile-nav__item profile-nav__username">{user.fullName}</li>
                            <li className="profile-nav__item">
                                <button className="profile-nav__sign-out button" onClick={onSignOut}>Sign Out</button>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

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