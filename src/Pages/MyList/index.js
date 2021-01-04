import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard";
import NoSearchBox from "../../Components/NoSearchBox";
import { MyListContext } from "../../Contexts/MyListContext";
import { ListContainer } from "../Lists/styles";
import { MyListPage, MyListTitle } from "./styles";
import HomeBtn from "../../Images/Icons/home.svg";
import { Link } from "react-router-dom";

function MyList(props) {
  const { favs } = useContext(MyListContext);
  const [favsChosen, setFavsChosen] = useState(false);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favs));
  }, []);

  useEffect(() => {
    localStorage.getItem("favourites") === "[]"
      ? setFavsChosen(false)
      : setFavsChosen(true);
  });

  return (
    <MyListPage>
      <MyListTitle>
        <Link to="/">
          <img src={HomeBtn} alt="Homepage icon" />
        </Link>
        <h1>My List</h1>
      </MyListTitle>

      {favsChosen ? null : (
        <NoSearchBox
          title="You haven't saved anything in 'My List'"
          linkLabel="Search a movie or tv show now!"
          linkTarget="/search"
        />
      )}

      <ListContainer>
        {favs.map((movie) => (
          <MovieCard
            title={movie.title || movie.name}
            poster={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            id={movie.id}
            rating={movie.vote_average}
            type={movie.adult || movie.adult === false ? "movie" : "tv"}
          />
        ))}
      </ListContainer>
    </MyListPage>
  );
}

export default MyList;
