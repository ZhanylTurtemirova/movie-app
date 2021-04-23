import { FieldProps, FieldInputProps } from "formik";
import { ReactNode } from "react";

export type Field = {
  id?: string;
  name: string;
  messageId?: number | string;
  required?: boolean;
  type?: string;
};

export type FieldWrapperProps = {
  label: string | ReactNode;
  id?: string;
  type?: string;
  children: any;
} & Field;

export type FieldWrapper = {
  id?: string;
  field: FieldInputProps<unknown>;
  messageId: string;
  error: string | undefined;
  type?: string;
  hasError: boolean;
};
