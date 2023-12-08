import React from "react";
import styled from "styled-components";
import * as SeoSettings from "../components/libs/SeoSettings";
import * as Headings from "../components/layout/Headings";
import * as Footer from "../components/layout/Footer";
import * as TitleWrapper from "../components/ui/TitleWrapper";
import * as CenterText from "../components/ui/Text/CenterText";
import * as Menu from "../components/ui/Menu";
import * as Achievements from "../components/ui/Achievements";

import Button from "../components/ui/Button";

const Home = () => {
  return (
    <Main>
      <SeoSettings.Component />
      <Menu.Component />
      <Headings.Component />
      <Hr />

      <TitleWrapper.Component
        subtitle="# Front-End & Web"
        explainText="Web制作, LP制作, フロントエンド開発"
      />
      <CenterText.Component text="Web/LP制作 領域" />
      <Hr />

      <TitleWrapper.Component
        subtitle="# Branding"
        explainText="ブランディング支援, デザイン, 撮影"
      />
      <CenterText.Component text="撮影/レタッチ 領域" />
      <Achievements.Component
        title="bar kaze -円山町"
        explainText="SK Building 4F, 1-3 Maruyamacho, Shibuya-ku"
        imagePath="/achievements/barkaze.jpg"
      />
      <Achievements.Component
        title="茶々-ChaCha TOKYO-"
        explainText="西原2-28-4 102, Shibuya, Tokyo 151-0066"
        imagePath="/achievements/chachatokyo.jpg"
      />

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
