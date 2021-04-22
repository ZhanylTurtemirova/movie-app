import * as actionTypes from "./actionTypes";
import { getMovies } from "./services";

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
