import React, { useState, useEffect } from 'react';

import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './components/MovieCard';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=32516840';

// const API_URL = 'http://www.omdbapi.com?apikey=32516840';

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies('Batman');
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    setMovies(data.Search);
  };





  return(
    <div className='app'>
      <h1>Movieland</h1>

      <div className='search'>
        <input
          value={searchTerm}
          onChange={(e)=> setSearchTerm(e.target.value)}
          placeholder='Search for movies'
        
        />
        <img
          src={SearchIcon}
          alt='Search'
          onClick={()=> searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 
        ?(
          <div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie={movie}/>
            ))}
          </div>

        ):(
          <div className='empty'>
            <h2>No movies found</h2>
          </div>

        )}
    </div>
    
  );
};

export default App;
