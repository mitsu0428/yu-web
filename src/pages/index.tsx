import React from "react";
import styled from "styled-components";
import HeaderComponents from "./components/layout/HeaderComponents";
import FooterComponents from "./components/layout/FooterComponents";
import Button from "./components/ui/Button";
import TitleContainer from "./components/elements/TitleContainer";
import FrontDescription from "./components/layout/FrontDescription";
import SnsArea from "./components/page/SnsArea";

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
          explainText="Web領域"
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
              title="比較ちゃん"
              description="比較ちゃん"
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
              image_path="/images/kagurazaka_map.png"
              image_height={200}
            ></Button>
          </CardContainer>
        </Container>
        <TitleContainer
          subtitle="Achievements"
          explainText="Coming soon..."
        />
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
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  padding: 16px;
  transition: box-shadow 0.3s ease-in-out;
  width: 75%;

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
