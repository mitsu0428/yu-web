import React from "react";
import styled from "styled-components";
import * as SeoSettings from "../libs/SeoSettings";
import * as Headings from "../layout/Headings";
import * as Footer from "../layout/Footer";
import * as TitleWrapper from "../ui/TitleWrapper";
import * as Text from "../ui/Text/DefaultText";
import * as CenterText from "../ui/Text/CenterText";
import * as YuTopPage from "./YuTopPage";
import * as WebAchievements from "./WebAchievements";
import * as BrandingAchievements from "./BrandingAchievements";

export const Component = () => {
  const newsTexts = [
    "2021.08.01 『Cha Cha TOKYO』撮影会",
    "2021.09.05 『G.I.Ps』サポート開始",
    "2023.03.24 『bar kaze』サポート開始",
    "2023.03.17 結う -web 開業",
  ];

  return (
    <Main>
      <SeoSettings.Component />
      <Headings.Component />

      {/* <YuTopPage.Component /> */}

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
