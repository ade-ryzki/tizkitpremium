import { combineReducers } from "redux"
import Movie from "../reducers/movie"
import Auth from '../reducers/Auth'
import AuthSignUp from '../reducers/AuthSignUp';


const rootReducers= combineReducers({
    movie: Movie,
    auth: Auth,
    authSignup: AuthSignUp
})

export default rootReducers