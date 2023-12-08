import React from "react";
import styled from "styled-components";
import * as Achievements from "../ui/Achievement";

export const Component = () => {
  return (
    <Wrapper>
      <Achievements.Component
        title="Pharcyde"
        explainText="bar, restaurant"
        imagePath="/achievements/pharcyde.mov"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 26px;
  line-height: 1.5;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;
