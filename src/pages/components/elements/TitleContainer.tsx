import React from "react";
import styled from "styled-components";

type Props = {
  subtitle: string;
  explainText: string;
};

function TitleContainer({ subtitle, explainText }: Props) {
  return (
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <ExplainText>{explainText}</ExplainText>
    </Container>
  );
}

export default TitleContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
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
