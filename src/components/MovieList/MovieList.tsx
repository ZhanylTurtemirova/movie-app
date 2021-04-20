import React, { FC, useEffect, useState } from "react";
import MovieItem from "./MovieItem/MovieItem";
import { ListWrapper } from "./MovieList.styles";

interface MovieListInterface {
  movies: IMovie[];
  error: string;
  isLoading: boolean;
  getMoviesRequest: (
    params?: Record<string, string | number | boolean> | undefined
  ) => Promise<void>;
}

const MovieList: FC<MovieListInterface> = ({
  getMoviesRequest,
  movies,
  error,
  isLoading,
}): React.ReactElement => {
  useEffect(() => {
    getMoviesRequest();
  }, []);

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
    <ListWrapper>
      {Array.isArray(movies) &&
        movies.map((item) => <MovieItem movie={item} />)}
    </ListWrapper>
  );
};
export default MovieList;
