import React from "react";
import styled from "styled-components";

export const Component = () => {
  return (
    <Wrapper>
      <Title>Pharcyde</Title>
      <Video
        src="/achievements/pharcyde.mov"
        autoPlay
        muted
        loop
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
  flex-direction: row;
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

const Video = styled.video`
  width: 200px;
  height: 100%;
  object-fit: cover;
  margin-left: 32px;
`;
