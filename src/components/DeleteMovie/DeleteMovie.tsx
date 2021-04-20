import React, { ReactElement, FC } from "react";
import { StyledForm, ButtonsWrapper, StyledTitle } from "./DeleteMovie.styles";
import Button from "../Button";
import Modal from "../Modal";

type DeleteMovieProps = {
  onClose: () => void;
  isShowed: boolean;
  movieId: string;
};

export const DeleteMovie: FC<DeleteMovieProps> = ({
  onClose: handleClose,
  isShowed,
}): ReactElement => {
  return (
    <Modal isHidden={isShowed} onClose={handleClose} title="Delete Movie">
      <StyledForm>
        <StyledTitle>Are you sure you want to delete this movie?</StyledTitle>
        <ButtonsWrapper>
          <Button isFilled text="Confirm" />
        </ButtonsWrapper>
      </StyledForm>
    </Modal>
  );
};
