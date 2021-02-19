let defaultState = {
    userLogin: {
        isLogin: false,
        username: "",
        email: "",
        flagPage:"LOGIN_REGIS"
    }
}

const authReducer = (state = defaultState, action) => {
    console.warn("state:", state);
    console.warn("action:", action);
    console.log("action ini",action.payload);

    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                userLogin: {
                    isLogin: true,
                    username: action.payload.user.username,
                    email: action.payload.user.email,
                    flagPage: action.payload.page
                },
            }
        case "MOVE_PAGE":
            console.log("AUTH MOVE PAGE", action.payload.page)
            return {
                userLogin: {
                    ...state.userLogin,
                    flagPage: action.payload.page
                }
            }
        case "LOGOUT":
            return defaultState

        default:
            return state
    }
}

export default authReducer