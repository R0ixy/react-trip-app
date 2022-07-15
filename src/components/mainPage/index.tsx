export const MainPage = () => {

    return(
        <main>
            <h1 className="visually-hidden">Travel App</h1>
            <section className="trips-filter">
                <h2 className="visually-hidden">Trips filter</h2>
                <form className="trips-filter__form" autoComplete="off">
                    <label className="trips-filter__search input">
                        <span className="visually-hidden">Search by name</span>
                        <input name="search" type="search" placeholder="search by title"/>
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by duration</span>
                        <select name="duration">
                            <option value="">duration</option>
                            <option value="0_x_5">&lt; 5 days</option>
                            <option value="5_x_10">&lt; 10 days</option>
                            <option value="10_x">&ge; 10 days</option>
                        </select>
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by level</span>
                        <select name="level">
                            <option value="">level</option>
                            <option value="easy">easy</option>
                            <option value="moderate">moderate</option>
                            <option value="difficult">difficult</option>
                        </select>
                    </label>
                </form>
            </section>
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    <li className="trip-card">
                        <img src="./assets/images/iceland.jpg" alt="trip image"/>
                        <div className="trip-card__content">
                            <div className="trip-info">
                                <h3 className="trip-info__title">Iceland</h3>
                                <div className="trip-info__content">
                                    <span className="trip-info__duration"><strong>15</strong> days</span>
                                    <span className="trip-info__level">easy</span>
                                </div>
                            </div>
                            <div className="trip-price">
                                <span>Price</span>
                                <strong className="trip-price__value">7000 $</strong>
                            </div>
                        </div>
                        <a href="./trip.html" className="button">Discover a trip</a>
                    </li>
                    <li className="trip-card">
                        <img src="./assets/images/iceland.jpg" alt="trip image"/>
                        <div className="trip-card__content">
                            <div className="trip-info">
                                <h3 className="trip-info__title">Iceland</h3>
                                <div className="trip-info__content">
                                    <span className="trip-info__duration"><strong>15</strong> days</span>
                                    <span className="trip-info__level">easy</span>
                                </div>
                            </div>
                            <div className="trip-price">
                                <span>Price</span>
                                <strong className="trip-price__value">7000 $</strong>
                            </div>
                        </div>
                        <a href="./trip.html" className="button">Discover a trip</a>
                    </li>
                    <li className="trip-card">
                        <img src="./assets/images/iceland.jpg" alt="trip image"/>
                        <div className="trip-card__content">
                            <div className="trip-info">
                                <h3 className="trip-info__title">Iceland</h3>
                                <div className="trip-info__content">
                                    <span className="trip-info__duration"><strong>15</strong> days</span>
                                    <span className="trip-info__level">easy</span>
                                </div>
                            </div>
                            <div className="trip-price">
                                <span>Price</span>
                                <strong className="trip-price__value">7000 $</strong>
                            </div>
                        </div>
                        <a href="./trip.html" className="button">Discover a trip</a>
                    </li>
                    <li className="trip-card">
                        <img src="./assets/images/iceland.jpg" alt="trip image"/>
                        <div className="trip-card__content">
                            <div className="trip-info">
                                <h3 className="trip-info__title">Iceland</h3>
                                <div className="trip-info__content">
                                    <span className="trip-info__duration"><strong>15</strong> days</span>
                                    <span className="trip-info__level">easy</span>
                                </div>
                            </div>
                            <div className="trip-price">
                                <span>Price</span>
                                <strong className="trip-price__value">7000 $</strong>
                            </div>
                        </div>
                        <a href="./trip.html" className="button">Discover a trip</a>
                    </li>
                </ul>
            </section>
        </main>
    );
}