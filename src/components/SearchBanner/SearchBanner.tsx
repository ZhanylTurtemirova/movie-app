import React, { ReactElement, FC, useState, useEffect } from "react";
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
import { useHistory } from "react-router-dom";

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
  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const history = useHistory();

  const searchClickHandler = (e: any) => {
    e.preventDefault();
    setMoviesSearch(searchValue);
  };

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
                    searchInputHandler(e);
                  }}
                  placeholder={"What do you want to watch?"}
                />
                <SearchButton onClick={(e) => searchClickHandler(e)}>
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
