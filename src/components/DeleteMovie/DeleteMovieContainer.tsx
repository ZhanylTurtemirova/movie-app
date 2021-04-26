import { connect } from "react-redux";
import { deleteMovieRequest } from "../../store/actionCreators";
import { DeleteMovie } from "./DeleteMovie";

export const DeleteMovieContainer = connect(null, { deleteMovieRequest })(
  DeleteMovie
);

export default DeleteMovieContainer;
