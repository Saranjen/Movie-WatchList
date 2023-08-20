import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const WatchedControls = ({ movie }) => {
    const { watched } = useContext(GlobalContext);

    function removeMovie(deleteId) {
        let newArr = watched.filter((movie) => movie.imdbID !== deleteId);
        localStorage.setItem("watched", JSON.stringify(newArr));
        window.location.reload(true);
    }

    return (
        <div className="inner-card-controls">
            <button className="ctrl-btn delete-btn" onClick={() => removeMovie(movie.imdbID)}>
                X
            </button>
        </div>
    );
};

export default WatchedControls;
