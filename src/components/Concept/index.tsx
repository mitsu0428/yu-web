import React from "react";
import styled from "styled-components";
import * as Headtag from "../../ui/HeadTag";
import * as SlideInFromLeft from "../SlideInFromLeft";

export const Component = () => {
  return (
    <Wrap>
      <SlideInFromLeft.Component>
        <Headtag.H2>コンセプト</Headtag.H2>
      </SlideInFromLeft.Component>
    </Wrap>
  );
};

// memo: Headerの高さに合わせてTOPを調整する
const Wrap = styled.div`
  width: calc(100% - 64px);
  margin: 32px 0;
`;
