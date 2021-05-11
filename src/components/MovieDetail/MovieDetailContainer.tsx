import { connect } from "react-redux";
import {
  selectError,
  selectLoading,
  selectMovie,
  // selectMovieById,
} from "../../store/selectors";
import { getMovieRequest } from "../../store/actionCreators";
import MovieDetail from "./MovieDetail";

export const SearchBannerContainer = connect(
  (state: MoviesState) => ({
    movie: selectMovie(state),
    error: selectError(state),
    isLoading: selectLoading(state),
  }),
  { getMovieRequest }
)(MovieDetail);

export default SearchBannerContainer;
