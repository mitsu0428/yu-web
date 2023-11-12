import React from "react";
import styled from "styled-components";
import ImageContainer from "../elements/ImageContainer";
import IconsInstagram from "../ui/icons/IconsInstagram";
import IconsTwitter from "../ui/icons/IconsTwitter";
import IconsLinkedin from "../ui/icons/IconsLinkedin";

function SnsArea() {
  return (
    <Container>
      <ImageContainer />
      <Sns>
        <Container>
          <IconsInstagram />
        </Container>
        <Container>
          <IconsLinkedin />
        </Container>
        <Container>
          <IconsTwitter />
        </Container>
      </Sns>
    </Container>
  );
}

export default SnsArea;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  padding: 8px;
`;

const Sns = styled.span`
  display: flex;
  padding: 16px;
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
  width: 100%;
  min-width: 300px;
`;
