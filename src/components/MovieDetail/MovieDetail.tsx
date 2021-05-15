import React, { FC, ReactElement, useEffect, useState } from "react";
import {
  MovieWrapper,
  MoviePoster,
  MovieDescription,
  MovieTilte,
  Title,
  Rate,
  MovieSubtitle,
  MovieDateTime,
  MovieOverview,
  Date,
  Time,
  Wrapper,
  TopWrapper,
  SearchWrapper,
  SearchIcon,
  BgWrapper,
  MovieContent,
} from "./MovieDetail.styles";
import searchImg from "../../assets/red-search.webp";
import Logo from "../Logo";
import { useParams } from "react-router-dom";

type MovieDetailProp = {
  movie: IMovie;
  error: string;
  isLoading: boolean;
};

const MovieDetail: FC<React.PropsWithChildren<MovieDetailProp>> = ({
  movie: movieProp,
  error,
  isLoading,
}): ReactElement => {
  const [movie, setMovie] = useState(movieProp);
  const { id }: Record<string, string> = useParams();

  useEffect(() => {
    setMovie(movieProp);
  }, [movieProp, id]);

  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Wrapper>
      <BgWrapper />
      <MovieContent>
        <TopWrapper>
          <Logo />
          <SearchWrapper>
            <SearchIcon src={searchImg} />
          </SearchWrapper>
        </TopWrapper>
        <MovieWrapper>
          <MoviePoster src={movie?.poster_path || ""} />
          <MovieDescription>
            <MovieTilte>
              <Title>{movie?.title || ""}</Title>
              <Rate>{movie?.vote_average || 0}</Rate>
            </MovieTilte>
            <MovieSubtitle>{movie?.tagline || ""}</MovieSubtitle>
            <MovieDateTime>
              <Date>{movie?.release_date || ""}</Date>{" "}
              <Time>{movie?.runtime || 0}</Time>
            </MovieDateTime>
            <MovieOverview>{movie?.overview || ""}</MovieOverview>
          </MovieDescription>
        </MovieWrapper>
      </MovieContent>
    </Wrapper>
  );
};
export default MovieDetail;
