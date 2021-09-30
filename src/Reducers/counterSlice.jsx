import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state) => {
            state.value += 1
        },
        decrease: (state) => {
            state.value -= 1
        },
        increaseByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increase, decrease, increaseByAmount } = counterSlice.actions;
export default counterSlice.reducer;