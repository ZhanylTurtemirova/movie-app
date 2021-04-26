import React, { ReactElement, FC } from "react";
import { StyledSelect, StyledOption } from "./Select.styles";

interface SelectInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: string[];
}
export const Select: FC<SelectInterface> = ({
  name,
  options,
  ...props
}): ReactElement => {
  return (
    <StyledSelect name={name}>
      {options.map((item, index) => (
        <StyledOption key={index} value={item}>
          {item}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};
export default Select;
