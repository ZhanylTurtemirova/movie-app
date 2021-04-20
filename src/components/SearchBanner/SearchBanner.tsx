import React, { ReactElement, FC, useState } from "react";
import {
  SearchWrapper,
  AddButton,
  SearchContent,
  SearchTitle,
  SearchInputWrapper,
  SearchInput,
  SearchButton,
  SearchBgWrapper,
  SearchContentWrapper,
  SearchBannerTop,
  SearchBannerMiddle,
} from "./styles/SearchBanner.styles";
import Logo from "../Logo";
import AddMovie from "../AddMovie";

export const SearchBanner: FC = (): ReactElement => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  return (
    <>
      <SearchWrapper>
        <SearchBgWrapper />
        <SearchContentWrapper>
          <SearchBannerTop>
            <Logo />
            <AddButton onClick={() => setIsModalOpened(true)}>
              + Add Movie
            </AddButton>
          </SearchBannerTop>
          <SearchBannerMiddle>
            <SearchContent>
              <SearchTitle>Find your movie</SearchTitle>
              <SearchInputWrapper>
                <SearchInput placeholder={"What do you want to watch?"} />
                <SearchButton>Search</SearchButton>
              </SearchInputWrapper>
            </SearchContent>
          </SearchBannerMiddle>
        </SearchContentWrapper>
      </SearchWrapper>
      {isModalOpened && (
        <AddMovie
          onClose={() => setIsModalOpened(false)}
          isShowed={isModalOpened}
        />
      )}
    </>
  );
};
