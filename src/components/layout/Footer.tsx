import React from "react";
import styled from "styled-components";
import * as SNS from "../features/SNS";
import LoadingIndicator from "../ui/icons/LoadingIcon";
import font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Footer className={font.roboto.className}>
      <LoadingIndicator />
      (c) 2023 YU WEB, All Right Resereved
      <SNS.Component />
    </Footer>
  );
};

const Footer = styled.footer`
  width: 100%;
  height: 200px;
  color: #fff;
  text-shadow: 0 0 7px #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 16px;
`;
