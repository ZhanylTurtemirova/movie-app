import React, { FC, ReactElement } from "react";
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

interface MovieDetailInterface {
  movie: {
    id: string;
    movieUrl: string;
    overview: string;
    runTime: string;
    movieTitle: string;
    genre: string[];
    releaseDate: string;
    imgUrl: string;
    rate?: number;
    subtitle?: string;
  };
}

const MovieDetail: FC<React.PropsWithChildren<MovieDetailInterface>> = ({
  movie,
  movie: {
    imgUrl,
    rate = "4",
    subtitle = "Oscar winning movie",
    movieTitle,
    runTime,
    overview,
    releaseDate,
  },
}): ReactElement => {
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
          <MoviePoster src={imgUrl} />
          <MovieDescription>
            <MovieTilte>
              <Title>{movieTitle}</Title>
              <Rate>{rate}</Rate>
            </MovieTilte>
            <MovieSubtitle>{subtitle}</MovieSubtitle>
            <MovieDateTime>
              <Date>{releaseDate}</Date> <Time>{runTime}</Time>
            </MovieDateTime>
            <MovieOverview>{overview}</MovieOverview>
          </MovieDescription>
        </MovieWrapper>
      </MovieContent>
    </Wrapper>
  );
};
export default MovieDetail;
