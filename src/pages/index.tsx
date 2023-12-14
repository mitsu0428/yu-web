import React from "react";
import styled from "styled-components";
import * as SeoSettings from "../components/libs/SeoSettings";
import * as Headings from "../components/layout/Headings";
import * as Footer from "../components/layout/Footer";
import * as TitleWrapper from "../components/ui/TitleWrapper";
import * as Text from "../components/ui/Text/DefaultText";
import * as CenterText from "../components/ui/Text/CenterText";
import * as Menu from "../components/ui/Menu";
import * as YuTopPage from "../components/features/YuTopPage";
import * as WebAchievements from "../components/features/WebAchievements";
import * as BrandingAchievements from "../components/features/BrandingAchievements";

import Button from "../components/ui/Button";

const Home = () => {
  const newsTexts = [
    "2021.10.10 something",
    "2021.10.10 something",
    "2021.10.10 something",
    "2021.10.10 something",
  ];

  return (
    <Main>
      <SeoSettings.Component />
      <Menu.Component />
      <Headings.Component />

      <YuTopPage.Component />

      <TitleWrapper.Component subtitle="# News" />
      <Text.Component texts={newsTexts} />

      <TitleWrapper.Component
        subtitle="# Front-End & Web"
        explainText="Web制作, LP制作, フロントエンド開発"
      />
      <CenterText.Component text="Webサイト/LP制作 領域" />
      <WebAchievements.Component />
      <Hr />

      <TitleWrapper.Component
        subtitle="# Branding"
        explainText="ブランディング支援, デザイン, 撮影"
      />
      <CenterText.Component text="ブランディング 領域" />
      <BrandingAchievements.Component />
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
