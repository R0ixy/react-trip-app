import {createAsyncThunk} from "@reduxjs/toolkit";
import {ActionType} from "./common";
import {TripsService} from "../../services/trips/trips.service";
import {iTrip} from "../../components/mainPage/interfaces/iTrip";


export const fetchTrips = createAsyncThunk<{ trips: iTrip[] }, void, { extra: { tripsService: TripsService } }>
(ActionType.FETCH_TRIPS, async (_args, {extra}) => ({
    trips: await extra.tripsService.getAll()
}));
