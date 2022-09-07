

const initialState = {
    loading: false,
    data: {
        "user_id": null,
        "token": null
    },
    error:null,
    isSignIn: false
}

const Fetch = (state=initialState, action={})=> {
    switch (action.type) {
        case "SIGNIN_REQUEST":
            return {...state, loading: true}
                case "SIGNIN_ERROR":
            return {...state, loading: false, data: state.data, error: action.payload, isSignIn:false}
        case "SIGNIN_SUCCESS":
            return {...state, loading: false, data: action.payload, error: null, isSignIn: true}
        case "AUTH_LOGOUT":
            return {loading: false, data: {"user_id": null, "token,": null }, error: null, isSignIn: false}
        default:
            return state
    }
} 

export default Fetch

//SignUp


