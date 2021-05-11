import React, { FC } from "react";
import MovieDatailContainer from "../../components/MovieDetail";
import Footer from "../../components/Footer";
import ErrorBoundary from "../../components/ErrorBoundary";
// import  posterImg from "../../assets/pulp-fiction.jpg";
import SearchBannerContainer from "../../components/SearchBanner";
import SortMenuContainer from "../../components/SortMenu";
// import { useParams } from "react-router-dom";
// import { connect } from "react-redux";
// import { selectMovie } from "../../store/selectors";
// import { getMoviesRequest } from "../../store/actionCreators";
const MoviePage: FC = () => {
  return (
    <>
      <ErrorBoundary hasError={false}>
        <MovieDatailContainer />
        <SearchBannerContainer />
        <SortMenuContainer />
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default MoviePage;
