import {createAsyncThunk} from "@reduxjs/toolkit";
import {ActionType} from "./common";
import {BookingsService} from "../../services/bookings/bookings.service";
import {iBooking} from "../../interfaces/bookings/iBooking";
import {iCreateBooking} from "../../interfaces/bookings/iBooking";
import {showNotification} from "../../common/toastr/toastr";

export const fetchBookings = createAsyncThunk<{ bookings: iBooking[] }, void, { extra: { bookingsService: BookingsService } }>
(ActionType.FETCH_BOOKINGS, async (_args, {extra}) => ({
    bookings: await extra.bookingsService.getAll()
}));

export const addBooking = createAsyncThunk<{ booking: iBooking }, iCreateBooking, { extra: { bookingsService: BookingsService } }>
(ActionType.ADD_BOOKING, async ({tripId, userId, guests, date}, {extra}) => ({
    booking: await extra.bookingsService.create({tripId, userId, guests, date})
}));

export const deleteBooking = createAsyncThunk<{ bookingId: string }, string, { extra: { bookingsService: BookingsService } }>
(ActionType.DELETE_BOOKING, async (bookingId, {extra}) => {
    await extra.bookingsService.delete(bookingId)
    showNotification('Booking deleted', 'success');
    return ({
        bookingId: bookingId
    })
});
