import React from "react";
import styled from "styled-components";
import * as Achievements from "../ui/Achievement";

export const Component = () => {
  return (
    <Wrapper>
      <Achievements.Component
        title="bar kaze -円山町"
        explainText="bar, restaurant"
        imagePath="/achievements/barkaze.jpg"
      />
      <Achievements.Component
        title="茶々-ChaCha TOKYO-"
        explainText="restaurant, cafe"
        imagePath="/achievements/chachatokyo.jpg"
      />
      <Achievements.Component
        title="zin international"
        explainText="fashion, material"
        imagePath="/achievements/zininternational.jpg"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;
