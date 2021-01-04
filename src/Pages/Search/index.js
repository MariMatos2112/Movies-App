import Axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { SearchPage, SearchBox } from "./styles";
import Card from "../../Components/MovieCard/";
import { ListContainer } from "../Lists/styles";
import useLocalStorage from "../../Hooks/useLocalStorage";
import NoSearchBox from "../../Components/NoSearchBox";

function Search(props) {
  const [userInput, setUserInput] = useState("");
  const [movies, setMovies] = useLocalStorage("searched", []);
  const [wasSearched, setWasSearched] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    localStorage.getItem("searched") === null
      ? setWasSearched(false)
      : setWasSearched(true);
  });

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
    inputFocus();
  };

  const inputFocus = () => {
    inputRef.current.focus();
  } 

  return (
    <SearchPage>
      <SearchBox>
        <h1>Search for the movie or TV show you want</h1>

        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            onChange={handleChange}
            placeholder="Type here"
            value={userInput}
            autoFocus
          />
          <button>Search</button>
        </form>
      </SearchBox>

      {wasSearched ? null : <NoSearchBox onClick={inputFocus} title="You haven't searched for anything yet..." btnLabel="Search a movie or tv show now!" />}

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
