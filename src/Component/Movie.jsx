import React, { useState } from 'react';


function Movie({ title, posterPath, voteAverage, overview }) {
  const [isHovered, setIsHovered] = useState(false);

  const movieStyle = {
    color: 'white',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="movie"
      style={movieStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={`https://image.tmdb.org/t/p/w1280/${posterPath}`}
        alt={title}
        style={{ maxWidth: '100%', height: 'auto', flex: '1' }}
      />
      <div className="content">
        <p>{title} {voteAverage}</p>
        {isHovered && (
          <div className="overlay">
            <p>{title}</p>
            <p>{overview}</p> 
          </div>
        )}
      </div>
    </div>
  );
}

export default Movie;
