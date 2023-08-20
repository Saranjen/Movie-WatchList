import { useEffect, useState } from 'react';
import axios from "axios";
import { API_KEY } from '../App';
import './MovieInfoContainer.css';


const MovieInfoComponent = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const { selectedMovie } = props;
    
    useEffect (() => {
        axios.get(
            `https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedMovie}`,
        ).then ((response) => setMovieInfo(response.data));
    }, [selectedMovie]);
    return (
        <div className='InfoContainer'> 
        {movieInfo ? (
            <>
            <img src={movieInfo?.Poster}  alt={movieInfo?.Title} className="CoverImage" /> 
            <div className='InfoColumn'>
                <span className='InfoMovieName'>
                    {movieInfo?.Type}: <span>{movieInfo?.Title}</span> 
                </span>
                <span className='InfoMovieInfo'>
                    IMDB Rating: <span>{movieInfo?.imdbRating}</span> 
                </span>
                <span className='InfoMovieInfo'>
                    Year: <span>{movieInfo?.Year}</span> 
                </span>
                <span className='InfoMovieInfo'>
                    Language: <span>{movieInfo?.Language}</span> 
                </span>
                <span className='InfoMovieInfo'>
                    Rated: <span>{movieInfo?.Rated}</span> 
                </span>
                <span className='InfoMovieInfo'>
                    Released: <span>{movieInfo?.Released}</span> 
                </span>
                <span className='InfoMovieInfo'>
                    Runtime: <span>{movieInfo?.Runtime}</span> 
                </span>
                <span className='InfoMovieInfo'>
                    Genre: <span>{movieInfo?.Genre}</span> 
                </span>
                <span className='InfoMovieInfo'>
                    Director: <span>{movieInfo?.Director}</span> 
                </span>
                <span className='InfoMovieInfo'>
                    Actors: <span>{movieInfo?.Actors}</span> 
                </span>
                <span className='InfoMovieInfo'>
                    Plot: <span>{movieInfo?.Plot}</span> 
                </span>
            </div>
            <img src="./close-window-256.svg"  className="InfoClose" onClick={() => props.onMovieSelect()}/>
         </>
         ) : (
           "Loading..."
         )}
        </div>
    ); 
};
export default MovieInfoComponent;