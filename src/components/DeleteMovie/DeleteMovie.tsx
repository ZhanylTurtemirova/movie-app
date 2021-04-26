import React, { ReactElement, FC } from "react";
import { StyledForm, StyledTitle, StyledButton } from "./DeleteMovie.styles";
import Modal from "../Modal";

type DeleteMovieProps = {
  onClose: () => void;
  isShowed: boolean;
  movieId: number;
  deleteMovieRequest: any;
};

export const DeleteMovie: FC<DeleteMovieProps> = ({
  onClose: handleClose,
  isShowed,
  movieId,
  deleteMovieRequest,
}): ReactElement => {
  const handleClick = () => {
    deleteMovieRequest(movieId);
    console.log("VVVV");
    handleClose();
  };
  return (
    <Modal isHidden={isShowed} onClose={handleClose} title="Delete Movie">
      <StyledForm>
        <StyledTitle>Are you sure you want to delete this movie?</StyledTitle>
        <StyledButton onClick={handleClick}>Confirm </StyledButton>
      </StyledForm>
    </Modal>
  );
};
