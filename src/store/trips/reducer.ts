import {createReducer} from "@reduxjs/toolkit";
import {DataStatus} from "../../common/app/data-status.enum";
import {fetchTrips, fetchOneTrip} from "./actions";
import {iTrip} from "../../interfaces/trips/iTrip";

interface iInitialState {
    trips: iTrip[],
    status: string,
}

const initialState: iInitialState = {
    trips: [],
    status: DataStatus.IDLE,
};


export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchTrips.pending, (state) => {
        state.status = DataStatus.PENDING;
    });
    builder.addCase(fetchTrips.fulfilled, (state, {payload}) => {
        const {trips} = payload;
        state.trips = trips;
        state.status = DataStatus.SUCCESS;
    });

    builder.addCase(fetchOneTrip.pending, (state) => {
        state.status = DataStatus.PENDING;
    });
    builder.addCase(fetchOneTrip.fulfilled, (state, {payload}) => {
        const {trip} = payload;
        state.trips = [trip];
        state.status = DataStatus.SUCCESS;
    });
});