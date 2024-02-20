import React from "react";
import styled from "styled-components";
import * as Headtag from "../../ui/HeadTag";

export const Component = () => {
  return (
    <Wrap>
      <Headtag.H2>ランディングView</Headtag.H2>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  margin-top: 100px;
`;
