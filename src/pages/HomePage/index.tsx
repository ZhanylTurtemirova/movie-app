import React from "react";
import SearchBanner from "../../components/SearchBanner";
import SortMenuContainer from "../../components/SortMenu";
import MovieListContainer from "../../components/MovieList/MovieListContainer";
import Footer from "../../components/Footer";
import ErrorBoundary from "../../components/ErrorBoundary";

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <ErrorBoundary hasError={false}>
          <SearchBanner />
          <SortMenuContainer />
          <MovieListContainer />
        </ErrorBoundary>
        <Footer />
      </>
    );
  }
}
