import {createAsyncThunk} from "@reduxjs/toolkit";
import {ActionType} from "./common";
import {TripsService} from "../../services/trips/trips.service";
import {iTrip} from "../../interfaces/trips/iTrip";


export const fetchTrips = createAsyncThunk<{ trips: iTrip[] }, void, { extra: { tripsService: TripsService } }>
(ActionType.FETCH_TRIPS, async (_args, {extra}) => ({
    trips: await extra.tripsService.getAll()
}));

export const fetchOneTrip = createAsyncThunk<{ trip: iTrip }, {id: string }, { extra: { tripsService: TripsService } }>
(ActionType.FETCH_ONE, async ({id}, {extra}) => ({
    trip: await extra.tripsService.getById(id)
}));