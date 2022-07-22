import {ENV} from "../common/app/env";
import {Http} from "./http/http.service";
import {AuthService} from "./auth/auth.service";
import {TripsService} from "./trips/trips.service";
import {BookingsService} from "./bookings/bookings.service";

const http = new Http();

const authService = new AuthService(ENV.API.URL, http);
const tripsService = new TripsService(ENV.API.URL, http);
const bookingsService = new BookingsService(ENV.API.URL, http);

export {http, authService, tripsService, bookingsService};