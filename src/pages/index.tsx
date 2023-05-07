import React from "react";
import styled from "styled-components";
import HeaderComponents from "./components/layout/HeaderComponents";
import FooterComponents from "./components/layout/FooterComponents";
import Button from "./components/ui/Button";
import TitleContainer from "./components/elements/TitleContainer";
import FrontDescription from "./components/layout/FrontDescription";
import SnsArea from "./components/page/SnsArea";
import Achievements from "./components/page/Achievements";

const Home = () => {
  return (
    <div>
      <HeaderComponents />
      <Main>
        <FrontDescription />
        <Hr />
        <SnsArea />
        <Hr />
        <TitleContainer
          subtitle="Front-end developer"
          explainText="- Web領域"
        />
        <Container>
          <CardContainer>
            <Button
              title="sorette"
              description="sorette"
              url="https://sorette.jp"
              image_path="/images/sorette.png"
              image_height={200}
            />
            <Button
              title="bar-kaze"
              description="bar kaze -円山町"
              url="http://bar-kaze.net"
              image_path="/images/kaze.png"
              image_height={200}
            />
            <Button
              title="zin-international"
              description="zin-international"
              url="https://mitsuhiro-okada.com"
              image_path="/images/gopher.png"
              image_height={200}
            />
            <Button
              title="Hayato Kajiwara"
              description="Hayato Kajiwara Portfolio"
              url="https://kajikazi.com"
              image_path="/images/kajikazi.png"
              image_height={200}
            />
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
        <TitleContainer
          subtitle="Social Media Marketing"
          explainText="- SNS領域"
        />
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
        <Achievements />
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

const CardContainer = styled.div`
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  margin-top: 32px;
  padding: 24px;
  transition: box-shadow 0.3s ease-in-out;
  width: 75%;
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
