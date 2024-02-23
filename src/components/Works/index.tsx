import React from "react";
import styled from "styled-components";
import * as Headtag from "../../ui/HeadTag";
import * as SlideInFromLeft from "../SlideInFromLeft";
import * as CustomFont from "../../styles/NextFont";

export const Component = () => {
  return (
    <Wrap>
      <SlideInFromLeft.Component>
        <Headtag.H2 className={CustomFont.Font.ZenKurenaido.className}>
          Works
        </Headtag.H2>
      </SlideInFromLeft.Component>
    </Wrap>
  );
};

// memo: Headerの高さに合わせてTOPを調整する
const Wrap = styled.div`
  width: 100%;
  margin: 32px 0;
  line-height: 2;
  letter-spacing: 0.1em;
  padding: 32px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
