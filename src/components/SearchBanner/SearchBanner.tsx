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

interface SearchBannerProps {
  search: string;
  successMsg: string;
  error: string;
  isLoading: boolean;
  setMoviesSearch: any;
  addMovieRequest: any;
}
export const SearchBanner: FC<SearchBannerProps> = ({
  search,
  isLoading,
  error,
  successMsg,
  setMoviesSearch,
  addMovieRequest,
}: SearchBannerProps): ReactElement => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>(search);
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
                <SearchInput
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  placeholder={"What do you want to watch?"}
                />
                <SearchButton onClick={() => setMoviesSearch(searchValue)}>
                  Search
                </SearchButton>
              </SearchInputWrapper>
            </SearchContent>
          </SearchBannerMiddle>
        </SearchContentWrapper>
      </SearchWrapper>
      {isModalOpened && (
        <AddMovie
          isLoading={isLoading}
          error={error}
          successMsg={successMsg}
          addMovie={addMovieRequest}
          onClose={() => setIsModalOpened(false)}
          isShowed={isModalOpened}
        />
      )}
    </>
  );
};
