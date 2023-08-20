import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./assets/fonts.css";
import "./App.css";
import MovieComponent from "./assets/MovieComponent";
import MovieInfoComponent from "./assets/MovieInfoComponent";

import { GlobalProvider } from "./context/GlobalState";

export const API_KEY = "40b7146b";

function App() {
    const [searchQuery, updateSearchQuery] = useState();
    const [timeoutId, updateTimeoutId] = useState();
    const [movieList, updateMovieList] = useState([]);
    const [selectedMovie, onMovieSelect] = useState();

    const fetchData = async (searchString) => {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}`);
        updateMovieList(response.data.Search);
    };

    const onTextChange = (event) => {
        clearTimeout(timeoutId);
        updateSearchQuery(event.target.value);
        const timeout = setTimeout(() => fetchData(event.target.value), 500);
        updateTimeoutId(timeout);
    };

    //navigates the top corner buttons to different pages of the web app
    const navigate = useNavigate();

    const navigateToWatchList = () => {
        navigate("/myWatchList");
    };

    const navigateToWatched = () => {
        navigate("/myWatched");
    };

    const navigateToHome = () => {
        navigate("/");
    };

    return (
        <div className="Container">
            <div className="Header">
                <img src="./binge+.svg" className="AppIcon" />
                <div className="nav-btns">
                    <button className="myListNavBtn" onClick={navigateToWatchList}>
                        My WatchList
                    </button>
                    <button className="myListNavBtn" onClick={navigateToWatched}>
                        Watched
                    </button>
                    <button className="myListNavBtn" onClick={navigateToHome}>
                        + Add
                    </button>
                </div>
            </div>
            <div className="Searchbar">
                <img src="./search-icon.svg" className="Searchicon" />
                <input className="Searchinput" type="text" placeholder="Search..." onChange={onTextChange} />
            </div>
            {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect} />}
            <div className="MovieListContainer">
                {movieList?.length ? (
                    movieList.map((movie, index) => (
                        <MovieComponent key={index} movie={movie} onMovieSelect={onMovieSelect} />
                    ))
                ) : (
                    <h3 className="noOutputNotifier">No Movie Search</h3>
                )}
            </div>
        </div>
    );
}

export default App;
