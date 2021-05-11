import React, { FC } from "react";

import { Wrapper, PageImg, PageTitle } from "./NotFoundPage.style";
import Logo from "../Logo";
import notFound from "../../assets/notFound.png";
import Footer from "../Footer";
import Button from "../Button";

const NotFoundPage: FC = (): React.ReactElement => (
  <Wrapper>
    <Logo />
    <PageTitle>Page Not Found</PageTitle>
    <PageImg src={notFound} />
    <Button text="Go back" />
    <Footer />
  </Wrapper>
);
export default NotFoundPage;
