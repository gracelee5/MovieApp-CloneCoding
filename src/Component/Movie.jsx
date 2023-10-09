import React from 'react';
import '/Users/gracelee/Desktop/umc-workbook/umc-workbook1/src/index.js'
function Movie(props) {
  // Props에서 데이터 추출
  const { title, posterPath, voteAverage} = props;
  const movieStyle={
    color:'white'
  };

  return (
    <div className="movie" style={movieStyle}>
      <img src={`https://image.tmdb.org/t/p/w1280/${posterPath}`}height="200px" width="150px" alt={title} />
      <div className="content">
        <p>{title}   {voteAverage}</p>
      </div>
      
    </div>
  );
}

  
  export default Movie