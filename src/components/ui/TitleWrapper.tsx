import React from "react";
import styled from "styled-components";
import font from "../../styles/NextFont";

type Props = {
  subtitle: string;
  explainText?: string;
};

export const Component = ({ subtitle, explainText }: Props) => {
  return (
    <Container>
      <Subtitle className={font.roboto.className}>{subtitle}</Subtitle>
      {explainText && (
        <ExplainText className={font.notoSansJP400.className}>
          {explainText}
        </ExplainText>
      )}
      <Hr />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 8px;
  padding: 8px;
`;

const Subtitle = styled.h2`
  color: #fff;
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

const Hr = styled.hr`
  border-width: 0 0 0.5px;
  border-image: linear-gradient(
      90deg,
      hsla(0, 0%, 35%, 0),
      hsla(0, 0%, 35%, 0.5) 15%,
      hsla(0, 0%, 35%, 0) 35%
    )
    0 0 100%;
  border-style: solid;
`;
