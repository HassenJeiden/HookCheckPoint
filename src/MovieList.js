import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ mv }) => {
    return (
        
         mv.map((el)=> <MovieCard mov={el}/>)
    
    )
}

export default MovieList