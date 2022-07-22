import {createAsyncThunk} from "@reduxjs/toolkit";
import {ActionType} from "./common";
import {AuthService} from "../../services/auth/auth.service";
import {iUser, iUserSignInUp} from "../../interfaces/auth/iUser";
import {iSignUp, iSignIn} from "../../interfaces/auth/iSignInUp";


export const getAuthenticatedUser = createAsyncThunk<{ user: iUser }, void, { extra: { authService: AuthService } }>
(ActionType.GET_AUTHENTICATED, async (_args, {extra, rejectWithValue}) => ({
    user: await extra.authService.getAuthenticatedUser()
}));

export const signUp = createAsyncThunk<{ result: iUserSignInUp }, iSignUp, { extra: { authService: AuthService } }>
(ActionType.SIGN_UP, async ({email, password, fullName}, {extra}) => ({
    result: await extra.authService.signUp({email, password, fullName})
}));

export const signIn = createAsyncThunk<{ result: iUserSignInUp }, iSignIn, { extra: { authService: AuthService } }>
(ActionType.SIGN_IN, async ({email, password}, {extra}) => ({
    result: await extra.authService.signIn({email, password})
}));
