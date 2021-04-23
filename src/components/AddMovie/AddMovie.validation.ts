import * as yup from "yup";

export const AddMovieSchema = yup.object().shape({
  title: yup.string().required(),
  release_date: yup.date().required(),
  poster_path: yup.string().url().required(),
  genres: yup.array().defined().min(1).required(),
  overview: yup.string().required(),
  runtime: yup.number().min(1).required().integer(),
  id: yup.number(),
});
