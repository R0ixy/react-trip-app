import {createReducer} from "@reduxjs/toolkit";
import {DataStatus} from "../../common/app/data-status.enum";
import {fetchTrips} from "./actions";
import {iTrip} from "../../components/mainPage/interfaces/iTrip";

const initialState = {
    trips: [] as iTrip[],
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
});