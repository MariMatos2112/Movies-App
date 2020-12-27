import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../Images/Icons/home.svg";
import Btn from "./styles";

function HomeBtn() {
  return (
    <Btn>
      <Link to="/">
        <img src={HomeIcon} alt="Homepage icon" />
      </Link>
    </Btn>
  );
}

export default HomeBtn;
