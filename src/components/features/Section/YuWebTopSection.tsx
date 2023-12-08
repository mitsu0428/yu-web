import React from "react";
import styled from "styled-components";
import YuWebRightMenu from "../Layout/YuWebRightMenu";
import YuWebLeftMenu from "../Layout/YuWebLeftMenu";

function TopSection() {
  return (
    <Wrapper>
      <CenteredContainer>
        <YuWebRightMenu />
        <YuWebLeftMenu />
      </CenteredContainer>
    </Wrapper>
  );
}

export default TopSection;

const Wrapper = styled.div`
  height: 100vh;
`;

const CenteredContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  wdith: 100%;
  height: 100%;
`;
