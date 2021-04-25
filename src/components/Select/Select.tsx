import React, { ReactElement, FC } from "react";
import {
  SelectWrapper,
  StyledLabel,
  StyledSelect,
  StyledOption,
} from "./Select.styles";

interface SelectInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  options: string[];
}
export const Select: FC<SelectInterface> = ({
  // label,
  // onChangeProps,
  name,
  options,
  ...props
}): ReactElement => {
  return (
    // <SelectWrapper>
    //   <StyledLabel htmlFor={name}>{label}</StyledLabel>
    <StyledSelect name={name}>
      {options.map((item, index) => (
        <StyledOption key={index} value={item}>
          {item}
        </StyledOption>
      ))}
    </StyledSelect>
    // </SelectWrapper>
  );
};
export default Select;
