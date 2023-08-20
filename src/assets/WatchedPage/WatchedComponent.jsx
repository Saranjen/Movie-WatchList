import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./Watched.css";
import WatchedControls from "./WatchedControls";

function WatchedComponent() {
    const { watched } = useContext(GlobalContext);

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
            <h1 className="watchlist-text">Watched Movies</h1>

            {watched.length > 0 ? (
                <div className="movie-grid">
                    {watched.map((movie) => (
                        <div className="movie-card">
                            <div className="overlay"></div>
                            <img src={movie.Poster} />
                            <WatchedControls movie={movie} />
                        </div>
                    ))}
                </div>
            ) : (
                <h3 className="noOutputNotifier">No Movies in Watched!</h3>
            )}
        </div>
    );
}

export default WatchedComponent;
