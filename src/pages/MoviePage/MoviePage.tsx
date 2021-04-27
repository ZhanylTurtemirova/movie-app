import React from "react";
import MovieDatail from "../../components/MovieDetail";
import SortMenu from "../../components/SortMenu";
import MenuList from "../../components/MovieList";
import Footer from "../../components/Footer";
import ErrorBoundary from "../../components/ErrorBoundary";
import posterImg from "../../assets/pulp-fiction.jpg";
import SearchBannerContainer from "../../components/SearchBanner";
import SortMenuContainer from "../../components/SortMenu";

interface MoviePageProps {
  filterBy: string;
}
interface MoviePageState {
  filterBy: string;
  selectedMovie: {
    id: string;
    movieTitle: string;
    releaseDate: string;
    movieUrl: string;
    overview: string;
    runTime: string;
    genre: string[];
    imgUrl: string;
  };
}
export default class MoviePage extends React.Component<
  MoviePageProps,
  MoviePageState
> {
  state = {
    selectedMovie: {
      id: "0",
      movieTitle: "PulpFiction",
      releaseDate: "01-01-2004",
      genre: ["Crime"],
      imgUrl: posterImg,
      movieUrl: "movieUrl",
      overview:
        "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town.",
      runTime: "154 min",
    },
    filterBy: "all",
  };
  componentDidUpdate(prevProps: { filterBy: string }) {
    if (this.props !== prevProps) {
      this.setState({ filterBy: this.props.filterBy });
    }
  }
  render() {
    const { filterBy } = this.state;
    return (
      <>
        <ErrorBoundary hasError={false}>
          <MovieDatail movie={this.state.selectedMovie} />
          <SearchBannerContainer />
          <SortMenuContainer />
        </ErrorBoundary>
        <Footer />
      </>
    );
  }
}
