import {createReducer} from "@reduxjs/toolkit";
import {DataStatus} from "../../common/app/data-status.enum";
import {getAuthenticatedUser, signIn, signUp} from "./actions";
import {iUser} from "../../interfaces/auth/iUser";

interface iInitialState {
    user: iUser,
    status: string,
}

const initialState: iInitialState = {
    user: {} as iUser,
    status: DataStatus.IDLE,
};

export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(getAuthenticatedUser.pending, (state) => {
        state.status = DataStatus.PENDING;
    });
    builder.addCase(getAuthenticatedUser.fulfilled, (state, {payload}) => {
        const {user} = payload;
        state.user = user;
        state.status = DataStatus.SUCCESS;
    });

    builder.addCase(signUp.fulfilled, (state, {payload}) => {
        const {result} = payload;
        state.user = result.user;
        localStorage.setItem('token', result.token);
        state.status = DataStatus.SUCCESS;
    });

    builder.addCase(signIn.fulfilled, (state, {payload}) => {
        const {result} = payload;
        state.user = result.user;
        localStorage.setItem('token', result.token);
        state.status = DataStatus.SUCCESS;
    });
});