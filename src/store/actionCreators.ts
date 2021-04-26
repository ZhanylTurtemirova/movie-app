import * as actionTypes from "./actionTypes";
import { getMovies, addMovie, editMovie, deleteMovie } from "./services";

export const deleteMovieError = (err: string): MoviesAction => ({
  type: actionTypes.DELETE_MOVIE_ERROR,
  payload: err,
});
export const deleteMovieLoading = (): MoviesAction => ({
  type: actionTypes.DELETE_MOVIE_LOADING,
});
export const deleteMovieSuccess = (): MoviesAction => ({
  type: actionTypes.DELETE_MOVIE_SUCCESS,
});
export const addMovieError = (err: string): MoviesAction => ({
  type: actionTypes.ADD_MOVIE_ERROR,
  payload: err,
});
export const addMovieLoading = (): MoviesAction => ({
  type: actionTypes.ADD_MOVIE_LOADING,
});
export const addMovieSuccess = (): MoviesAction => ({
  type: actionTypes.ADD_MOVIE_SUCCESS,
});
export const editMovieError = (err: string): MoviesAction => ({
  type: actionTypes.EDIT_MOVIE_ERROR,
  payload: err,
});
export const editMovieLoading = (): MoviesAction => ({
  type: actionTypes.EDIT_MOVIE_LOADING,
});
export const editMovieSuccess = (): MoviesAction => ({
  type: actionTypes.EDIT_MOVIE_SUCCESS,
});

export const addMovieRequest = (movieVal: any) => (
  dispatch: any
): Promise<void> => {
  const movie = {
    vote_average: 0,
    vote_count: 9,
    budget: 0,
    revenue: 0,
    ...movieVal,
  };
  addMovieLoading();
  return addMovie(movie)
    .then(() => {
      alert("Successfully added!");
      addMovieSuccess();
      dispatch(getMoviesRequest());
    })
    .catch((error) => {
      alert(error.message.toString());
      addMovieError(error.toString());
    });
};
export const editMovieRequest = (movieVal: any) => (
  dispatch: any
): Promise<void> => {
  const movie = {
    vote_average: 0,
    vote_count: 9,
    budget: 0,
    revenue: 0,
    ...movieVal,
  };
  editMovieLoading();
  return editMovie(movie)
    .then(() => {
      alert("Successfully edited!");
      editMovieSuccess();
      dispatch(getMoviesRequest());
    })
    .catch((error) => {
      alert(error.message.toString());
      editMovieError(error.toString());
    });
};
export const deleteMovieRequest = (movieVal: any) => (
  dispatch: any
): Promise<void> => {
  deleteMovieLoading();
  return deleteMovie(movieVal)
    .then(() => {
      alert("Successfully delited!");
      deleteMovieSuccess();
      dispatch(getMoviesRequest());
    })
    .catch((error) => {
      alert(error.message.toString());
      deleteMovieError(error.toString());
    });
};
export const setMoviesSearch = (search: string): MoviesAction => ({
  type: actionTypes.SET_MOVIES_SEARCH,
  payload: search,
});
export const setMoviesFilter = (filterBy: string): MoviesAction => ({
  type: actionTypes.SET_MOVIES_FILTER,
  payload: filterBy,
});
export const setMoviesSortBy = (sortBy: string): MoviesAction => ({
  type: actionTypes.SET_MOVIES_SORTBY,
  payload: sortBy,
});
export const setMoviesOrder = (sortOrder: string): MoviesAction => ({
  type: actionTypes.SET_MOVIES_ORDER,
  payload: sortOrder,
});
export const getMoviesLoading = (): MoviesAction => ({
  type: actionTypes.SET_MOVIES_LOADING,
});
export const getMoviesError = (err: string): MoviesAction => ({
  type: actionTypes.SET_MOVIES_ERROR,
  payload: err,
});
export const setMovies = (movies: { data: IMovie[] }): MoviesAction => {
  return {
    type: actionTypes.SET_MOVIES,
    payload: movies.data,
  };
};

export const getMoviesRequest = (params?: any) => (
  dispatch: any
): Promise<void> => {
  dispatch(getMoviesLoading());
  const queryParams = {
    limit: 100,
    ...params,
  };

  return getMovies(queryParams)
    .then((response) => {
      dispatch(setMovies(response.data));
    })
    .catch((error: any) => {
      dispatch(getMoviesError(error.toString()));
    });
};
