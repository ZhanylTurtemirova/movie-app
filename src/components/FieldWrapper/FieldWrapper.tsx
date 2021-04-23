import React from "react";
import { ErrorMessage, Label, Wrapper } from "./FieldWrapper.styles";
import { FieldWrapperProps } from "./FieldWrapper.types";
import { useFieldWrapper } from "./useFieldWrapper";

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  id: userDefinedId,
  label,
  name,
  children,
  messageId,
  required = false,
  ...props
}) => {
  const {
    id,
    field,
    hasError,
    messageId: msgId,
    error,
    ...attrs
  } = useFieldWrapper({
    name,
    messageId,
    required,
    id: userDefinedId,
  });

  return (
    <Wrapper {...props}>
      <Label htmlFor={id}>{label}</Label>
      {children({
        ...field,
        ...attrs,
        hasError,
      })}
      <ErrorMessage id={msgId}>{hasError && error}</ErrorMessage>
    </Wrapper>
  );
};
