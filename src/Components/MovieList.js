import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Search from "./Search";
import AddMovie from "./AddMovie";

const MovieList = () => {
  const movieList = useSelector((state) => state.movies);
  const { isAdmin } = useSelector((state) => state);
  return (
    <div>
      <Search />
      <div className="movie-list">
        {movieList.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
      {isAdmin ? <AddMovie /> : null}
    </div>
  );
};

export default MovieList;
