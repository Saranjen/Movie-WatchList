import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./MovieContainer.css";

const MovieComponent = (props) => {
    const movieData = props.movie;
    const { Title, Year, imdbID, Type, Poster } = movieData;
    const { addMovieToWatchlist, watchlist, watched } = useContext(GlobalContext);

    let storedMovie = watchlist.find((o) => o.imdbID === imdbID);
    const watchlistDisabled = storedMovie ? true : false;

    let storedinWatched = watched.find((o) => o.imdbID === imdbID);
    const inWatched = storedinWatched ? true : false;

    return (
        <div className="ListContainer">
            <img
                src={Poster}
                className="ListCoverImage"
                onClick={() => {
                    props.onMovieSelect(imdbID);
                    window.scrollTo({ top: 0, behaviour: "smooth" });
                }}
            />
            <span className="ListMovieName">{Title}</span>
            <div className="ListInfoColumn">
                <span>Year: {Year}</span>
                <button
                    className="btn"
                    disabled={watchlistDisabled || inWatched}
                    onClick={() => addMovieToWatchlist(movieData)}
                >
                    <img src="./Daco_4535933.svg" className="ListAdd" />
                </button>
                <button
                    className="Infobtn"
                    onClick={() => {
                        props.onMovieSelect(imdbID);
                        window.scrollTo({ top: 0, behaviour: "smooth" });
                    }}
                >
                    <img src="./info.svg" className="ListAdd" />
                </button>
                <span>Type: {Type}</span>
            </div>
        </div>
    );
};
export default MovieComponent;
