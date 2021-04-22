export const selectMovies = (state: any): any[] => {
  return state.movies;
};
export const selectLoading = ({ isLoading }: any): boolean => isLoading;
export const selectError = ({ error }: any): string => error;
export const selectFilter = ({ filter }: any): string => filter;
export const selectSortBy = ({ sortBy }: any): string => sortBy;
export const selectSortOrder = ({ sortOrder }: any): string => sortOrder;
