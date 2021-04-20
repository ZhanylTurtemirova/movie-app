import styled from "styled-components";

export const StyledInput = styled.input`
  font-size: 16px;
  font-family: inherit;
  padding: 20px 15px;
  background-color: var(--mainGrey);
  border: 2px solid var(--mainGrey);
  border-radius: 4px;
  box-shadow: none;
  &::placeholder {
    color: var(--secondaryGrey);
  }
  color: var(--mainWhite);
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const StyledSelect = styled.select`
  font-size: 16px;
  font-family: inherit;
  padding: 20px 15px;
  background-color: var(--mainGrey);
  border: 2px solid var(--mainGrey);
  border-radius: 4px;
  box-shadow: none;
  &::placeholder {
    color: var(--secondaryGrey);
  }
  color: var(--mainWhite);
`;

export const StyledOption = styled.option`
  font-size: 16px;
  font-family: inherit;
  padding: 20px 15px;
  background-color: var(--mainGrey);
  border: 2px solid var(--mainGrey);
  border-radius: 4px;
  box-shadow: none;
  &::placeholder {
    color: var(--secondaryGrey);
  }
  color: var(--mainWhite);
`;

export const StyledLabel = styled.label`
  color: var(--mainRed);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  padding-bottom: 10px;
`;
