import React from 'react';
import { movies } from "./movieDummy";
import Movie from './Component/Movie'; 

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            
            return (
              <Movie 
              key={item.id}
              title={item.title}
              posterPath={item.poster_path}
              voteAverage={item.vote_average}
              overview={item.overview}
              />
              
            )
          })
        }
      </div>
    </div>
    
  );
}

export default App;
