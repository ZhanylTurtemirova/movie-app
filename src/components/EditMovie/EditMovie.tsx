import React, { ReactElement, FC, useState } from "react";
import { StyledForm, ButtonsWrapper } from "./EditMovie.styles";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import Modal from "../Modal";

type EditMovieProps = {
  movie: {
    id?: number;
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    budget: number;
    revenue: number;
    genres: string[];
    runtime: number;
  };
  onClose: () => void;
  isShowed: boolean;
};

const Options: string[] = ["Action", "Adventure", "Horror"];
export const EditMovie: FC<EditMovieProps> = ({
  onClose: handleClose,
  isShowed,
  movie,
}): ReactElement => {
  const [movieTitle, setTitle] = useState<string>(movie.title);
  const [releaseDate, setReleaseDate] = useState<string>(movie.release_date);
  const [movieUrl, setMovieUrl] = useState<string>(movie.poster_path);
  const [genre, setGenre] = useState<string>(movie.genres.join("&"));
  const [overview, setOverview] = useState<string>(movie.overview);
  const [runTime, setRuntime] = useState<number>(movie.runtime);
  return (
    <Modal isHidden={isShowed} onClose={handleClose} title="Edit Movie">
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
          type="text"
          value={movieUrl}
          onChange={(e) => setMovieUrl(e.target.value)}
          placeholder={"Movie URL here"}
        />
        {/* <Select
          name="genre"
          value={genre}
          options={Options}
          onChange={(e) => setGenre(e.target.value)}
        /> */}
        <Input
          label="Overview"
          type="text"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
          placeholder={"Overview here"}
        />
        <Input
          label="Runtime"
          type="number"
          value={runTime}
          onChange={(e) => setRuntime(parseInt(e.target.value))}
          placeholder={"Runtime here"}
        />
        <ButtonsWrapper>
          <Button text="Reset" />
          <Button isFilled text="Save Changes" />
        </ButtonsWrapper>
      </StyledForm>
    </Modal>
  );
};
