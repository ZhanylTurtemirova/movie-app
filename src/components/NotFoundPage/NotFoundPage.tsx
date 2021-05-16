import React, { FC } from "react";

import {
  ContentWrapper,
  Wrapper,
  PageImg,
  PageTitle,
  StyledButton,
} from "./NotFoundPage.style";
import Logo from "../Logo";
import notFound from "../../assets/notFound.png";
import Footer from "../Footer";
import { useHistory } from "react-router-dom";

const NotFoundPage: FC = (): React.ReactElement => {
  let history = useHistory();

  return (
    <Wrapper>
      <Logo />
      <ContentWrapper>
        <PageTitle>Page Not Found</PageTitle>
        <PageImg src={notFound} />
        <StyledButton onClick={() => history.push("/")}>Go back</StyledButton>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default NotFoundPage;
