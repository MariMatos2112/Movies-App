import Axios from "axios";
import React, { useState } from "react";
import { Container } from "./styles";

function Details({ match }) {
  const [movieData, setMovieData] = useState({});

  Axios.get(
    `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=b1f64bad2ace8fdb2d2ccc0ba1d8e613&language=en-US`
  ).then((response) => setMovieData(response.data));

  return (
    <Container>
      <img
        src={`http://image.tmdb.org/t/p/w1280${movieData.poster_path}`}
        alt="Movie Poster"
      />
      <div>
        <h1>{movieData.title}</h1>
        <p>Released date: {movieData.release_date}</p>
        <p>Original language: {movieData.original_language}</p>
        <p>Adult movie: {movieData.adult}</p>
        <p>Tagline: {movieData.tagline}</p>
        <p>Overview: {movieData.overview}</p>
        <p>Average vote: {movieData.vote_average} </p>
        <p>Counted votes: {movieData.vote_count} </p>
      </div>
    </Container>
  );
}

export default Details;
