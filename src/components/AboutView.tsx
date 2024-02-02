import React from "react";
import styled from "styled-components";
import * as Consepts from "../domain/Concepts";

export const Component = () => {
  return (
    <Wrapper>
      <ViewArea></ViewArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 64px;
  @media (max-width: 768px) {
    padding: 64px 4px;
  }
`;

const ViewArea = styled.div`
  width: 100%;
  height: 650px;
  background-color: #fff;
  border-radius: 4px;
  padding: 32px;
`;

const SmallText = styled.p`
  font-size: 12px;
  text-align: left;
  margin-top: 4px;
`;
