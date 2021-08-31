import axios from "axios";

export const getUsers = () => async (dispatch) => {
    try {
        const res = await axios.get(`http://jsonplaceholder.typicode.com/users`)
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
