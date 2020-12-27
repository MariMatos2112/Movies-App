import React, { useState } from "react";
import InitialPage from "./styles";
import { Link } from "react-router-dom";
import Movie1 from "../../Images/movie1.jpg";
import Movie2 from "../../Images/movie2.jpg";
import Movie3 from "../../Images/movie3.jpg";
import Movie4 from "../../Images/movie4.jpg";
import Movie5 from "../../Images/movie5.jpg";
import ArrowRight from '../../Images/Icons/arrow-right.svg';

function Main(props) {
  const [wallpaper, setWallpaper] = useState(Movie1);
  const [showLateral, setShowLateral] = useState(false);

  return (
    <InitialPage wallpaper={wallpaper} show={showLateral}>
      <div className="mainBox">
        <h1>Welcome to Movies++</h1>
        <p>
          Here you can find information about any movie or TV show. <br /> You
          can also search for entire lists and even save your favourite ones in
          your own personalized list ;)
        </p>
        <div>
          <Link to="/lists">
            <button>Pre-made lists</button>
          </Link>
          <Link to="/search">
            <button>Search a movie</button>
          </Link>
          <Link to="/my-list">
            <button>My list</button>
          </Link>
        </div>
      </div>

      <div
        className="wallpaperBox"
        onClick={() => setShowLateral(!showLateral)}
      >
        <div>
          <img
            onClick={() => setWallpaper(Movie1)}
            src={Movie1}
            alt="Deadpool wallpaper"
          />
          <img
            onClick={() => setWallpaper(Movie2)}
            src={Movie2}
            alt="Birds of Prey wallpaper"
          />
          <img
            onClick={() => setWallpaper(Movie3)}
            src={Movie3}
            alt="Birds of Prey wallpaper"
          />
          <img
            onClick={() => setWallpaper(Movie4)}
            src={Movie4}
            alt="Birds of Prey wallpaper"
          />
          <img
            onClick={() => setWallpaper(Movie5)}
            src={Movie5}
            alt="Birds of Prey wallpaper"
          />
        </div>
        <div>
          <img src={ArrowRight} alt="Arrow right icon" />
        </div>
      </div>
    </InitialPage>
  );
}

export default Main;
