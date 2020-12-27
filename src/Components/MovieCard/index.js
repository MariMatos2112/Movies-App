import React from "react";
import Card from "./styles";
import ImgNotFound from "../../Images/image-not-found.jpg";
import { Link } from "react-router-dom";

function MovieCard({ poster, title, id, rating, type }) {

  return (
    <Link to={`details/${type}/${id}`} style={{textDecoration: "none"}}>
      <Card>
        <img
          src={poster.includes("null") ? ImgNotFound : poster}
          alt="Movie Poster"
        />
        <div>
          <h5>{title} ({rating})</h5>
        </div>
      </Card>
    </Link>
  );
}

export default MovieCard;
