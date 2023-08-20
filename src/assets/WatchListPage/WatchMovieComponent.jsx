import React from "react";

function WatchMovieComponent(props) {
    const { Title, Year, imdbID, Type, Poster } = props.movie;

    <div className="movie-card">
        <div className="overlay"></div>
        <img src={Poster} />

        <div className="inner-card-controls">
            <>
                <button className="ctrl-btn" onClick={() => removeMovieFromWatchlist(movie.imdbID)}>
                    <img src="./check-mark-256.svg" className="icon" />
                </button>
            </>
        </div>
    </div>;
}

export default WatchMovieComponent;
