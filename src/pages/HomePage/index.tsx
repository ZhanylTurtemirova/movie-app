import React from "react";
import SearchBanner from "../../components/SearchBanner";
import SortMenu from "../../components/SortMenu";
import MovieListContainer from "../../components/MovieList/MovieListContainer";
import Footer from "../../components/Footer";
import ErrorBoundary from "../../components/ErrorBoundary";
interface HomePageProps {
  filterBy?: string;
}
interface HomePageState {
  filterBy?: string;
}
export default class HomePage extends React.Component<
  HomePageProps,
  HomePageState
> {
  state = {
    filterBy: "all",
  };

  componentDidUpdate(prevProps: { filterBy: string }) {
    if (this.props !== prevProps) {
      this.setState({ filterBy: this.props.filterBy });
    }
  }

  render() {
    return (
      <>
        {/* <ErrorBoundary hasError={false}> */}
        <SearchBanner />
        <SortMenu
          activeClickProps={(item) => this.setState({ filterBy: item })}
        />
        <MovieListContainer />
        {/* </ErrorBoundary> */}
        <Footer />
      </>
    );
  }
}
