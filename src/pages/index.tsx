import React from "react";
import styled from "styled-components";
import * as SeoSettings from "../components/libs/SeoSettings";
import * as Headings from "../components/layout/Headings";
import * as Footer from "../components/layout/Footer";
import * as Menu from "../components/ui/Menu";

import Button from "../components/ui/Button";
import * as TitleWrapper from "../components/elements/TitleWrapper";
import SnsArea from "../components/page/SnsArea";

const Home = () => {
  return (
    <Main>
      <SeoSettings.Component />
      <Menu.Component />
      <Headings.Component />
      <Hr />

      <TitleWrapper.Component
        subtitle="# Front-end developer"
        explainText=" Web制作, デザイン, フロントエンド開発"
      />

      <Hr />

      <TitleWrapper.Component
        subtitle="# Social Media Marketing"
        explainText="撮影, デザイン, ブランディング支援"
      />

      <SnsArea />
      <Hr />
      <Footer.Component />
    </Main>
  );
};

export default Home;

const Main = styled.main`
  padding: 16px;
`;

const Hr = styled.hr`
  margin-top: 16px;
  border-width: 0 0 1px;
  border-image: linear-gradient(
      90deg,
      hsla(0, 0%, 35%, 0),
      hsla(0, 0%, 35%, 0.5) 50%,
      hsla(0, 0%, 35%, 0) 100%
    )
    0 0 100%;
  border-style: solid;
`;
