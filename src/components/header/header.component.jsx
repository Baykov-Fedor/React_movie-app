import React from "react";
import { Router, Link } from "react-router-dom";
import SearchBar from "../search-bar/search-bar.components";

import "./header.styles.scss";

const Header = (props) => {
  return (
    <header className="header">
      <h1 className="header--title">MOVIES</h1>
      <SearchBar search={props.search} />
      <nav className="header--nav-bar">
        <ul className="header--nav-bar--menu">
          <Link to="/" className="links">
            <li className="header--nav-bar--menu--item" onClick={props.reset}>
              Home
            </li>
          </Link>
          <Link to="/about" className="links">
            <li className="header--nav-bar--menu--item">About</li>
          </Link>
          <Link to="/popular" className="links">
            <li className="header--nav-bar--menu--item">Most Popular</li>
          </Link>
          <Link to="/contacts" className="links">
            <li className="header--nav-bar--menu--item">Conacts</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
