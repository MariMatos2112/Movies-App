import Axios from "axios";
import React, { useEffect, useState } from "react";
import { SearchPage } from "./styles";
import Card from "../../Components/MovieCard/";
import { ListContainer } from "../Lists/styles";

function Search(props) {
  const [APIurl, setAPIurl] = useState("");
  const [userInput, setUserInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [type, setType] = useState("movie");

  const handleChangeInput = (e) => {
    setUserInput(e.target.value);
    setAPIurl(
      type === "movie"
        ? `https://api.themoviedb.org/3/search/movie?api_key=b1f64bad2ace8fdb2d2ccc0ba1d8e613&&query=${e.target.value}`
        : `https://api.themoviedb.org/3/search/tv?api_key=b1f64bad2ace8fdb2d2ccc0ba1d8e613&&query=${e.target.value}`
    );
  };

  const handleChangeSelect = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
    Axios.get(APIurl).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  };

  return (
    <SearchPage>
      <h1>Search for the movie or TV show you want</h1>

      <form onSubmit={handleSubmit}>
        <select onChange={handleChangeSelect}>
          <option value="movie">Movie</option>
          <option value="tv">TV show</option>
        </select>
        <input
          onChange={handleChangeInput}
          placeholder="Type here"
          value={userInput}
        />
        <button>Search</button>
      </form>

      <ListContainer>
        {movies.map((movie) => (
          <Card
            title={movie.title || movie.name}
            poster={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          />
        ))}
      </ListContainer>
    </SearchPage>
  );
}

export default Search;
