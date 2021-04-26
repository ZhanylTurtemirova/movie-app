import { connect } from "react-redux";
import {
  selectError,
  selectLoading,
  selectSuccessMsg,
} from "../../store/selectors";
import {
  addMovieRequest,
  editMovieRequest,
  getMoviesRequest,
} from "../../store/actionCreators";
import { AddMovie } from "./AddMovie";

export const AddMovieContainer = connect(
  (state: MoviesState) => ({
    successMsg: selectSuccessMsg(state),
    error: selectError(state),
    isLoading: selectLoading(state),
  }),
  { addMovieRequest, getMoviesRequest, editMovieRequest }
)(AddMovie);

export default AddMovieContainer;
