export const selectMovies = (state: any): any[] => {
  console.log("???", state);
  return state.movies;
};
export const selectLoading = ({ isLoading }: any): boolean => isLoading;
export const selectError = ({ error }: any): string => error;
