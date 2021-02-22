let defaultState = {
    isLogin:false,
    dataUser:{
        username:"",
        email:""
    }
}

const detailReducer = (state = defaultState, action) => {
    console.warn("state:", state);
    console.warn("action:", action);
    console.log("action ini",action.payload);

    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                isLogin: true,
                dataUser:{
                    username: action.payload.user.username,
                    email:action.payload.user.email
                }
            }
        
        case "LOGOUT_SUCCESS":
            return defaultState

        default:
            return state
    }
}

export default detailReducer