import { connect } from "react-redux";
import { selectSearchValue } from "../../store/selectors";
import { setMoviesSearch } from "../../store/actionCreators";
import { SearchBanner } from "./SearchBanner";

export const SearchBannerContainer = connect(
  (state: MoviesState) => ({
    search: selectSearchValue(state),
  }),
  { setMoviesSearch }
)(SearchBanner);

export default SearchBannerContainer;
