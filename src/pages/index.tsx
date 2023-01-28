import React from "react";
import styled, { keyframes } from "styled-components";
import HomeSeoSettings from "./components/libs/HomeSeoSettings";
import FooterComponents from "./components/libs/FooterComponents";
import Button from "./components/common/Button";
import ImageContainer from "./components/common/ImageContainer";
import InstagramContainer from "./components/common/InstagramContainer";
import TwitterContainer from "./components/common/TwitterContainer";
import LinkedinComtainer from "./components/common/LinkedinComtainer";

const Home = () => {
  return (
    <div>
      <HomeSeoSettings />
      <Main>
        <Title>mi2のページ</Title>
        <TitleContainer>
          <Subtitle>Webサイト | LP制作 | SNS運用</Subtitle>
        </TitleContainer>
        <Container>
          <ImageContainer />
          <SnsArea>
            <Container>
              <LinkedinComtainer />
            </Container>
            <Container>
              <InstagramContainer />
            </Container>
            <Container>
              <TwitterContainer />
            </Container>
          </SnsArea>
        </Container>
        <Hr />
        <TitleContainer>
          <Subtitle>Webサイト | LP制作</Subtitle>
        </TitleContainer>
        <Container>
          <CardContainer delay="0.5s">
            <Button title="Hayato Kajiwara" url="https://kajikazi.com"></Button>
          </CardContainer>
          <CardContainer delay="0.7s">
            <Button title="sorette掲示板" url="https://sorette.jp"></Button>
          </CardContainer>
          <CardContainer delay="0.9s">
            <Button title="CSV比較ツール" url="https://csvhikakun.com"></Button>
          </CardContainer>
          <CardContainer delay="1.1s">
            <Button title="Pharcyde Menu" url="https://pharcyde.tokyo"></Button>
          </CardContainer>
          {/* <CardContainer>
            <CardButton>
              <URL href="https://www.cosmictheta.space" target="_blank">
                Cosmittheta
              </URL>
            </CardButton>
          </CardContainer> */}
        </Container>
        <Hr />
        <TitleContainer>
          <Subtitle>Instagram | SNS運用</Subtitle>
        </TitleContainer>
        <Container>
          <CardContainer delay="1.3s">
            <Button
              title="神楽坂マップ"
              url="https://www.instagram.com/kagurazaka_map/?hl=ja"
            ></Button>
          </CardContainer>
        </Container>
        <FooterComponents />
      </Main>
    </div>
  );
};

export default Home;

const Main = styled.main``;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 32px;
`;

const Title = styled.h1`
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa;
  margin-top: 32px;
  margin-left: 32px;
  font-size: 24px;
  font-weight: 1200;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.h2`
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa;
  margin-top: 32px;
  margin-left: 32px;
  font-size: 22px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
`;

const Hr = styled.hr`
  margin-top: 32px;
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

const SnsArea = styled.span`
  display: flex;
  width: 300px;
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
`;

const CardContainer = styled.div<{ delay?: string }>`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 32px;
  cursor: pointer;
  transition: 1s;

  width: 300px;
  height: 100px;
  &:hover {
    background-color: #f5f5f5;
  }

  animation: slideIn 0.5s ease-in-out;
  animation-delay: ${({ delay }) => delay || "0s"};
  animation-fill-mode: both;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
