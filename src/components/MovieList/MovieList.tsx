import React, { FC, useEffect } from "react";
import MovieItem from "./MovieItem/MovieItem";
import { ListWrapper, ResultWrapper } from "./MovieList.styles";
import { useHistory } from "react-router-dom";

interface MovieListInterface {
  movies: IMovie[];
  error: string;
  isLoading: boolean;
  filter: string;
  sortBy: string;
  sortOrder: string;
  search: string;
  getMoviesRequest: (
    params?: Record<string, string | number | boolean> | undefined
  ) => Promise<void>;
  getMovieRequest: any;
}

const MovieList: FC<MovieListInterface> = ({
  getMoviesRequest,
  getMovieRequest,
  movies,
  error,
  filter,
  sortBy,
  sortOrder,
  isLoading,
  search,
}): React.ReactElement => {
  useEffect(() => {
    getMoviesRequest({ filter, sortBy, sortOrder, searchBy: "title", search });
  }, [filter, getMoviesRequest, sortBy, sortOrder, search]);
  let history = useHistory();

  const onClickHandler = (id: number) => {
    getMovieRequest(id);
    history.push(`/movies/${id}`);
  };
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
          movies.map((item) => (
            <MovieItem
              movie={item}
              onClickProps={() => onClickHandler(item.id)}
            />
          ))}
      </ListWrapper>
    </>
  );
};
export default MovieList;
