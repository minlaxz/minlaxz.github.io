import { createSlice } from "@reduxjs/toolkit";

const initialState = { darkThemeEnabled: false };

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.darkThemeEnabled = !state.darkThemeEnabled;
        }
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;