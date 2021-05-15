import React, { FC } from "react";

import { Wrapper, PageImg, PageTitle } from "./NotFoundPage.style";
import Logo from "../Logo";
import notFound from "../../assets/notFound.png";
import Footer from "../Footer";
import Button from "../Button";
import { useHistory } from "react-router-dom";

const NotFoundPage: FC = (): React.ReactElement => {
  let history = useHistory();

  return (
    <Wrapper>
      <Logo />
      <PageTitle>Page Not Found</PageTitle>
      <PageImg src={notFound} />
      <Button text="Go back" onClick={() => history.push("/")} />
      <Footer />
    </Wrapper>
  );
};

export default NotFoundPage;
