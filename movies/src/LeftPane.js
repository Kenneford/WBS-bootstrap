import React, { useState, useEffect } from "react";
import './LeftPane.css';

function LeftPane() {
    const [movies, setMovies] = useState([])
const [searchWord, setSearchWord] = useState('destiny')

    const readMovies = async () =>{
        const response = await fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=24c64ea903d3b9426c0b72f5af3d2813&language=en-US&query=${searchWord}&page=1&include_adult=false
        `)
        const result = await response.json()
        console.log(result)
        setMovies(() => result.results)
    }
    
    const movieList = movies.map((movie, index) =>{
        return(
            <li key={index}>
                <h3>
                    {movie.title}
                </h3>
                <div>
                    {movie.overview}
                </div>
            </li>
        )
    })
  return (
    <div>
      <h1>Movies</h1>
      <input type="text" value={searchWord} onChange={({target}) => setSearchWord(target.value)} />
      {/* <input type="text" value={searchWord} onChange={(event) => setSearchWord(event.target.value)} /> */}
      <button onClick={readMovies}>Search</button>
      <div>
        <ul>
            {movieList}
        </ul>
      </div>
    </div>
  );
}

export default LeftPane;
