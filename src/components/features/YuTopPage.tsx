import React from "react";
import Image from "next/image";
import styled from "styled-components";
import font from "../../styles/NextFont";
import * as IG from "./ImageGallery";

export const Component = () => {
  const pexel = (id: number) =>
    `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`;
  const images = [
    // Front
    { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
    // Back
    { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
    { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
    // Left
    {
      position: [-1.75, 0, 0.25],
      rotation: [0, Math.PI / 2.5, 0],
      url: pexel(327482),
    },
    {
      position: [-2.15, 0, 1.5],
      rotation: [0, Math.PI / 2.5, 0],
      url: pexel(325185),
    },
    {
      position: [-2, 0, 2.75],
      rotation: [0, Math.PI / 2.5, 0],
      url: pexel(358574),
    },
    // Right
    {
      position: [1.75, 0, 0.25],
      rotation: [0, -Math.PI / 2.5, 0],
      url: pexel(227675),
    },
    {
      position: [2.15, 0, 1.5],
      rotation: [0, -Math.PI / 2.5, 0],
      url: pexel(911738),
    },
    {
      position: [2, 0, 2.75],
      rotation: [0, -Math.PI / 2.5, 0],
      url: pexel(1738986),
    },
  ];
  return (
    <Container>
      <TextWrapper>
        <Text className={font.roboto.className}>寄り添いを大切にする</Text>
        <Text className={font.roboto.className}>
          Webブランディングのパートナー
        </Text>
      </TextWrapper>
      <IG.App images={images} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  gap: 8px;
  @media (max-width: 768px) {
    display: none;
  }
`;
