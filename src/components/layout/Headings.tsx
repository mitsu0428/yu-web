import React from "react";
import styled, { keyframes } from "styled-components";
import * as Logo from "../elements/Logo";
import font from "../../styles/NextFont";

export const Component = () => {
  return (
    <>
      <TitleContainer>
        <Logo.Component />
        <Title className={font.notoSansJP700.className}>結う -web</Title>
        <ExplainText className={font.notoSansJP400.className}>
          寄り添いを大切にするWebブランディングのパートナー
        </ExplainText>
        <VerticalText className={font.roboto.className}>
          Front-end developer & Social Media Marketing
        </VerticalText>
      </TitleContainer>
      <SlideContainer>
        <SlideText className={font.roboto.className}>
          - mitsuhiro okada, front-end developer, Social Media Marketing &
          branding, #photographer, #design, #web, since 2021 - mitsuhiro okada,
          front-end developer, Social Media Marketing & branding, #photographer,
          #design, #web, since 2021
        </SlideText>
      </SlideContainer>
    </>
  );
};

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const slide = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const SlideContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SlideText = styled.h2`
  margin-top: 32px;
  white-space: nowrap;
  animation: ${slide} 15s linear infinite;
  @media (max-width: 768px) {
    animation: ${slide} 10s linear infinite;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 1200;
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const VerticalText = styled.h2`
  position: absolute;
  top: 0;
  right: 0;
  text-shadow: 0 0 7px #fff;
  margin-top: 32px;
  margin-right: 32px;
  writing-mode: vertical-lr;
  text-align: center;
  font-size: 36px;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ExplainText = styled.p`
  color: #fff;
  margin-left: 32px;
  font-weight: 800;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
