import styled from "styled-components";
import BgPoster from "../../../assets/posters-bg.jpg";

export const SearchWrapper = styled.div``;
export const SearchContentWrapper = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  max-height: 800px;
  z-index: 2;
`;
export const SearchBgWrapper = styled.div`
  background-image: url(${BgPoster});
  width: 100%;
  height: 50vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
  -webkit-filter: blur(5px);
`;
export const AddButton = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  color: var(--mainRed);
  cursor: pointer;
`;
export const SearchContent = styled.div`
  width: 1000px;
  margin: auto;
`;
export const SearchTitle = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 30px;
`;
export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const SearchInput = styled.input`
  border: none;
  background: var(--mainGrey);
  padding: 15px;
  border-radius: 4px;
  width: 100%;
  margin-right: 20px;
  color: var(--mainWhite);
  &:: placeholder {
    font-size: 20px;
  }
`;
export const SearchButton = styled.div`
  background: var(--mainRed);
  text-transform: uppercase;
  border-radius: 4px;
  padding: 15px 30px;
  font-weight: 300;
  cursor: pointer;
`;
export const SearchBannerTop = styled.div`
  width: 90%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
`;
export const SearchBannerMiddle = styled.div`
  display: flex;
  align-items: center;
`;
