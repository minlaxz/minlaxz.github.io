
export default (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state = state + action.payload;
        case 'DECREMENT':
            return state = state - action.payload;
        default:
            return state;
    }
};
