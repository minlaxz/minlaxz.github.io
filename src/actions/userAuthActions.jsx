import axios from "axios";

const saveInStorage = (data) => {
    localStorage.removeItem("ggwp_user");
    localStorage.setItem("ggwp_user", JSON.stringify(data));
}

const removeFromStorage = () => {
    localStorage.removeItem("ggwp_user");
}

const readFromStorage = () => {
    const data = localStorage.getItem("ggwp_user");
    return JSON.parse(data);
}

export const login = (email, password) => async (dispatch) => {
    try {
        const res = await axios.post(`http://127.0.0.1:3001/user/login`, { email, password })
        if (res.status === 200 && res.data.token) {
            res.data.loginTime = Date.now();

            saveInStorage({
                token: res.data.token,
                expireDate: res.data.loginTime + res.data.expiresIn,
                expireIn: res.data.expireIn
            })
            /* This dispatch is internal dispatch from thunk middleware to store */
            dispatch({
                type: "LOGIN/success",
                payload: res
            })
        }
    } catch (error) {
        error.response.data.loginTime = Date.now();
        dispatch({
            type: "LOGIN/fail",
            payload: error.response
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        removeFromStorage();
        dispatch({
            type: "LOGOUT/success",
            payload: null
        })
    } catch (error) {
        dispatch({
            type: "LOGOUT/fail",
            payload: error
        })
    }
}
