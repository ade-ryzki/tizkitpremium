const initialState = {
    loading: false,
    data: {
        "id": null,
        "name": null,
        "email": null,
        "password": null
    },
    error:null,
    isSignUp: false
}

const Fetch = (state=initialState, action={})=> {
    switch (action.type) {
        case "SIGNUP_REQUEST":
            return {...state, loading: true}
                case "SIGNUP_ERROR":
            return {...state, loading: false, data: state.data, error: action.payload, isSignUp:false}
        case "SIGNUP_SUCCESS":
            return {...state, loading: false, data: action.payload, error: null, isSignUp: true}
        default:
            return state
    }
} 

export default Fetch
