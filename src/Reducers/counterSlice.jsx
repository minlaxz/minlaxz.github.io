import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state) => {
            toast.success('dipatched increase')
            state.value += 1
        },
        decrease: (state) => {
            toast.warn('dipatched decrease')
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