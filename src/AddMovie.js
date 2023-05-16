import React from 'react';
import RateStar from './rate';
function AddMovie({listM}) {


    return (
    <div>
      <form onSubmit={listM}>
        <input type="text" name="titl" placeholder="title" />
        <input type="text" name="posterUR" placeholder="posterURL" />
        <input type="text-area" name="descriptio" placeholder="description" />
        <RateStar/>
        <button type="submit" >Add Movie</button>

      </form>
    </div>
  );
}

export default AddMovie;
