import { connect } from "react-redux";
import {
  selectSearchValue,
  selectError,
  selectLoading,
  selectSuccessMsg,
} from "../../store/selectors";
import {
  setMoviesSearch,
  addMovieRequest,
  getMoviesRequest,
} from "../../store/actionCreators";
import { SearchBanner } from "./SearchBanner";

export const SearchBannerContainer = connect(
  (state: MoviesState) => ({
    search: selectSearchValue(state),
    successMsg: selectSuccessMsg(state),
    error: selectError(state),
    isLoading: selectLoading(state),
  }),
  { setMoviesSearch, addMovieRequest, getMoviesRequest }
)(SearchBanner);

export default SearchBannerContainer;
