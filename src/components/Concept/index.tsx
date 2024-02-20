import React from "react";
import styled from "styled-components";

export const Component = () => {
  return (
    <Wrap>
      <Title>Concept</Title>
    </Wrap>
  );
};

// memo: Headerの高さに合わせてTOPを調整する
const Wrap = styled.div`
  width: calc(100% - 64px);
  margin-top: 100px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
`;
