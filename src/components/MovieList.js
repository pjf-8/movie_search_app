import React, { useState } from "react";

const MovieList = (props) => {
  const [clicked, setClicked] = useState({});

  function handleClick(movie) {
    setClicked({...clicked, [movie.id]: true});
    setTimeout(() => setClicked({...clicked, [movie.id]: false}), 1000);
    props.handleClick(movie);
  }

  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="mcontainerm"
          onClick={() => handleClick(movie)}
          style={{ backgroundColor: clicked[movie.id] ? "green" : "#6998ab" }}
        >
          <div className="m-3 mimg">
            <img
              src={
                "https://www.themoviedb.org/t/p/original" + movie.poster_path
              }
              alt={"movies"}
              width={"300px"}
            />
          </div>
          <div className="minfo">
            <h1>{movie.title}</h1>
            <hr />
            <p>{movie.overview}</p>
            <p>Released: {movie.release_date}</p>
            {clicked[movie.id] ? "Added to your list" : ""}
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
