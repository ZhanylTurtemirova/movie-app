import React, { ReactElement, FC, useState, useEffect } from "react";
import {
  Menu,
  MenuItem,
  SortItem,
  SortTitle,
  TriangleButton,
  SortWrapper,
  SortDropdown,
  SortMenuWrapper,
  ResultWrapper,
  Wrapper,
  StyledBg,
  TriangleButtonWrapper,
} from "./styles/SortMenu.styles";

interface SortMenuProps {
  activeClickProps: (item: string) => void;
}
export const SortMenu: FC<SortMenuProps> = ({
  activeClickProps,
}): ReactElement => {
  const menuItems: string[] = [
    "all",
    "documentary",
    "action",
    "adventure",
    "crime",
  ];
  const sortItems: string[] = ["realise date", "rating"];
  const [activeItem, setActiveItem] = useState<string>("all");
  const [sortedOption, setSortedOption] = useState<string>(sortItems[0]);
  const [count, setCount] = useState<number>(0);
  const [isShowed, setIsShowed] = useState<boolean>(false);
  const activeClickHandler = (item: string) => {
    activeClickProps(item);
    setActiveItem(item);
  };
  useEffect(() => {}, [isShowed, activeItem]);

  return (
    <StyledBg>
      <Wrapper>
        <SortMenuWrapper>
          <Menu>
            {menuItems.map((item, index) => (
              <MenuItem
                onClick={() => {
                  activeClickHandler(item);
                }}
                isActive={false}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
          <SortWrapper>
            <SortTitle>Sort By</SortTitle>
            <SortItem
              onClick={() => {
                setIsShowed(!isShowed);
              }}
            >
              {sortedOption}
            </SortItem>
            <TriangleButtonWrapper
              onClick={() => {
                setIsShowed(!isShowed);
              }}
            >
              <TriangleButton />
            </TriangleButtonWrapper>
            <SortDropdown isShowed={isShowed}>
              {sortItems.map((item) => (
                <SortItem onClick={() => setSortedOption(item)}>
                  {item}
                </SortItem>
              ))}
            </SortDropdown>
          </SortWrapper>
        </SortMenuWrapper>
        <ResultWrapper>{count} movies found </ResultWrapper>
      </Wrapper>
    </StyledBg>
  );
};
