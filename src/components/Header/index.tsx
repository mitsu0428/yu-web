import React from "react";
import styled, { keyframes } from "styled-components";
import * as Logo from "../Logo";
import font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Logo.Component />

        <VerticalText className={font.roboto.className}>
          Web & Branding & Marketing
        </VerticalText>
      </TitleWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  padding: 16px;
`;

const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const VerticalText = styled.h2`
  position: absolute;
  top: 100px;
  right: 0;
  writing-mode: vertical-lr;
  font-size: 36px;
  white-space: nowrap;
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
