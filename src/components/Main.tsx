import React from "react";
import styled from "styled-components";

import * as SeoSettings from "../lib/SeoSettings";

import * as Header from "./Header";
import * as SNS from "./SNS";
import * as Concept from "./Concept";
import * as ContactPage from "./ContactForm";
import * as Footer from "./Footer";

export const Component = () => {
  return (
    <Main>
      <SeoSettings.Component />

      <Header.Component />
      <SNS.Component />
      <Concept.Component />
      <ContactPage.Component />
      <Footer.Component />
    </Main>
  );
};

const Main = styled.main`
  padding: 32px;
  @media (max-width: 768px) {
    padding: 16px;
  }
`;
