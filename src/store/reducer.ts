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
  search: "",
  successMsg: "",
  movie: {
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
    case actionTypes.SET_MOVIES_SEARCH:
      return {
        ...state,
        search:
          action?.payload && typeof action.payload === "string"
            ? action.payload
            : "",
      };
    case actionTypes.ADD_MOVIE_ERROR:
      return {
        ...state,
        error:
          action?.payload && typeof action.payload === "string"
            ? action.payload
            : "",
      };
    case actionTypes.ADD_MOVIE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case actionTypes.ADD_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: true,
        successMsg: "The movie has been added successfully",
      };
    case actionTypes.DELETE_MOVIE_ERROR:
      return {
        ...state,
        error:
          action?.payload && typeof action.payload === "string"
            ? action.payload
            : "",
      };
    case actionTypes.DELETE_MOVIE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case actionTypes.DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: true,
        successMsg: "The movie has been deleted successfully",
      };
    case actionTypes.EDIT_MOVIE_ERROR:
      return {
        ...state,
        error:
          action?.payload && typeof action.payload === "string"
            ? action.payload
            : "",
      };
    case actionTypes.EDIT_MOVIE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case actionTypes.EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: true,
        successMsg: "The movie has been edited successfully",
      };
    case actionTypes.GET_MOVIE_LOADING:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case actionTypes.GET_MOVIE_ERROR:
      return {
        ...state,
        error:
          action?.payload && typeof action.payload === "string"
            ? action.payload
            : "",
      };
    case actionTypes.SET_MOVIE:
      return {
        ...state,
        movie: action.payload || initialState.movie,
        isLoading: false,
        error: "",
      };
  }
  return state;
};

export default reducer;
