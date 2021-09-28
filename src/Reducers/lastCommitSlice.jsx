import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sha: '',
    error: '',
    loading: true,
}

export const lastCommitSlice = createSlice({
    name: 'lastCommit',
    initialState,
    reducers: {
        getLastCommitSuccess: (state, action) => {
            state.loading = false
            state.error = ''
            state.sha = action.payload.sha
        },
        getLastCommitFailure: (state, action) => {
            state.loading = false
            state.error = action.payload.error
            state.sha = ''
        }
    }
});

export const { getLastCommitSuccess, getLastCommitFailure } = lastCommitSlice.actions;
export default lastCommitSlice.reducer;