import { connect } from "react-redux";
import { selectError, selectLoading, selectMovie } from "../../store/selectors";
import { setMoviesSearch } from "../../store/actionCreators";
import MovieDetail from "./MovieDetail";

export const SearchBannerContainer = connect(
  (state: MoviesState) => ({
    movie: selectMovie(state),
    error: selectError(state),
    isLoading: selectLoading(state),
  }),
  { setMoviesSearch }
)(MovieDetail);

export default SearchBannerContainer;
