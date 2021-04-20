// import React, { FC, useEffect, useState } from "react";
// import { useSelector, shallowEqual, useDispatch } from "react-redux";
// import { selectMovies } from "../../store/selectors";
// import { Dispatch } from "redux";
// import { getMoviesRequest } from "../../store/actionCreators";
// import MovieItem from "./MovieItem/MovieItem";
// import { ListWrapper } from "./MovieList.styles";
// import { connect } from "react-redux";

// const MovieList: FC = ({}): React.ReactElement => {
//   const [moviesList, setMoviesList] = useState([]);
//   const dispatch: Dispatch<any> = useDispatch();
//   useEffect(() => {
//     dispatch(getMoviesRequest());
//   }, [getMoviesRequest]);
//   const movies: any = useSelector((state: MoviesState) => state.movies);

//   useEffect(() => {
//     return setMoviesList(movies);
//   }, [setMoviesList, movies]);

//   console.log("!!!", moviesList);
//   const err: string = useSelector(
//     (state: MoviesState) => state.error,
//     shallowEqual
//   );
//   const isLoading: boolean = useSelector(
//     (state: MoviesState) => state.isLoading,
//     shallowEqual
//   );
//   if (!moviesList || moviesList.length === 0) {
//     return <div>No movies found</div>;
//   }
//   if (err) {
//     return <div>{err};</div>;
//   }
//   if (isLoading) {
//     return <div>Loading</div>;
//   }

//   return (
//     <ListWrapper>
//       {Array.isArray(moviesList) &&
//         moviesList.map((item) => <MovieItem movie={item} />)}
//     </ListWrapper>
//   );
// };
// export default MovieList;

import { connect } from "react-redux";
import {
  selectMovies,
  selectLoading,
  selectError,
} from "../../store/selectors";
import { getMoviesRequest } from "../../store/actionCreators";
import MovieList from "./MovieList";

export const MovieListContainer = connect(
  (state: MoviesState) => ({
    movies: selectMovies(state),
    isLoading: selectLoading(state),
    error: selectError(state),
  }),
  {
    getMoviesRequest,
  }
)(MovieList);

export default MovieListContainer;
