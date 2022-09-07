import {useParams} from "react-router-dom"
import Footer from "../../Component/Footer"
import Navbar from "../../Component/Navbar"
import Movie from "./Movie"
import Schedule from "./schedule"
import "./movieDetail.css"

// id dari movie id dari database
function MovieDetail() {
    let params = useParams()
    return(
        <>
        <Navbar />
        <Movie id={params.movieId}/>
        <Schedule id={params.movieId}/>
         <h1>Ini {params.movieId}</h1>
        <Footer />
        </>)
       
}

export default MovieDetail