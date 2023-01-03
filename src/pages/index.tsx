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
        <Container>
          <Card>
            <Title>mi2のページ</Title>
            <Text>Webサイト | LP制作 | SNS運用などご連絡下さい。</Text>
          </Card>
          <SnsArea>
            <URL
              href="https://www.instagram.com/mi2__user/?hl=ja"
              target="_blank"
            >
              <FaInstagram size={30} color={"#595959"} />
            </URL>
            <CustomText>Instagram</CustomText>

            <URL href="https://twitter.com/mi2__user" target="_blank">
              <FaTwitter size={30} color={"#595959"} />
            </URL>
            <CustomText>Twitter</CustomText>
          </SnsArea>
        </Container>
        <Hr />
        <Container>
          <Card>
            <Subtitle>Webサイト | LP制作</Subtitle>
          </Card>
          <Card>
            <Text>Hayato Kajiwara #portfolio</Text>
            <Button>
              <URL href="https://kajikazi.com" target="_blank">
                kajikazi
              </URL>
            </Button>
          </Card>
          <Card>
            <Text>sorette | それって需要あるの?を聞く掲示板</Text>
            <Button>
              <URL href="https://sorette.jp" target="_blank">
                sorette
              </URL>
            </Button>
          </Card>
          <Card>
            <Text>csvひかくん | CSV比較ツール</Text>
            <Button>
              <URL href="https://csvhikakun.com" target="_blank">
                csvひかくん
              </URL>
            </Button>
          </Card>
          {/* <Card>
            <Button>
              <URL href="https://www.cosmictheta.space" target="_blank">
                Cosmittheta
              </URL>
            </Button>
          </Card> */}
          <Card>
            <Text>Pharcyde Menu | Barのメニュー</Text>
            <Button>
              <URL href="https://pharcyde.tokyo" target="_blank">
                Pharcyde
              </URL>
            </Button>
          </Card>
        </Container>
        <Hr />
        <Container>
          <Card>
            <Subtitle>Instagram | SNS運用</Subtitle>
          </Card>
          <Card>
            <Text>kagurazaka_map | 神楽坂エリアのランチ紹介</Text>
            <Button>
              <URL
                href="https://www.instagram.com/kagurazaka_map/?hl=ja"
                target="_blank"
              >
                神楽坂マップ
              </URL>
            </Button>
          </Card>
        </Container>
        <FooterComponents />
      </Main>
    </div>
  );
};

export default Home;

const Main = styled.main``;

const Title = styled.h1`
  color: #595959;
  text-align: left;
  font-size: 32px;
  margin-top: 16px;
`;

const Subtitle = styled.h2`
  color: #595959;
  text-align: left;
  font-size: 24px;
  margin-top: 16px;
`;

const Text = styled.p`
  color: #595959;
  text-align: left;
  font-size: 16px;
`;

const CustomText = styled.p`
  color: #595959;
  text-align: left;
  font-size: 16px;
  margin-top: 16px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 16px;
`;

const Button = styled.button`
  margin-top: 8px;
  width: 200px;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #000;
    }
  }
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
  justify-content: left  align-items: center;
  flex-direction: row;
  margin-top: 16px;
  text-align: center;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 16px;
  overflow: hidden;
  margin-top: 16px;
  @media screen and (max-width: 480px) {
    /* 画面サイズが480まではここを読み込む */
    width: 350px;
  }
  @media screen and (min-width: 481px) and (max-width: 1023px) {
    /* 画面サイズが481pxから1023pxまではここを読み込む */
    width: 400px;
  }
  @media screen and (min-width: 1024px) {
    /* 画面サイズが1024pxからはここを読み込む */
    width: 450px;
  }
`;
