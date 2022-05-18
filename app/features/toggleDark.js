import { createSlice } from "@reduxjs/toolkit";

const initialState = { isDarkModeEnabled: true };

export const toggleDarkModeSlice = createSlice({
    name: "darkModeToggler",
    initialState,
    reducers: {
        toggleDarkMode: (state, action) => {
            state.isDarkModeEnabled = !state.isDarkModeEnabled;
        }
    }
});

export const { toggleDarkMode } = toggleDarkModeSlice.actions;
export default toggleDarkModeSlice.reducer;
