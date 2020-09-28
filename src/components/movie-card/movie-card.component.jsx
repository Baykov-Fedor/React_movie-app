import React from "react";

import "./movie-card.styles.scss";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MovieCard = ({
  title,
  overview,
  poster_path,
  release_date,
  vote_average,
  ...otherData
}) => {
  const getClassByRating = (average) => {
    if (average >= 7) return "green";
    else if (average > 4) return "yellow";
    else return "red";
  };
  return (
    <div className="movie-card">
      <div className="movie-card--body">
        <img
          src={IMGPATH + poster_path}
          alt={title}
          className="movie-card--body--poster"
        />
        <div className="movie-card--body--overview">{overview}</div>
      </div>
      <div className="movie-card--footer">
        <span movie-card--footer--title>{title}</span>
        <span
          className={`movie-card--footer--vote movie-card--footer--vote__${getClassByRating(
            vote_average
          )}`}
        >
          {vote_average}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
