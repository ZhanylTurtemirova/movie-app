import styled, { css } from "styled-components";

export const Menu = styled.div`
  display: flex;
`;

export const SortTitle = styled.div`
  text-transform: uppercase;
  margin-right: 20px;
  cursor: pointer;
`;

export const SortDropdown = styled.div<{ isShowed: boolean }>`
  text-transform: uppercase;
  display: ${(isShowed) => {
    return isShowed ? "block" : "none";
  }};
  display: none;
  position: absolute;
  top: 60px;
  right: 0;
  background-color: var(--mainWhite);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const SortWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SortMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px ridge var(--secondaryGrey);
  padding-bottom: -3px;
`;

export const MenuItem = styled.div<{ isActive: boolean }>`
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 10px;
  padding: 10px 0;
  &:hover {
    border-bottom: 3px ridge var(--mainRed);
  }
`;

export const SortItem = styled.div`
  text-transform: uppercase;
  padding-bottom: 10px;
  padding-top: 12px;
  margin-right: 5px;
  cursor: pointer;
`;

export const ResultWrapper = styled.div`
  font-size: 18px;
  padding: 20px 0;
`;

export const TriangleButtonWrapper = styled.div`
  transition-duration: 0.5s;
  transition-property: transform;
  &:hover {
    transform: rotate(180deg);
  }
`;

export const TriangleButton = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 3.75px 7.5px 3.75px;
  border-color: transparent transparent var(--mainRed) transparent;
`;

export const StyledBg = styled.div`
  background: var(--mainDark);
`;

export const Wrapper = styled.div`
  width: 90%;
  margin: 20px auto;
`;
