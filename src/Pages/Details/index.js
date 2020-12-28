import Axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { MyListContext } from "../../Contexts/MyListContext";
import Container from "./styles";

function Details({ match }) {
  const [movieData, setMovieData] = useState({});
  const { favs, setFavs } = useContext(MyListContext);

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/${match.params.type}/${match.params.id}?api_key=b1f64bad2ace8fdb2d2ccc0ba1d8e613&language=en-US`
    ).then((response) => setMovieData(response.data));
  }, []);

  const addItem = () => {
    setFavs([movieData, ...favs]);
    alert(`"${movieData.title}" was successfully added to My List`);
  }

  return (
    <Container>
      <div>
        <img
          src={`http://image.tmdb.org/t/p/w1280${movieData.poster_path}`}
          alt="Movie Poster"
        />
        <div>
          <h1>{movieData.title || movieData.name}</h1>
          <p>
            <span>Released date:</span>{" "}
            {movieData.release_date || movieData.first_air_date}
          </p>
          <p>
            <span>Original language:</span> {movieData.original_language}
          </p>
          <p>
            <span>Homepage:</span>{" "}
            {movieData.homepage ? (
              <a href={movieData.homepage} target="_blank" rel="noreferrer">
                {movieData.homepage}
              </a>
            ) : (
              "Unavailable"
            )}
          </p>
          <p>
            <span>Tagline:</span>{" "}
            {movieData.tagline ? `"${movieData.tagline}"` : "Unavailable"}
          </p>
          <p>
            <span>Overview:</span> {movieData.overview}
          </p>
          {match.params.type === "tv" ? (
            <>
              <p>
                <span>Number of seasons: </span>
                {movieData.number_of_seasons}
              </p>
              <p>
                <span>Number of episodes: </span>
                {movieData.number_of_episodes}
              </p>
            </>
          ) : null}
          <p>
            <span>Average vote:</span> {movieData.vote_average}{" "}
          </p>
          <p>
            <span>Counted votes:</span> {movieData.vote_count}{" "}
          </p>
          <div>
            <button
              // onClick={() => {
              //   setFavs([movieData, ...favs]);
              //   alert(`"${movieData.title}" was addedd successfully to My List`);
              // }}
              onClick={addItem}
            >
              <span>Add to my list</span>
            </button>
            <Link to="/my-list">
              <span>Go to my list</span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Details;
