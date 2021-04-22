import { connect } from "react-redux";
import {
  selectFilter,
  selectSortBy,
  selectSortOrder,
} from "../../store/selectors";
import {
  setMoviesFilter,
  setMoviesSortBy,
  setMoviesOrder,
} from "../../store/actionCreators";
import { SortMenu } from "./SortMenu";

export const SortMenuContainer = connect(
  (state: MoviesState) => ({
    filter: selectFilter(state),
    sortBy: selectSortBy(state),
    sortOrder: selectSortOrder(state),
  }),
  { setMoviesFilter, setMoviesSortBy, setMoviesOrder }
)(SortMenu);

export default SortMenuContainer;
