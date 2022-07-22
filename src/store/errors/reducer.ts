import {createReducer} from "@reduxjs/toolkit";
import {ActionStatus} from "../../common/app/action-status.enum";
import {clearError} from "./actions";

const initialState = {
    error_type: '',
    error_message: '',
};

export const reducer = createReducer(initialState, (builder) => {

    builder.addCase(clearError, (state) => {
        state.error_type = '';
        state.error_message = '';
    });

    builder.addMatcher((action) => action.type.endsWith(ActionStatus.REJECTED), (state, action: ErrorEvent) => {
        state.error_type = action.type;
        state.error_message = action.error.message;
    });

});