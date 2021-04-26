import { moviesData } from "../data";
import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, LOGIN } from "./actionTypes";

const init = {
  movies: moviesData,
  isAdmin: false,
};

const movieReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, payload],
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === payload.id ? { ...movie, ...payload } : movie
        ),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== payload),
      };
    case LOGIN:
      return {
        ...state,
        isAdmin: !state.isAdmin,
      };
    default:
      return state;
  }
};

export default movieReducer;
