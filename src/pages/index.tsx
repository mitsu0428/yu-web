import React from "react";
import styled from "styled-components";
import FooterComponents from "./components/layout/FooterComponents";
import FrontDescription from "./components/layout/FrontDescription";
import Hamburger from "./components/ui/Hamburger";
import Button from "./components/ui/Button";
import TitleContainer from "./components/elements/TitleContainer";
import SnsArea from "./components/page/SnsArea";
import SeoSettings from "./components/libs/SeoSettings";

const Home = () => {
  return (
    <Main>
      <SeoSettings />
      <Hamburger />
      <FrontDescription />
      <Hr />
      <SnsArea />
      <Hr />
      <TitleContainer
        subtitle="# Front-end developer"
        explainText=" Web制作, デザイン, フロントエンド開発"
      />
      <Hr />
      <TitleContainer
        subtitle="# Social Media Marketing"
        explainText="撮影, デザイン, ブランディング支援"
      />
      <FooterComponents />
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
