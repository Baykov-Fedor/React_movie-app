import React from "react";
import { Router, Link } from "react-router-dom";
import CustomButton from "../button/button.component";
import SearchBar from "../search-bar/search-bar.components";

import "./header.styles.scss";

const Header = ({ search, reset, toPopular }) => {
  return (
    <header className="header">
      <h1 className="header--title">MOVIES</h1>
      <SearchBar search={search} />
      <nav className="header--nav-bar">
        <ul className="header--nav-bar--menu">
          <Link to="/" className="links">
            <li className="header--nav-bar--menu--item" onClick={reset}>
              <CustomButton>Home</CustomButton>
            </li>
          </Link>
          <Link to="/popular" className="links">
            <li className="header--nav-bar--menu--item" onClick={toPopular}>
              <CustomButton>Most Popular</CustomButton>
            </li>
          </Link>
          <Link to="/about" className="links">
            <li className="header--nav-bar--menu--item">
              <CustomButton>About</CustomButton>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
