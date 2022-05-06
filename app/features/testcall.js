import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    response: null,
    error: null,
    loading: false,
};

export const testCallSlice = createSlice({
    name: "testCall",
    initialState,
    reducers: {
        testCallRequest: (state) => {
            state.loading = true;
        },
        testCallSuccess: (state, action) => {
            state.response = action.payload;
            state.error = null;
            state.loading = false;
        },
        testCallFailure: (state, action) => {
            state.response = null;
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { testCallSuccess, testCallFailure, testCallRequest } = testCallSlice.actions;
export default testCallSlice.reducer;