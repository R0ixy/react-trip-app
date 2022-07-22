import {createReducer} from "@reduxjs/toolkit";
import {DataStatus} from "../../common/app/data-status.enum";
import {fetchBookings, addBooking, deleteBooking} from "./actions";
import {iBooking} from "../../interfaces/bookings/iBooking";
import {ActionStatus} from "../../common/app/action-status.enum";

const initialState = {
    bookings: [] as iBooking[],
    status: DataStatus.IDLE,
};

export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchBookings.pending, (state) => {
        state.status = DataStatus.PENDING;
    });
    builder.addCase(fetchBookings.fulfilled, (state, {payload}) => {
        const {bookings} = payload;
        state.bookings = bookings;
        state.status = DataStatus.SUCCESS;
    });

    builder.addCase(addBooking.fulfilled, (state, {payload}) => {
        const {booking} = payload;
        state.bookings.push(booking);
        state.status = DataStatus.SUCCESS;
    });

    builder.addCase(deleteBooking.fulfilled, (state, {payload}) => {
        const {bookingId} = payload;
        state.bookings = state.bookings.filter(booking => booking.id !== bookingId);
        state.status = DataStatus.SUCCESS;
    });

    builder.addMatcher((action) => action.type.endsWith(ActionStatus.REJECTED), (state, action) => {
        console.log(action);
        state.status = DataStatus.ERROR;
    });
});