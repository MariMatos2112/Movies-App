import React from "react";
import Card from "./styles";
import ImgNotFound from "../../Images/image-not-found.jpg";
import { Link } from "react-router-dom";
import HeartIcon from '../../Images/Icons/heart.svg';

function MovieCard({ poster, title, id, rating }) {
  return (
    <Link to={`details/${id}`} style={{textDecoration: "none"}}>
      <Card>
        <img
          src={poster.includes("null") ? ImgNotFound : poster}
          alt="Movie Poster"
        />
        <div>
          <h5>{title} ({rating})</h5>
          <img src={HeartIcon} alt="Add to My List"/>
        </div>
      </Card>
    </Link>
  );
}

export default MovieCard;
