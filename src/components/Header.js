import React from "react";
import "./styles/Header.css";
import Logo from "./images/airbnb-logo-img.jpg";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, Button, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={Logo} alt="airbnb logo" />
      </Link>

      <div className="header__center">
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </div>

      <div className="header__right">
        <Button variant="outlined">
          <p>Become a host</p>
        </Button>
        <IconButton>
          <LanguageIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
