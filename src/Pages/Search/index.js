import Axios from "axios";
import React, { useState } from "react";
import { SearchPage, SearchBox } from "./styles";
import Card from "../../Components/MovieCard/";
import { ListContainer } from "../Lists/styles";

function Search(props) {
  const [userInput, setUserInput] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    const searchResults = [];
    e.preventDefault();
    setUserInput("");
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=b1f64bad2ace8fdb2d2ccc0ba1d8e613&&query=${userInput}`
    ).then((response) => {
      response.data.results.forEach((search) => searchResults.push(search));
      Axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=b1f64bad2ace8fdb2d2ccc0ba1d8e613&&query=${userInput}`
      ).then((response) => {
        response.data.results.forEach((search) => searchResults.push(search));
        setMovies(searchResults);
      });
    });
  };

  return (
    <SearchPage>
      <SearchBox>
        <h1>Search for the movie or TV show you want</h1>

        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            placeholder="Type here"
            value={userInput}
          />
          <button>Search</button>
        </form>
      </SearchBox>

      <ListContainer>
        {movies.map((movie) => (
          <Card
            title={movie.title || movie.name}
            poster={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            id={movie.id}
            rating={movie.vote_average}
            type={movie.adult || movie.adult === false ? "movie" : "tv"}
          />
        ))}
      </ListContainer>
    </SearchPage>
  );
}

export default Search;
