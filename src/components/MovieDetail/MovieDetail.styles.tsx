import styled from "styled-components";
import BgPoster from "../../assets/posters-bg.jpg";

export const Wrapper = styled.div``;
export const BgWrapper = styled.div`
  background-image: url(${BgPoster});
  width: 100%;
  height: 65vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);
  -webkit-filter: blur(5px);
`;

export const MovieContent = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65vh;
  z-index: 2;
`;

export const TopWrapper = styled.div`
  width: 90%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
`;

export const SearchWrapper = styled.div`
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const MovieWrapper = styled.span`
  width: 90%;
  margin: 30px auto;
  display: flex;
`;

export const MoviePoster = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  margin-right: 50px;
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieTilte = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
`;

export const Title = styled.span`
  font-size: 48px;
  padding-bottom: 10px;
  color: var(--mainWhite);
  margin-right: 20px;
`;

export const Rate = styled.div`
  border-radius: 50%;
  padding: 16px 25px;
  border: 1px solid var(--mainWhite);
  text-align: center;
  color: green;
  font-size: 24px;
`;

export const MovieSubtitle = styled.span`
  font-size: 16px;
  padding-bottom: 10px;
  color: var(--mainWhite);
  font-weight: 300;
`;

export const MovieDateTime = styled.div`
  display: flex;
  color: var(--mainRed);
  font-size: 24px;
  margin-bottom: 25px;
`;

export const Date = styled.div`
  padding-right: 15px;
`;

export const Time = styled.div``;
export const MovieOverview = styled.div`
  font-weight: 500;
  max-width: 700px;
`;
