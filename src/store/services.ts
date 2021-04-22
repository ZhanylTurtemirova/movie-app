import { api } from "../api";
import { AxiosResponse } from "axios";
const BASE_API = "http://localhost:4000/movies";

export const getMovies = (
  params?: Record<string, string | boolean | number>
): Promise<AxiosResponse> => api.get(BASE_API, params);

export const deleteMovie = (id: number): Promise<AxiosResponse> =>
  api.deleteQuery(`${BASE_API}/${id}`);

export const addMovie = (movie: Record<string, any>): Promise<AxiosResponse> =>
  api.post(BASE_API, movie);

export const editMovie = (movie: Record<string, any>): Promise<AxiosResponse> =>
  api.put(BASE_API, movie);
