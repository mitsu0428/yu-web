import React from "react";
import styled from "styled-components";
import LoadingIndicator from "../ui/icons/LoadingIcon";

function Achievements() {
  return (
    <Container>
      <Subtitle>Achievements</Subtitle>
      <ExplainText>Coming soon...</ExplainText>
    </Container>
  );
}

export default Achievements;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 16px;
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
