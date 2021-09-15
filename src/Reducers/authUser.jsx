
const initialState = {
    reqState: {
        success: false,
        statusCode: 0,
        message: null,
        at: null
    },
    userState: {
        token: null,
        validated: false,
        expiresIn: null
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN/success":
            return {
                ...state,
                reqState: {
                    success: action.payload.data.success,
                    statusCode: action.payload.status, /* API return HTTP Code */
                    at: action.payload.data.loginTime,
                    message: action.payload.data.message /* Any extra message from Server ? */
                },
                userState: {
                    token: action.payload.data.token,
                    expiresIn: action.payload.data.expiresIn,
                    validated: action.payload.data.loginTime + action.payload.data.expiresIn > Date.now()
                },
            };
        case "LOGIN/fail":
            return {
                ...state,
                reqState: {
                    success: action.payload.data.success,
                    statusCode: action.payload.status,
                    at: action.payload.data.loginTime,
                    message: action.payload.data.message /* Any extra message from Server ? */
                }
            };
        case "LOGOUT/success":
            return {
                ...state,
                ...initialState
            };
        default: return state
    }

}