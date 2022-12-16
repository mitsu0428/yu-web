import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import {
  FaGithubAlt,
  FaLinkedin,
  FaInstagram,
  FaLinux,
  FaMailBulk,
  FaChalkboardTeacher,
  FaUserFriends,
} from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Okada Mitsuhiroのポートフォリオサイト</title>
        <meta
          name="description"
          content="Okada Mitsuhiroのポートフォリオサイト"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BasicContainer>
          <TitleContainer>
            <BasicTitle>Okada Mitsuhiro</BasicTitle>
            <BasicSubTitle>Portfolio</BasicSubTitle>
            <BasicText>Instagram若しくは、LinkedinでDM</BasicText>
            <FaMailBulk size={30} color={"#595959"} />
            <BasicText>Webサイト/小規模なの作れます💭</BasicText>
            <FaChalkboardTeacher size={30} color={"#595959"} />
            <BasicText>SNS運用/知り合い紹介できます💭</BasicText>
            <FaUserFriends size={30} color={"#595959"} />
          </TitleContainer>
        </BasicContainer>
        <BasicContainer>
          <BasicSubTitle>My Information</BasicSubTitle>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://www.instagram.com/user__mi2/?hl=ja">
                Instagram
                <FaInstagram size={100} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://www.linkedin.com/in/mitsuhiro-okada?original_referer=">
                LinkedIn <FaLinkedin size={100} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://github.com/mitsu0428">
                GitHub <FaGithubAlt size={100} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
        </BasicContainer>
        <BasicContainer>
          <BasicSubTitle>Webサイト</BasicSubTitle>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://sorette.jp">
                sorette
                <FaLinux size={100} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://csvhikakun.com">
                csvひかくん
                <FaLinux size={100} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://www.cosmictheta.space">
                Cosmittheta
                <FaLinux size={100} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://pharcyde.tokyo">
                Pharcyde
                <FaLinux size={100} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://kajikazi.jp">
                Kajikazi
                <FaLinux size={100} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
        </BasicContainer>
        <BasicContainer>
          <TitleContainer>
            <BasicSubTitle>Instagram/SNS メディア</BasicSubTitle>
            <BasicText>神楽坂マップ(kagurazaka_map)</BasicText>
          </TitleContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://www.instagram.com/kagurazaka_map/?hl=ja">
                神楽坂マップ(kagurazaka_map)
                <FaLinux size={100} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
        </BasicContainer>
      </main>

      <footer></footer>
    </div>
  );
}

const BasicTitle = styled.h1`
  color: #595959;
`;

const BasicSubTitle = styled.h2`
  color: #595959;
`;

const BasicText = styled.p`
  color: #595959;
`;

const BasicContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const BasicButton = styled.button`
  width: 100%;
  min-width: 200px;
  height: 100%;
  border: none;
  border-radius: 8px;
  background-color: #595959;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #fff;
    color: #595959;
  }
`;

const BasicLink = styled.a`
  width: 100%;
`;

const TitleContainer = styled.div`
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 100%;
  margin: 10px;
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;
