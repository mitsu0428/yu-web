import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { FaGithubAlt, FaLinkedin, FaInstagram, FaLinux } from "react-icons/fa";

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
          <CardContainer>
            <BasicTitle>mi2</BasicTitle>
            <BasicText>#information</BasicText>
          </CardContainer>
          <BasicText>Webサイト/小規模なの作れます</BasicText>
          <BasicText>SNS運用/知り合い紹介できます</BasicText>
          <MyInformation>
            <BasicLink
              href="https://www.instagram.com/user__mi2/?hl=ja"
              target="_blank"
            >
              <FaInstagram size={30} color={"#595959"} />
            </BasicLink>
            <BasicLink
              href="https://www.linkedin.com/in/mitsuhiro-okada?original_referer="
              target="_blank"
            >
              <FaLinkedin size={30} color={"#595959"} />
            </BasicLink>
            <BasicLink href="https://github.com/mitsu0428" target="_blank">
              <FaGithubAlt size={30} color={"#595959"} />
            </BasicLink>
          </MyInformation>
        </BasicContainer>
        <BasicHr />
        <BasicContainer>
          <CardContainer>
            <BasicSubTitle>Webサイト</BasicSubTitle>
            <BasicText>#portfolio</BasicText>
          </CardContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://sorette.jp" target="_blank">
                sorette
                <FaLinux size={80} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://csvhikakun.com" target="_blank">
                csvひかくん
                <FaLinux size={80} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://www.cosmictheta.space" target="_blank">
                Cosmittheta
                <FaLinux size={80} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://pharcyde.tokyo" target="_blank">
                Pharcyde
                <FaLinux size={80} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink href="https://kajikazi.jp" target="_blank">
                Kajikazi
                <FaLinux size={80} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
        </BasicContainer>
        <BasicHr />
        <BasicContainer>
          <CardContainer>
            <BasicSubTitle>Instagram/SNS</BasicSubTitle>
            <BasicText>#media</BasicText>
          </CardContainer>
          <CardContainer>
            <BasicButton>
              <BasicLink
                href="https://www.instagram.com/kagurazaka_map/?hl=ja"
                target="_blank"
              >
                神楽坂マップ
                <FaLinux size={80} color={"#595959"} />
              </BasicLink>
            </BasicButton>
          </CardContainer>
        </BasicContainer>
      </main>

      <BasicFooter>© 2022 mitsuhiro okada</BasicFooter>
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

const BasicHr = styled.hr`
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

const BasicFooter = styled.footer`
  width: 100%;
  height: 100px;
  color: #595959;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MyInformation = styled.span`
  width: 100%;
  max-width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
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
