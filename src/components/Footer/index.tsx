import React from "react";
import styled from "styled-components";

import * as SNS from "../SNS";

import font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Footer className={font.roboto.className}>
      <SNS.Component />
      (c) 2023 YU WEB, All Right Resereved
    </Footer>
  );
};

const Footer = styled.footer`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  text-align: center;
`;
