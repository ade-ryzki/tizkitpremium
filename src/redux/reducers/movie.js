
// const initialState = {
//     Loading: false,
//     data: [],
// }

const initialState = {
    loading: false,
    data: {
        results: [],
        totalAllData: 0,
        totalPage: 0,
        totalRows: 0,
    },
}

const Fetch = (state=initialState, action={})=> {
    switch (action.type) {
        case "GET_MOVIE_REQUEST":
            return {...state, loading: true}
        case "GET_MOVIE_ERROR":
            return {...state, loading: false, error: action.payload}
        case "GET_MOVIE_SUCCESS":
            return {...state, loading: false, data: action.payload}
        default:
            return state
    }
} 

export default Fetch