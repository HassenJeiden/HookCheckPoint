import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';

const RateStar = ({nextValue}) => {
  const[rating,setrating]=useState(1);
  const onStarClick=(nextValue, prevValue, name)=> {
    setrating(nextValue);
  }
    return (
<div>
<StarRatingComponent 
          name="rate1" 
          starCount={10}
          value={rating}
          onStarClick={onStarClick}
        />
</div>
  )
}

export default RateStar