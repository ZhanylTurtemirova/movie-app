import * as actionTypes from "./actionTypes";

const initialState: MoviesState = {
  movies: [
    {
      id: 1,
      title: "",
      tagline: "No tagline",
      vote_average: 1,
      vote_count: 1,
      release_date: "",
      poster_path: "",
      overview: "No overview",
      budget: 1,
      revenue: 1,
      genres: ["", ""],
      runtime: 0,
    },
  ],
  filter: "all",
  sortBy: "release date",
  sortDescending: true,
  isLoading: false,
  error: "",
};

const reducer = (
  state: MoviesState = initialState,
  action: MoviesAction
): MoviesState => {
  switch (action.type) {
    case actionTypes.SET_MOVIES:
      console.log("MMM", action?.payload);
      return {
        ...state,
        movies:
          action?.payload && Array.isArray(action.payload)
            ? action.payload
            : initialState.movies,
        isLoading: false,
        error: "",
      };
    case actionTypes.SET_MOVIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error:
          action?.payload && typeof action.payload === "string"
            ? action.payload
            : "Something went wrong",
      };
    case actionTypes.SET_MOVIES_LOADING:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
  }
  return state;
};

export default reducer;
