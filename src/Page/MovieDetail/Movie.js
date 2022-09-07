import axios from "axios"
import React, {useState, useEffect} from "react"

function Movie(props) {

   
}

function Header(props) {
    
    const movie = props.movie
    return(
        <header>
            <h1>Disini taro detail movie dari database {movie}</h1>
        </header>
    )
}


function Loading() {
    return <h1 className="font-d-s">loading...</h1>
}
export default Movie

