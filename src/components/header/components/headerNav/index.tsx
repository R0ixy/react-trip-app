import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../hooks/typedReduxHooks";
import {showNotification} from "../../../../common/toastr/toastr";
import {errors as errorActionCreator} from "../../../../store/actions";
import briefcase from "../../../../images/briefcase.svg";
import userImg from "../../../../images/user.svg";


export const Nav = () => {
    let navigate = useNavigate();

    const dispatch = useAppDispatch();
    const {user} = useAppSelector(({auth}) => ({
        user: auth.user,
    }));

    const {error_message, error_type} = useAppSelector(({errors}) => ({
        error_message: errors.error_message,
        error_type: errors.error_type,
    }));


    useEffect(() => {
        if (error_message) {
            switch (error_message) {
                case '401':
                    navigate("/sign-in", {replace: true});
                    break;
                case '404':
                    showNotification(`Page not found`, 'error');
                    break;
                case 'Failed to fetch':
                    showNotification(`Server is not available`, 'error');
                    break;
                default:
                    showNotification(`Error: ${error_message}`, 'error');
            }
            dispatch(errorActionCreator.clearError());
        }
        if (!user.id) {
            navigate("/sign-in", {replace: true});
        }
    }, [error_message, error_type, navigate, dispatch, user]);


    const onSignOut = () => {
        localStorage.removeItem("token");
        navigate("/sign-in", {replace: true});
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