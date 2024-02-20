import React from "react";
import styled from "styled-components";

import * as SeoSettings from "../lib/SeoSettings";

import * as Header from "./Header";
import * as Footer from "./Footer";

import * as LandingView from "./LandingView";
import * as Concept from "./Concept";
import * as Works from "./Works";
import * as ContactPage from "./ContactForm";

export const Component = () => {
  return (
    <Main>
      <SeoSettings.Component />

      <Header.Component />
      <LandingView.Component />
      <Concept.Component />
      <Works.Component />
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
