import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const MovieControls = ({ movie, type }) => {
    const { addMovieToWatched, watchlist, watched } = useContext(GlobalContext);

    function removeMovie(deleteId) {
        let newArr = watchlist.filter((movie) => movie.imdbID !== deleteId);
        localStorage.setItem("watchlist", JSON.stringify(newArr));
        window.location.reload(true);
    }

    function addWatchedMovie(deleteId) {
        localStorage.setItem("watched", JSON.stringify([movie, ...watched]));
        let newArr = watchlist.filter((movie) => movie.imdbID !== deleteId);
        localStorage.setItem("watchlist", JSON.stringify(newArr));
        window.location.reload(true);
    }

    return (
        <div className="inner-card-controls">
            {type === "watchlist" && (
                <>
                    <button className="ctrl-btn check-btn" onClick={() => addWatchedMovie(movie.imdbID)}>
                        <img src="./check-mark-256.svg" className="icon" />
                    </button>
                    <button className="ctrl-btn delete-btn" onClick={() => removeMovie(movie.imdbID)}>
                        X
                    </button>
                </>
            )}
        </div>
    );
};

export default MovieControls;
