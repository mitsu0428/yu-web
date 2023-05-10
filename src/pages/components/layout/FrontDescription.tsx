import React from "react";
import styled, { keyframes } from "styled-components";

function FrontDescription() {
  return (
    <>
      <TitleContainer>
        <Title>mi2</Title>
      </TitleContainer>
      <TitleContainer>
        <VerticalText>
          Front-end developer & Social Media Marketing
        </VerticalText>
        <ExplainContainer>
          <ExplainText>結う -webにて、</ExplainText>
          <ExplainText>・LPの作成</ExplainText>
          <ExplainText>・Portfolio制作</ExplainText>
          <ExplainText>・SNS運用代行</ExplainText>
          <ExplainText>・店舗ブランディング</ExplainText>
          <ExplainText>などをしています。</ExplainText>
        </ExplainContainer>
      </TitleContainer>
      <SlideContainer>
        <SlideText>
          - mitsuhiro okada, front-end developer, Social Media Marketing &
          branding, #photographer, #design, #web, since 2021 - mitsuhiro okada,
          front-end developer, Social Media Marketing & branding, #photographer,
          #design, #web, since 2021
        </SlideText>
      </SlideContainer>
    </>
  );
}

export default FrontDescription;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Wave = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const ExplainContainer = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #fff;
  animation: ${Wave} 3s ease-in-out infinite;
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
  color: #fff;
  text-shadow: 0 0 7px #fff;
  font-size: 36px;
  font-weight: 1200;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.h2`
  color: #fff;
  text-shadow: 0 0 7px #fff;
  margin-left: 16px;
  font-size: 26px;
  font-weight: 1200;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
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
  font-size: 16px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
