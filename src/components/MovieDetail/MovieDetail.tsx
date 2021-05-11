import React, { FC, ReactElement, useEffect } from "react";
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
import { useHistory, useParams } from "react-router-dom";

type MovieDetailProp = {
  movie: IMovie;
  error: string;
  isLoading: boolean;
  getMovieRequest: (id: number) => void;
};

const MovieDetail: FC<React.PropsWithChildren<MovieDetailProp>> = ({
  movie,
  error,
  isLoading,
  getMovieRequest,
}): ReactElement => {
  const history = useHistory();

  const { id }: Record<string, string> = useParams();

  useEffect(() => {
    (async () => {
      getMovieRequest(Number(id));
      if (error) {
        history.push("/");
      }
    })();
  }, [error, getMovieRequest, history, id]);

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
          <MoviePoster src={movie.poster_path} />
          <MovieDescription>
            <MovieTilte>
              <Title>{movie.title}</Title>
              <Rate>{movie.vote_average}</Rate>
            </MovieTilte>
            <MovieSubtitle>{movie.tagline}</MovieSubtitle>
            <MovieDateTime>
              <Date>{movie.release_date}</Date> <Time>{movie.runtime}</Time>
            </MovieDateTime>
            <MovieOverview>{movie.overview}</MovieOverview>
          </MovieDescription>
        </MovieWrapper>
      </MovieContent>
    </Wrapper>
  );
};
export default MovieDetail;
