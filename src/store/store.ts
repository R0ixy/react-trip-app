import {configureStore} from "@reduxjs/toolkit";
import {tripsService, authService, bookingsService} from '../services/services';
import {trips, auth, bookings, errors} from "./root-reducer";

const store = configureStore({
    reducer: {
        trips,
        auth,
        bookings,
        errors,
    },

    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    authService,
                    tripsService,
                    bookingsService,
                }
            }
        });
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store };