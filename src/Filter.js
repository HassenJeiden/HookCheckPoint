import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({tf,sf,starF}) => {

  
  const onStarClick=(nextValue, prevValue, name)=> {
    sf(nextValue);
  }
  return (
    <div>
      <form > 
        <input type='text' placeholder='Search your movie'  name='movietitle' onChange={tf}></input>
        <StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={starF}
          onStarClick={onStarClick}
        />
      </form>
    </div>
  )
}

export default Filter