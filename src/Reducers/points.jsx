/**
 * Points Reducer 
 * reducer is a function that receives the current state and an action object
 * decides how to update the state if necessary, and return the new value
 * They must make immutable updates (copy the current state and mutate on the copied one)
*/

const initialState = { value: 0 };
export default (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - action.payload
            }
        default:
            return state;
    }
};
