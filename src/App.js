import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// 9adab058

const API_URL = 'http://www.omdbapi.com?apikey=9adab058';

const movie1 = {
    Poster: "N/A",
    Title: "Amazing Spiderman Syndrome",
    Type: "movie",
    Year: "2012",
    imdbID: "tt2586634"
}


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Pokemon');
    }, []);

    return (
        <div className='app'>
            <h1>Cinematic Adventure</h1>
            <div className='search'>
                <input
                    placeholder='Search For your desired film'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ?(
                <div className='container'>
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
                ) : (
                    <div className='empty'>
                        <h2>No Movies by that name were found!</h2>
                    </div>
                )}
    </div>
    );
}

export default App;