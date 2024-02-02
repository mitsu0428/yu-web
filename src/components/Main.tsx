import React from "react";
import styled from "styled-components";
import * as SeoSettings from "../lib/SeoSettings";
import * as Headings from "../layout/Headings";
import * as TopView from "../components/TopView";
import * as AboutView from "../components/AboutView";
import * as WorksView from "../components/WorksView";
import * as FooterView from "./FooterView";

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
      <TopView.Component />
      <AboutView.Component />
      <WorksView.Component />
      <FooterView.Component />
    </Main>
  );
};

// memo: 空間的な広さを感じさせるため
const Main = styled.main`
  padding: 64px;
  @media (max-width: 768px) {
    padding: 32px;
  }
`;
