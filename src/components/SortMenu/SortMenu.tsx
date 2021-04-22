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
  Wrapper,
  StyledBg,
  TriangleDownButtonWrapper,
  TriangleUpButtonWrapper,
} from "./styles/SortMenu.styles";

interface SortMenuProps {
  filter: string;
  sortBy: string;
  sortOrder: string;
  setMoviesFilter: (item: string) => void;
  setMoviesSortBy: (item: string) => void;
  setMoviesOrder: (item: string) => void;
}
export const SortMenu: FC<SortMenuProps> = ({
  filter,
  sortBy,
  setMoviesFilter,
  setMoviesSortBy,
}): ReactElement => {
  const menuItems: string[] = [
    "all",
    "documentary",
    "action",
    "adventure",
    "crime",
  ];
  const sortItems: string[] = ["realise date", "rating", "id"];
  const [activeItem, setActiveItem] = useState<string>(filter || "all");
  const [sortedOption, setSortedOption] = useState<string>(sortItems[0]);
  const [isShowed, setIsShowed] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("desc");
  const activeClickHandler = (item: string) => {
    setMoviesFilter(item);
    setActiveItem(item);
  };
  const setSortedHandler = (item: string) => {
    setMoviesSortBy(item);
    setSortedOption(item);
  };
  const setOrderHandler = (item: string) => {
    setMoviesSortBy(item);
    setSortOrder(item);
  };

  useEffect(() => {}, [isShowed, activeItem, sortedOption, sortOrder]);

  return (
    <StyledBg>
      <Wrapper>
        <SortMenuWrapper>
          <Menu>
            {menuItems.map((item, index) => (
              <MenuItem
                onClick={() => activeClickHandler(item)}
                isActive={false}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
          <SortWrapper>
            <SortTitle onClick={() => setIsShowed(!isShowed)}>
              Sort By
            </SortTitle>
            <SortItem onClick={() => setIsShowed(!isShowed)}>
              {sortedOption}
            </SortItem>
            {sortOrder === "desc" ? (
              <TriangleDownButtonWrapper onClick={() => setOrderHandler("asc")}>
                <TriangleButton />
              </TriangleDownButtonWrapper>
            ) : (
              <TriangleUpButtonWrapper onClick={() => setOrderHandler("desc")}>
                <TriangleButton />
              </TriangleUpButtonWrapper>
            )}
            {isShowed && (
              <SortDropdown>
                {sortItems.map((item) => (
                  <SortItem onClick={() => setSortedHandler(item)}>
                    {item}
                  </SortItem>
                ))}
              </SortDropdown>
            )}
          </SortWrapper>
        </SortMenuWrapper>
      </Wrapper>
    </StyledBg>
  );
};
