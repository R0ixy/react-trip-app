import {configureStore} from "@reduxjs/toolkit";
import {tripsService, authService} from '../services/services';
import {trips, auth} from "./root-reducer";

const store = configureStore({
    reducer: {
        trips,
        auth,
    },

    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    tripsService,
                    authService,
                }
            }
        });
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { store };