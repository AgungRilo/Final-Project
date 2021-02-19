let defaultState = {
    id:0,
    users: []
}
// combineReducer
const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "REGISTER":
            let newData={
                id:state.id++,
                username:action.payload.username,
                password:action.payload.password,
                email:action.payload.email

            }
            let user=state.users.concat(newData);
            console.log(user);
            
            return ({
                users:user
            })

        case "CLEAR_DATA":
            return defaultState

        default:
            return state
    }

}

export default userReducer