interface IMovie {
  id?: number;
  title: "";
  release_date: string;
  poster_path: "";
  genres: string[];
  overview: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  revenue: number;
  budget: number;
  tagline: string;
}

type MoviesState = {
  movies: IMovie[];
  isLoading: boolean;
  error: string;
  filter: string;
  sortBy: string;
  sortOrder: string;
};

type MoviesAction = {
  type: string;
  payload?: IMovie[] | string;
};

type DispatchType = (args: MoviesAction) => MoviesAction | void | string;
