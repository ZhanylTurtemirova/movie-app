import styled from "styled-components";

export const StyledForm = styled.div`
  width: 100%;
  margin: auto;
  height: 70vh;
  overflow-y: scroll;
  z-index: 10;
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: var(--mainWhite);
`;

export const CloseButton = styled.button`
  background: none;
  border: 2px solid var(--mainRed);
  padding: 15px 25px;
  text-transform: uppercase;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  color: var(--mainRed);
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const StyledSelect = styled.select`
  width: 100%;
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
