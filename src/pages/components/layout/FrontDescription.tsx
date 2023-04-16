import React from "react";
import styled from "styled-components";

function FrontDescription() {
  return (
    <>
      <TitleContainer>
        <Title>Mitsuhiro Okada</Title>
        <Subtitle>mi2のページ</Subtitle>
      </TitleContainer>
      <TitleContainer>
        <VerticalText>
          Front-end developer & Social Media Marketing
        </VerticalText>
        <ExplainText>結う -webにて、</ExplainText>
        <ExplainText>・WebサイトやLPの作成</ExplainText>
        <ExplainText>・SNSの運用代行</ExplainText>
        <ExplainText>・店舗のトータルブランディング</ExplainText>
        <ExplainText>などをしています。</ExplainText>
      </TitleContainer>
    </>
  );
}

export default FrontDescription;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

const Title = styled.h1`
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff;
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
  text-shadow: 0 0 7px #fff, 0 0 10px #fff;
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
  text-shadow: 0 0 7px #fff, 0 0 10px #fff;
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
