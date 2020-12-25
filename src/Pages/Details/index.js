import Axios from "axios";
import React, { useState } from "react";
import Container from "./styles";
import StarIcon from "../../Images/Icons/star.svg";
import CheckboxIcon from "../../Images/Icons/checkbox.svg";

function Details({ match }) {
  const [movieData, setMovieData] = useState({});

  Axios.get(
    `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=b1f64bad2ace8fdb2d2ccc0ba1d8e613&language=en-US`
  ).then((response) => setMovieData(response.data));

  return (
    <Container>
      <div>
        <img
          src={`http://image.tmdb.org/t/p/w1280${movieData.poster_path}`}
          alt="Movie Poster"
        />
        <div>
          <h1>{movieData.title}</h1>
          <p>
            <span>Released date:</span> {movieData.release_date}
          </p>
          <p>
            <span>Original language:</span> {movieData.original_language}
          </p>
          <p>
            <span>Adult movie:</span> {movieData.adult ? "Yes" : "No"}
          </p>
          <p>
            <span>Tagline:</span> {movieData.tagline}
          </p>
          <p>
            <span>Overview:</span> {movieData.overview}
          </p>
          <p>
            <span>Average vote:</span> {movieData.vote_average}{" "}
          </p>
          <p>
            <span>Counted votes:</span> {movieData.vote_count}{" "}
          </p>
          <div>
            <button><span>Vote</span> <img src={StarIcon} alt="Rating Icon"/> </button>
            <button><span>Add to my list</span><img src={CheckboxIcon} alt="Add to my list icon"/> </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Details;
