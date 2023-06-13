import Link from "next/link";
import React from "react";
import styled, { keyframes } from "styled-components";

function Achievement() {
  return (
    <>
      <TitleContainer>
        <ExplainContainer>
          <Subtitle>[結う -web] bar kaze</Subtitle>
          <StyledUrl href="https://yu-web.jp/posts/bar-kaze-projects">
            ▶︎ 記事はこちら
          </StyledUrl>
        </ExplainContainer>
      </TitleContainer>
    </>
  );
}

export default Achievement;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const ExplainContainer = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
`;

const Subtitle = styled.h2`
  color: #fff;
  text-shadow: 0 0 7px #fff;
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

const StyledUrl = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  padding: 16px;
`;
