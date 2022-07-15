import heart from '../../images/heart.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <span className="footer__text">
                from <a className="footer__link" href="https://binary-studio.com">binary studio</a> with
                <img className="footer__icon" src={heart} alt="heart icon"/>
            </span>
        </footer>
    )
}