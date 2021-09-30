import { createSlice } from "@reduxjs/toolkit";

const initialState = { toastEnabled: true };

export const toastSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        toggleToast: (state) => {
            state.toastEnabled = !state.toastEnabled;
        }
    }
});

export const { toggleToast } = toastSlice.actions;
export default toastSlice.reducer;