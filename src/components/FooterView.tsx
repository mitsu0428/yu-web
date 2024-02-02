import React from "react";
import styled from "styled-components";
import LoadingIndicator from "../ui/icons/LoadingIcon";
import font from "../styles/NextFont";

export const Component = () => {
  return (
    <Footer className={font.roboto.className}>
      <LoadingIndicator />
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
  text-align: center;
`;
