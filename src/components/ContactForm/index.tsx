import React from "react";
import styled from "styled-components";
import * as Headtag from "../../ui/HeadTag";
import * as SlideInFromLeft from "../SlideInFromLeft";

export const Component = () => {
  return (
    <Wrap>
      <SlideInFromLeft.Component>
        <Headtag.H2>お問い合わせ</Headtag.H2>
      </SlideInFromLeft.Component>
    </Wrap>
  );
};

// memo: Headerの高さに合わせてTOPを調整する
const Wrap = styled.div`
  width: 100%;
  margin: 32px 0;
  padding: 32px;
  line-height: 2;
  letter-spacing: 0.1em;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
