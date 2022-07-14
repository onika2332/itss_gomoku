const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                curUser: action.payload
            }
        case "LOGOUT":
            return {
                curUser: null
            }
        default:
            return state;
    }
}

export default AuthReducer;