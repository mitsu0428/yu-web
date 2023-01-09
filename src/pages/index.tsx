import React from "react";
import styled from "styled-components";
import HomeSeoSettings from "./components/HomeSeoSettings";
import FooterComponents from "./components/FooterComponents";
import { FaTwitter, FaInstagram } from "react-icons/fa";

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
          <SnsArea>
            <Container>
              <URL
                href="https://www.instagram.com/mi2__user/?hl=ja"
                target="_blank"
              >
                <FaInstagram size={30} color={"#595959"} />
              </URL>
              <CustomText>Instagram</CustomText>
            </Container>
            <Container>
              <URL href="https://twitter.com/mi2__user" target="_blank">
                <FaTwitter size={30} color={"#595959"} />
              </URL>
              <CustomText>Twitter</CustomText>
            </Container>
          </SnsArea>
        </Container>
        <Hr />
        <TitleContainer>
          <Subtitle>Webサイト | LP制作</Subtitle>
        </TitleContainer>
        <Container>
          <CardContainer>
            <Text>Hayato Kajiwara</Text>
            <CardButton>
              <URL href="https://kajikazi.com" target="_blank">
                kajikazi
              </URL>
            </CardButton>
          </CardContainer>
          <CardContainer>
            <Text>sorette - それって需要あるの?を聞く掲示板</Text>
            <CardButton>
              <URL href="https://sorette.jp" target="_blank">
                sorette
              </URL>
            </CardButton>
          </CardContainer>
          <CardContainer>
            <Text>csvひかくん - CSV比較ツール</Text>
            <CardButton>
              <URL href="https://csvhikakun.com" target="_blank">
                csvひかくん
              </URL>
            </CardButton>
          </CardContainer>
          <CardContainer>
            <Text>Pharcyde Menu - Barのメニュー</Text>
            <CardButton>
              <URL href="https://pharcyde.tokyo" target="_blank">
                Pharcyde
              </URL>
            </CardButton>
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
          <CardContainer>
            <Text>kagurazaka_map | 神楽坂エリアのランチ紹介</Text>
            <CardButton>
              <URL
                href="https://www.instagram.com/kagurazaka_map/?hl=ja"
                target="_blank"
              >
                神楽坂マップ
              </URL>
            </CardButton>
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
  color: #595959;
  margin-top: 32px;
  margin-left: 16px;
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
  color: #595959;
  margin-top: 32px;
  margin-left: 16px;
  font-size: 22px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Text = styled.p`
  color: #595959;
  font-size: 18px;

  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CustomText = styled.p`
  color: #595959;

  font-size: 18px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
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

const URL = styled.a`
  width: 100%;
  color: #595959;
`;

const Hr = styled.hr`
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

const CardContainer = styled.div`
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
`;

const CardButton = styled.button`
  display: none;
  align-self: flex-end;
  width: 100%;
  border-radius: 4px;

  ${CardContainer}:hover & {
    display: block;
  }
`;
