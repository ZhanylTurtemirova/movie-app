import React, { ReactElement, FC } from "react";
import { StyledLabel, StyledInput, InputWrapper } from "./Input.styles";

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  type: any;
  value: any;
  label: string;
}
export const Input: FC<InputInterface> = ({
  label,
  type,
  value,
  ...props
}): ReactElement => {
  return (
    <InputWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type} value={value} {...props} />
    </InputWrapper>
  );
};
export default Input;
