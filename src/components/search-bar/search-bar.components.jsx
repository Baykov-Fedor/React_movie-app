import React, { useState } from "react";

import "./search-bar.styles.scss";

const SearchBar = (props) => {
  const [userInput, setUserInput] = useState(props.SearchBar);
  const findMovie = (e) => {
    e.preventDefault();
    props.search(userInput);
    setUserInput("");
  };
  const onChange = (e) => {
    setUserInput(e.target.value);
  };
  return (
    <div className="search-bar">
      <form id="form" onSubmit={findMovie}>
        <input
          type="text"
          id="search"
          placeholder="Movie search..."
          onChange={onChange}
          className="search-bar--input"
          value={userInput}
        />
      </form>
    </div>
  );
};

export default SearchBar;
