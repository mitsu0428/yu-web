import React from "react";
import styled from "styled-components";
import HomeSeoSettings from "./components/libs/HomeSeoSettings";
import FooterComponents from "./components/libs/FooterComponents";
import Button from "./components/ui/Button";
import ImageContainer from "./components/common/ImageContainer";
import IconsInstagram from "./components/ui/icons/IconsInstagram";
import IconsTwitter from "./components/ui/icons/IconsTwitter";
import IconsLinkedin from "./components/ui/icons/IconsLinkedin";

const Home = () => {
  return (
    <div>
      <HomeSeoSettings />
      <Main>
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
          <ExplainText>
            お仕事の依頼は、Instagram又は、Linkedinよりご連絡ください。
          </ExplainText>
        </TitleContainer>
        <Hr />
        <Container>
          <ImageContainer />
          <SnsArea>
            <Container>
              <IconsInstagram />
            </Container>
            <Container>
              <IconsLinkedin />
            </Container>
            <Container>
              <IconsTwitter />
            </Container>
          </SnsArea>
        </Container>
        <Hr />
        <TitleContainer>
          <Subtitle>Front-end developer</Subtitle>
          <ExplainText>- Web領域</ExplainText>
        </TitleContainer>
        <Container>
          <CardContainer>
            <Button
              title="sorette掲示板"
              description="sorette掲示板"
              url="https://sorette.jp"
              image_path="/images/sorette.png"
              image_height={200}
            ></Button>
          </CardContainer>
          <CardContainer>
            <Button
              title="Cosmic Θ"
              description="Cosmic Θ | Cosmic Theta"
              url="https://mitsuhiro-okada.com"
              image_path="/images/cosmic_theta.jpg"
              image_height={200}
            ></Button>
          </CardContainer>
          <CardContainer>
            <Button
              title="zin-international"
              description="zin-international"
              url="https://mitsuhiro-okada.com"
              image_path="/images/gopher.png"
              image_height={200}
            ></Button>
          </CardContainer>
          <CardContainer>
            <Button
              title="Hayato Kajiwara"
              description="Hayato Kajiwara Portfolio"
              url="https://kajikazi.com"
              image_path="/images/kajikazi.png"
              image_height={200}
            ></Button>
          </CardContainer>
          <CardContainer>
            <Button
              title="CSV比較ツール"
              description="CSV比較ツール"
              url="https://csvhikakun.com"
              image_path="/images/csvhikakun.png"
              image_height={200}
            ></Button>
          </CardContainer>
          {/* <CardContainer>
            <Button
              title="Pharcyde Menu"
              url="https://pharcyde.tokyo"
              description="Pharcyde Menu"
              image_path="/images/pharcyde.png"
              image_height={200}
            ></Button>
          </CardContainer> */}
        </Container>
        <Hr />
        <TitleContainer>
          <Subtitle>Social Media Marketing</Subtitle>
          <ExplainText>- SNS領域</ExplainText>
        </TitleContainer>
        <Container>
          <CardContainer>
            <Button
              title="神楽坂マップ"
              url="https://www.instagram.com/kagurazaka_map/?hl=ja"
              description="神楽坂マップ"
              image_path="/images/kagurazaka_map.png"
              image_height={200}
            ></Button>
          </CardContainer>
        </Container>
        <FooterComponents />
      </Main>
    </div>
  );
};

export default Home;

const Main = styled.main`
  padding: 16px;
`;

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

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  margin-top: 32px;
  padding: 24px;
  transition: box-shadow 0.3s ease-in-out;

  width: 300px;
  height: 180px;

  animation-name: slideIn;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.5s;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  & > h3 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  & > p {
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }
`;
