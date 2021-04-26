import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, LOGIN } from "./actionTypes";

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: newMovie,
  };
};

export const deleteMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    payload: id,
  };
};

export const editMovie = (editedMovie) => {
  return {
    type: EDIT_MOVIE,
    payload: editedMovie,
  };
};

export const login = () => {
  return {
    type: LOGIN,
  };
};
