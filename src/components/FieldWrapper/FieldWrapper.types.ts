import { FieldInputProps } from "formik";
import { ReactNode } from "react";

export type Field = {
  name: string;
  messageId?: number | string;
  required?: boolean;
  type?: string;
};

export type FieldWrapperProps = {
  label: string | ReactNode;
  type?: string;
  children: any;
} & Field;

export type FieldWrapper = {
  field: FieldInputProps<unknown>;
  messageId: string;
  error: string | undefined;
  type?: string;
  hasError: boolean;
};
