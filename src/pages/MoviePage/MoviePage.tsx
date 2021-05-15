import React, { FC } from "react";
import MovieDatailContainer from "../../components/MovieDetail";
import Footer from "../../components/Footer";
import ErrorBoundary from "../../components/ErrorBoundary";
import SortMenuContainer from "../../components/SortMenu";
import MovieListContainer from "../../components/MovieList/MovieListContainer";
const MoviePage: FC = () => {
  return (
    <>
      <ErrorBoundary hasError={false}>
        <MovieDatailContainer />
        <SortMenuContainer />
        <MovieListContainer />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default MoviePage;
