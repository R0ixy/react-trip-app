import {ENV} from "../common/app/env";
import {Http} from "./http/http.service";
import {TripsService} from "./trips/trips.service";
import {AuthService} from "./auth/auth.service";

const http = new Http();

const tripsService = new TripsService(ENV.API.URL, http);
const authService = new AuthService(ENV.API.URL, http);

export {http, tripsService, authService};