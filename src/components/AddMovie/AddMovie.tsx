import React, { ReactElement, FC, useState } from "react";
import { StyledForm, ButtonsWrapper } from "./AddMovie.styles";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import Modal from "../Modal";

type AddMovieProps = {
  onClose: () => void;
  isShowed: boolean;
};

const Options: string[] = ["Action", "Adventure", "Horror"];
export const AddMovie: FC<AddMovieProps> = ({
  onClose: handleClose,
  isShowed,
}): ReactElement => {
  const [movieTitle, setTitle] = useState<string>("");
  const [releaseDate, setReleaseDate] = useState<string>("");
  const [movieUrl, setMovieUrl] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [overview, setOverview] = useState<string>("");
  const [runTime, setRuntime] = useState<string>("");
  return (
    <Modal isHidden={isShowed} onClose={handleClose} title="Add Movie">
      <StyledForm>
        <Input
          label="title"
          type="text"
          value={movieTitle}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"Add Title"}
        />
        <Input
          label="release date"
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          placeholder={"Select Data"}
        />
        <Input
          label="Movie url"
          type="string"
          value={movieUrl}
          onChange={(e) => setMovieUrl(e.target.value)}
          placeholder={"Movie URL here"}
        />
        <Select
          name="genre"
          value={genre}
          options={Options}
          onChange={(e) => setGenre(e.target.value)}
          label={"Select Genre"}
        />
        <Input
          label="Overview"
          type="string"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
          placeholder={"Overview here"}
        />
        <Input
          label="Runtime"
          type="string"
          value={runTime}
          onChange={(e) => setRuntime(e.target.value)}
          placeholder={"Runtime here"}
        />
        <ButtonsWrapper>
          <Button text="Reset" />
          <Button isFilled text="Submit" />
        </ButtonsWrapper>
      </StyledForm>
    </Modal>
  );
};
