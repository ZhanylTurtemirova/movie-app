import styled from "styled-components";

export const StyledButton = styled.div<{ isFilled?: boolean }>`
  background: ${({ isFilled }) => (isFilled ? "var(--mainRed)" : "none")};
  border: 2px solid var(--mainRed);
  padding: 15px 25px;
  text-transform: uppercase;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
`;
