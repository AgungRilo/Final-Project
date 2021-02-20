let defaultState = {
    id:0,
    users: [{
        username:"admin",
        password:"12345",
        email:"agungrilo1@gmail.com"
    }]
}
// combineReducer
const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "CLEAR_DATA":
            return defaultState

        default:
            return state
    }

}

export default userReducer