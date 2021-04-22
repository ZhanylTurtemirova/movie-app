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
  filter: "",
  sortBy: "release date",
  sortOrder: "desc",
  isLoading: false,
  error: "",
};

const reducer = (
  state: MoviesState = initialState,
  action: MoviesAction
): MoviesState => {
  switch (action.type) {
    case actionTypes.SET_MOVIES:
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
    case actionTypes.SET_MOVIES_FILTER:
      return {
        ...state,
        filter:
          action?.payload && typeof action.payload === "string"
            ? action.payload
            : "",
      };
    case actionTypes.SET_MOVIES_SORTBY:
      return {
        ...state,
        sortBy:
          action?.payload && typeof action.payload === "string"
            ? action.payload
            : "",
      };
    case actionTypes.SET_MOVIES_ORDER:
      return {
        ...state,
        sortOrder:
          action?.payload && typeof action.payload === "string"
            ? action.payload
            : "",
      };
  }
  return state;
};

export default reducer;
