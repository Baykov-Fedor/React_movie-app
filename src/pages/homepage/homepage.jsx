import React, { useState } from "react";
import CustomButton from "../../components/button/button.component";
import MovieCard from "../../components/movie-card/movie-card.component";

import "./homepage.scss";

const API_releaseDate =
  "https://api.themoviedb.org/3/discover/movie?sort_by=primary_release_date.desc&vote_count.gte=4&api_key=04c35731a5ee918f014970082a0088b1&page=";

const HomePage = (props) => {
  let pageNum = props.pageNum;
  return (
    <div className="main-page">
      <div className="main-page--movies">
        {props.data.map(({ id, ...movieData }) => (
          <MovieCard key={id} {...movieData} />
        ))}
      </div>
      <div className="main-page--controls">
        {props.pageNum === 1 ? (
          <CustomButton disabled={true}>Previous</CustomButton>
        ) : (
          <CustomButton
            disabled={false}
            onClick={() => props.changePageNum(props.apiMethod, --pageNum)}
          >
            Previous
          </CustomButton>
        )}
        <CustomButton
          onClick={() => props.changePageNum(props.apiMethod, ++pageNum)}
        >
          Next
        </CustomButton>
      </div>
    </div>
  );
};

export default HomePage;
