import React from "react";
import { ErrorMessage, Label, Wrapper } from "./FieldWrapper.styles";
import { FieldWrapperProps } from "./FieldWrapper.types";
import { useFieldWrapper } from "./useFieldWrapper";

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  label,
  name,
  children,
  messageId,
  required = false,
  ...props
}) => {
  const {
    field,
    hasError,
    messageId: msgId,
    error,
    ...attrs
  } = useFieldWrapper({
    name,
    messageId,
    required,
  });

  return (
    <Wrapper {...props}>
      <Label>{label}</Label>
      {children({
        ...field,
        ...attrs,
        hasError,
      })}
      <ErrorMessage id={msgId}>{hasError && error}</ErrorMessage>
    </Wrapper>
  );
};
