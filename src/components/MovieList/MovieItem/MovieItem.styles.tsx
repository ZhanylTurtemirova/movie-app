import styled from "styled-components";

export const MovieMenuWrapper = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondaryGrey);
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
export const MovieWrapper = styled.span`
  width: 300px;
  margin-bottom: 20px;
  position: relative;
  ${MovieMenuWrapper} {
    display: none;
  }
  &:hover ${MovieMenuWrapper} {
    display: flex;
  }
`;
export const MoviePoster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
`;
export const MovieDescription = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const MovieTilte = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled.span`
  font-size: 16px;
  padding-bottom: 5px;

  color: var(--mainWhite);
`;
export const Genre = styled.div`
  font-size: 14px;
  color: var(--secondaryGrey);
`;
export const MovieDate = styled.div`
  & span {
    font-size: 16px;
    padding: 3px;
    border: 2px solid var(--secondaryGrey);
    border-radius: 4px;
  }
`;

export const MovieMenu = styled.div`
  position: relative;
`;

export const MovieMenuIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const MenuItem = styled.span`
  cursor: pointer;
  padding: 15px 25px;
  color: var(--mainWhite);
  border-radius: 4px;

  &:hover {
    background: var(--mainRed);
  }
`;
export const MenuItems = styled.div<{ isMenuShown: boolean }>`
  position: absolute;
  right: 0px;
  top: 50px;
  display: ${(isMenuShown) => (isMenuShown ? "flex" : "none")};
  flex-direction: column;
  background: var(--mainGrey);
  border-radius: 4px;
`;
