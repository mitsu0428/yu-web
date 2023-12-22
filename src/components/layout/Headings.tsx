import React from "react";
import styled, { keyframes } from "styled-components";
import * as Logo from "../ui/Logo";
import font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleSubWrapper>
          <Logo.Component />
          <Title className={font.notoSansJP700.className}>結う -web</Title>
        </TitleSubWrapper>
        <VerticalText className={font.roboto.className}>
          Front-End & Web & Branding
        </VerticalText>
      </TitleWrapper>
      <Slider>
        <SlideText className={font.roboto.className}>
          Web & Branding & Social Media Marketing, #photographer, #design, #web,
          since 2021 - mitsuhiro okada, front-end developer, Social Media
          Marketing & branding, #photographer, #design, #web, since 2021
        </SlideText>
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleSubWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
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

const Slider = styled.div`
  width: 100%;
  overflow: hidden;
`;

const SlideText = styled.h2`
  white-space: nowrap;
  animation: ${slide} 15s linear infinite;
  @media (max-width: 768px) {
    animation: ${slide} 10s linear infinite;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 1200;
  margin-right: 64px;
  @media (max-width: 768px) {
    font-size: 22px;
    margin-right: 0;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const VerticalText = styled.h2`
  position: absolute;
  top: 64px;
  right: 0;
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
