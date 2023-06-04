import React from "react";
import styled from "styled-components";
import HeaderComponents from "./components/layout/HeaderComponents";
import FooterComponents from "./components/layout/FooterComponents";
import Button from "./components/ui/Button";
import TitleContainer from "./components/elements/TitleContainer";
import FrontDescription from "./components/layout/FrontDescription";
import SnsArea from "./components/page/SnsArea";
import Achievement from "./components/layout/Achievement";
import Hamburger from "./components/ui/Hamburger";

const Home = () => {
  return (
    <div>
      <HeaderComponents />
      <Hamburger />
      <Main>
        <FrontDescription />
        <Hr />
        <SnsArea />
        <Hr />
        <TitleContainer
          subtitle="Front-end developer"
          explainText="Web領域"
        />
        <Container>
          <CardContainer>
            <Button
              title="sorette"
              description="sorette"
              serviceDescription="あなたの流行りを、みんなの流行りに。"
              url="https://sorette.jp"
              image_path="/images/sorette.png"
              image_height={200}
            />
            <Button
              title="bar-kaze"
              description="bar kaze -円山町"
              serviceDescription="渋谷, 円山町にあるbar kazeの公式サイト"
              url="http://bar-kaze.net"
              image_path="/images/kaze.png"
              image_height={200}
            />
            <Button
              title="zin-international"
              description="zin-international"
              serviceDescription="zin-internationalの公式サイト"
              url="https://mitsuhiro-okada.com"
              image_path="/images/gopher.png"
              image_height={200}
            />
            <Button
              title="Hayato Kajiwara"
              description="Hayato Kajiwara Portfolio"
              serviceDescription="Hayaot Kajiwara Portfolio"
              url="https://kajikazi.com"
              image_path="/images/kajikazi.png"
              image_height={200}
            />
            <Button
              title="比較ちゃん"
              description="比較ちゃん"
              serviceDescription="様々な比較ができるプチツール"
              url="https://hikakuchan.jp/"
              image_path="/images/hikakuchan.png"
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
        <TitleContainer
          subtitle="Social Media Marketing"
          explainText="SNS領域"
        />
        <Container>
          <CardContainer>
            <Button
              title="神楽坂マップ"
              url="https://www.instagram.com/kagurazaka_map/?hl=ja"
              description="神楽坂マップ"
              serviceDescription="神楽坂のお店を紹介するインスタグラム"
              image_path="/images/kagurazaka_map.png"
              image_height={200}
            ></Button>
          </CardContainer>
        </Container>
        <TitleContainer
          subtitle="Achievements"
          explainText="実績"
        />
        <Achievement />
        <FooterComponents />
      </Main>
    </div>
  );
};

export default Home;

const Main = styled.main`
  padding: 16px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const CardContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  padding: 16px;
  transition: box-shadow 0.3s ease-in-out;

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
