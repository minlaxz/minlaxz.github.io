import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: '', message: '' };

export const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload
        },
        changeMessage: (state, action) => {
            state.message = action.payload
        }
    }
});

export const { changeName, changeMessage } = feedbackSlice.actions;
export default feedbackSlice.reducer;