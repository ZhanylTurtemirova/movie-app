import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 20px;
  & label {
    display: block;
  }
`;

export const ErrorMessage = styled.p`
  color: var(--mainRed);
  margin-top: 5px;
  font-size: 12px;
`;

export const Label = styled.label`
  color: var(--mainRed);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 14px;
  padding-bottom: 10px;
`;
