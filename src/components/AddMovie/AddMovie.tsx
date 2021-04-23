import React, { ReactElement, FC, useCallback, useMemo } from "react";
import { StyledForm, ButtonsWrapper } from "./AddMovie.styles";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import Modal from "../Modal";
import { Form, Formik } from "formik";
import { FieldWrapper } from "../FieldWrapper/FieldWrapper";
import { AddMovieSchema } from "./AddMovie.validation";

type AddMovieProps = {
  successMsg: string;
  error: string;
  isLoading: boolean;
  addMovie: any;
  onClose: () => void;
  isShowed: boolean;
};

const Options: string[] = ["Action", "Adventure", "Horror"];
export const AddMovie: FC<AddMovieProps> = ({
  onClose: handleClose,
  isShowed,
  successMsg,
  error,
  isLoading,
  addMovie,
}): ReactElement => {
  const movieInitialValues = useMemo(
    () => ({
      id: undefined,
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
    }),
    []
  );

  const handleSubmit = useCallback(
    async (values) => {
      try {
        const val = { ...movieInitialValues, ...values };
        await addMovie(val);
        alert({ successMsg });
        handleClose();
      } catch (err) {
        alert({ err });
      }
    },
    [addMovie, handleClose, movieInitialValues, successMsg]
  );
  return (
    <Modal isHidden={isShowed} onClose={handleClose} title="Add Movie">
      <Formik
        initialValues={movieInitialValues}
        onSubmit={handleSubmit}
        validationSchema={AddMovieSchema}
      >
        {() => (
          <Form>
            <StyledForm>
              {error && <div>{error}</div>}
              <FieldWrapper name="title" label="Title" required>
                {(props: any) => <Input type="text" {...props} />}
              </FieldWrapper>
              <FieldWrapper name="release_date" label="Release Date" required>
                {(props: any) => <Input type="date" {...props} />}
              </FieldWrapper>
              <FieldWrapper name="poster_path" label="Movie url" required>
                {(props: any) => <Input type="string" {...props} />}
              </FieldWrapper>

              <FieldWrapper name="genres" label="Movie url" required>
                {(props: any) => <Select options={Options} {...props} />}
              </FieldWrapper>
              <FieldWrapper name="overview" label="Overview" required>
                {(props: any) => <Input type="string" {...props} />}
              </FieldWrapper>
              <FieldWrapper name="runtime" label="Runtime" required>
                {(props: any) => <Input type="number" {...props} />}
              </FieldWrapper>
              <ButtonsWrapper>
                <Button text="Reset" />
                <Button type="submit" isFilled text="Submit" />
              </ButtonsWrapper>
            </StyledForm>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
