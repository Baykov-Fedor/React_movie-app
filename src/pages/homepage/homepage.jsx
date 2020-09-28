import React from "react";
import MovieCard from "../../components/movie-card/movie-card.component";

import "./homepage.scss";

const HomePage = (props) => {
  return (
    <div className="main-page">
      {props.data.map(({ id, ...movieData }) => (
        <MovieCard key={id} {...movieData} />
      ))}
    </div>
  );
};

export default HomePage;
