import React, { FC, useEffect } from "react";
import MovieItem from "./MovieItem/MovieItem";
import { ListWrapper, ResultWrapper } from "./MovieList.styles";

interface MovieListInterface {
  movies: IMovie[];
  error: string;
  isLoading: boolean;
  filter: string;
  sortBy: string;
  sortOrder: string;
  getMoviesRequest: (
    params?: Record<string, string | number | boolean> | undefined
  ) => Promise<void>;
}

const MovieList: FC<MovieListInterface> = ({
  getMoviesRequest,
  movies,
  error,
  filter,
  sortBy,
  sortOrder,
  isLoading,
}): React.ReactElement => {
  useEffect(() => {
    getMoviesRequest({ filter, sortBy, sortOrder });
  }, [filter, getMoviesRequest, sortBy, sortOrder]);

  if (!movies || movies.length === 0) {
    return <div>No movies found</div>;
  }
  if (error) {
    return <div>{error};</div>;
  }
  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <ResultWrapper>{movies.length || 0} movies found </ResultWrapper>
      <ListWrapper>
        {Array.isArray(movies) &&
          movies.map((item) => <MovieItem movie={item} />)}
      </ListWrapper>
    </>
  );
};
export default MovieList;
