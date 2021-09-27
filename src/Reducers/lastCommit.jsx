const initialState = { sha: '', error: '', loading: true };

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_LAST_COMMIT_SUCCESS':
            return {
                ...state,
                sha: action.payload.sha,
                error: '',
                loading: false
            };
        case 'GET_LAST_COMMIT_FAILURE':
            return {
                ...state,
                sha: '',
                error: action.payload.error,
                loading: false
            };
        default:
            return state;
    }
}