import React, { useContext } from "react";
import MovieCard from "../../Components/MovieCard";
import { MyListContext } from "../../Contexts/MyListContext";
import { ListContainer } from "../Lists/styles";
import { MyListPage, MyListTitle } from "./styles";

function MyList(props) {
  const {favs} = useContext(MyListContext);

  return (
    <MyListPage>
      <MyListTitle>
        <h1>My List</h1>
      </MyListTitle>

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
