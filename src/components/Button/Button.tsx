import React, { ReactElement, FC } from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  isFilled?: boolean | undefined;
  text: string;
}

export const Button: FC<ButtonProps> = ({
  text,
  isFilled,
  ...props
}): ReactElement => {
  return <StyledButton isFilled={isFilled}>{text}</StyledButton>;
};
