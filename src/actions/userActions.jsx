import axios from "axios";

/* When I dispatch this getUser() action, it dispatch to thunk middleware */
export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        /* This dispatch is internal dispatch from thunk middleware to store */
        dispatch({
            type: "GET_USERS",
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: "FAIL",
            payload: console.log(error)
        })
    }
}
