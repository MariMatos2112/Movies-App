import React, { useState, useEffect } from "react";
import { ListContainer, ListsBox, ListsPage } from "./styles";
import Axios from "axios";
import Card from "../../Components/MovieCard/";
import HomeBtn from "../../Components/HomeBtn";

function Lists(props) {
  const [programType, setProgramType] = useState("movie");
  const [listChosen, setListChosen] = useState("now_playing");
  const [APIurl, setAPIurl] = useState(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=b1f64bad2ace8fdb2d2ccc0ba1d8e613&language=en-US"
  );
  const [moviesList, setMoviesList] = useState([]);

  const handleClick = (type, list) => {
    setProgramType(type);
    setListChosen(list);
    setAPIurl(
      `https://api.themoviedb.org/3/${type}/${list}?api_key=b1f64bad2ace8fdb2d2ccc0ba1d8e613&language=en-US`
    );
  };

  useEffect(() => {
    APIurl !==
    "https://api.themoviedb.org/3/movie/now_playing?api_key=b1f64bad2ace8fdb2d2ccc0ba1d8e613&language=en-US"
      ? Axios.get(APIurl).then((response) =>
          setMoviesList(response.data.results)
        )
      : Axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=b1f64bad2ace8fdb2d2ccc0ba1d8e613&language=en-US"
        ).then((response) => setMoviesList(response.data.results));
  });

  // const listBtn = useRef([]);
  // console.log(listBtn.current);

  const btnData = [
    {
      typeState: "movie",
      listState: "now_playing",
      label: "Now playing",
    },
    {
      typeState: "movie",
      listState: "popular",
      label: "Popular",
    },
    {
      typeState: "movie",
      listState: "top_rated",
      label: "Top Rated",
    },
    {
      typeState: "movie",
      listState: "upcoming",
      label: "Upcoming",
    },
    {
      typeState: "tv",
      listState: "airing_today",
      label: "Airing Today",
    },
    {
      typeState: "tv",
      listState: "on_the_air",
      label: "On the air",
    },
    {
      typeState: "tv",
      listState: "popular",
      label: "Popular",
    },
    {
      typeState: "tv",
      listState: "top_rated",
      label: "Top rated",
    },
  ];

  return (
    <ListsPage>
      <ListsBox>
        <HomeBtn />
        <h1>Choose the list of your preference</h1>
        <div>
          <div>
            <h2>Movies</h2>
            <div>
              {btnData.map((el) =>
                el.typeState === "movie" ? (
                  <button
                    onClick={() => handleClick(el.typeState, el.listState)}
                    style={
                      el.typeState === programType &&
                      el.listState === listChosen
                        ? { backgroundColor: "#fcf951ff" }
                        : null
                    }
                  >
                    {el.label}
                  </button>
                ) : null
              )}
            </div>
          </div>
          <div>
            <h2>TV Shows</h2>
            <div>
              {btnData.map((el) =>
                el.typeState === "tv" ? (
                  <button
                    onClick={() => handleClick(el.typeState, el.listState)}
                    style={
                      el.typeState === programType &&
                      el.listState === listChosen
                        ? { backgroundColor: "#fcf951ff" }
                        : null
                    }
                  >
                    {el.label}
                  </button>
                ) : null
              )}
            </div>
          </div>
        </div>
      </ListsBox>

      <ListContainer>
        {moviesList.map((movie) => (
          <Card
            title={movie.title || movie.name}
            poster={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            id={movie.id}
            rating={movie.vote_average}
            type={movie.adult || movie.adult === false ? "movie" : "tv"}
          />
        ))}
      </ListContainer>
    </ListsPage>
  );
}
//movie.title
//movie.backdrop_path
//movie.vote_average
export default Lists;
