import React from 'react'
import './card.css'
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({mov}) => {

    return (
    <figure class="movie">
    <div class="movie__hero">
      <img src={mov.posterURL} alt="Movie Poster" class="movie__img"/>
    </div>
    <div class="movie__content">
      <div class="movie__title">
        <h1 class="heading__primary">{mov.title}<i class="fas fa-fire"></i></h1>
        <StarRatingComponent 
          starCount={10}
          value={mov.rating}
        />
      </div>
      <p class="movie__description">{mov.description}</p>
    </div>
    <div class="movie__price">{mov.rating}</div>
  </figure>
  )
}

export default MovieCard