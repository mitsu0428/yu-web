import React from "react";
import styled from "styled-components";
import * as Instagram from "../../ui/icons/IconsInstagram";
import * as Twitter from "../../ui/icons/IconsTwitter";
import * as Linkedin from "../../ui/icons/IconsLinkedin";

export const Component = () => {
  return (
    <Container>
      <Instagram.Component />
      <Linkedin.Component />
      <Twitter.Component />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  overflow: hidden;
`;
