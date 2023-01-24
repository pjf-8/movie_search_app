/*
 * Coded by Patrick Farrell
 * CS351 with Professor Mayhew
 * Movie Search Application using MERN stack
 *
 * Resources used:
 * - https://codingthesmartway.com/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1/
 * - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_hide_show
 * -https://sunypoly.open.suny.edu/webapps/assignment/uploadAssignment?content_id=_1350543_1&course_id=_26658_1&group_id=&mode=view
 *
 * */

import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Searchbox from "./components/SearchBox";
import ScreenHandler from "./components/ScreenHandler";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [myList, setMyList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovies = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=359568ec1416db32904a84b1e61675f8&language=en-US&query=${searchValue}&page=1&include_adult=false`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  const addToMyList = (movie) => {
    const newList = [...myList, movie];
    setMyList(newList);
  };

  const removeList = (movie) => {
    const newList = myList.filter((addedmovie) => addedmovie.id !== movie.id);
    setMyList(newList);
  };

  return (
    <div className={"container"}>
      <div className={"row d-flex align-items-center mt-4 mb-4"}>
        <h1 className={"col heading"}>pf8 | Movie Search</h1>
        <Searchbox saerchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <ScreenHandler />
      <p></p>

      <div id={"searchML"}>
        <div className={"row"}>
          <h1 className={"heading"}>Search Results:</h1>
          <p></p>
          <MovieList movies={movies} handleClick={addToMyList} />
        </div>
      </div>
      <div className={"myML"}>
        <div className={"row d-flex align-items-center mt-4 mb-4"}>
          <h1 className={"heading"}>My List:</h1>
        </div>
        <div className={"row"}>
          <MovieList movies={myList} handleClick={removeList} />
        </div>
      </div>
    </div>
  );
};

export default App;
