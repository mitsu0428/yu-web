import React from "react";
import styled from "styled-components";
import LoadingIndicator from "../ui/icons/LoadingIcon";
import font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Container>
      <Footer className={font.roboto.className}>
        <LoadingIndicator />
        (c) 2023 YU WEB, All Right Resereved
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  color: #fff;
  text-shadow: 0 0 7px #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 16px;
`;
