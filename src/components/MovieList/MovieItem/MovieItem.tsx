import React, { FC, ReactElement, useState } from "react";
import {
  MovieWrapper,
  MoviePoster,
  MovieDescription,
  MovieTilte,
  Title,
  Genre,
  MovieDate,
  MovieMenu,
  MovieMenuWrapper,
  MovieMenuIcon,
  MenuItems,
  MenuItem,
} from "./MovieItem.styles";
import menuImg from "../../../assets/menu.png";
import EditMovie from "../../EditMovie";
import DeleteMovie from "../../DeleteMovie";

interface MovieItemInterface {
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
}

const MovieItem: FC<React.PropsWithChildren<MovieItemInterface>> = ({
  movie,
  movie: { poster_path, title, genres, release_date },
}): ReactElement => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false);
  const [isEditShown, setIsEditShown] = useState<boolean>(false);
  const [isDeleteShown, setIsDeleteShown] = useState<boolean>(false);

  return (
    <>
      <MovieWrapper>
        <MovieMenuWrapper>
          <MovieMenu onClick={() => setIsMenuShown(true)}>
            <MovieMenuIcon src={menuImg} />
            <MenuItems isMenuShown={isMenuShown}>
              <MenuItem onClick={() => setIsEditShown(true)}>Edit</MenuItem>
              <MenuItem onClick={() => setIsDeleteShown(true)}>Delete</MenuItem>
            </MenuItems>
          </MovieMenu>
        </MovieMenuWrapper>
        <MoviePoster src={poster_path || ""} />
        <MovieDescription>
          <MovieTilte>
            <Title>{title}</Title>
            <Genre>{genres?.join(" & ")}</Genre>
          </MovieTilte>
          <MovieDate>
            <span>{release_date}</span>
          </MovieDate>
        </MovieDescription>
      </MovieWrapper>
      {isDeleteShown && (
        <DeleteMovie
          isShowed={isDeleteShown}
          movieId={movie.title}
          onClose={() => setIsDeleteShown(false)}
        />
      )}
      {isEditShown && (
        <EditMovie
          isShowed={isEditShown}
          movie={movie}
          onClose={() => setIsEditShown(false)}
        />
      )}
    </>
  );
};
export default MovieItem;
