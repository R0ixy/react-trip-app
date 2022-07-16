import {iTrip} from "../interfaces/iTrip";
import {iFilterValues} from "../interfaces/iFilterValues";
import {DEFAULT_FILTER_VALUE} from "../constants/filterValues";


export const getFilteredTrips = (trips: iTrip[], filterValues: iFilterValues) => {
    const {search, duration, level} = filterValues;

    return trips.filter((trip) => {
        const isNameMatch = trip.title.toLowerCase().includes(search.toLowerCase());

        let isDurationMatch;
        switch (duration) {
            case '0_x_5':
                isDurationMatch = trip.duration <= 5;
                break;
            case '5_x_10':
                isDurationMatch = trip.duration > 5 && trip.duration < 10;
                break;
            case '10_x':
                isDurationMatch = trip.duration >= 10;
                break;
            case 'any':
                isDurationMatch = true;
        }

        const isLevelMatch = trip.level === level || level === DEFAULT_FILTER_VALUE;

        return isNameMatch && isDurationMatch && isLevelMatch;
    });
};
