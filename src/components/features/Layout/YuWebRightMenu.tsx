import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

const YuWebRightMenu = () => {
  const images = [
    { id: 1, src: "/RightMenu/0-web-design.jpeg", alt: "web design" },
    {
      id: 2,
      src: "/RightMenu/0-graphics-design.jpeg",
      alt: "graphics design",
    },
    { id: 3, src: "/RightMenu/0-branding.jpeg", alt: "branding" },
  ];

  const [imageWidth, setImageWidth] = React.useState(150);
  const [imageHeight, setImageHeight] = React.useState(150);

  React.useEffect(() => {
    const handleResize = () => {
      const imageSizeOption = {
        width: window.innerWidth * 0.1,
        height: window.innerWidth * 0.1,
      };

      setImageWidth(imageSizeOption.width);
      setImageHeight(imageSizeOption.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ArroundCircle = keyframes`
    0% {
      top: -${imageHeight}px;
      left: -${imageWidth}px;
    }
    25% {
      top: -${imageHeight}px;
      left: ${imageWidth}px;
    }
    50% {
      top: ${imageHeight}px;
      left: ${imageWidth}px;
    }
    75% {
      top: ${imageHeight}px;
      left: -${imageWidth}px;
    }
    100% {
      top: -${imageHeight}px;
      left: -${imageWidth}px;
  }
  `;

  const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    margin-top: 24px;

    &::before {
      content: "";
      position: absolute;
      top: -${imageHeight}px;
      left: -${imageWidth}px;
      width: 100%;
      height: 100%;
      background: black;
      // 滑らかに
      animation: ${ArroundCircle} 8s　linear infinite;
    }

    &::after {
      content: "";
      position: absolute;
      top: -${imageHeight}px;
      left: -${imageWidth}px;
      width: 100%;
      height: 100%;
      background: black;
      animation: ${ArroundCircle} 8s linear infinite;
    }
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
    position: relative;
    margin-left: 3px;
    margin-right: 3px;
    box-sizing: border-box;
  `;

  return (
    <Container>
      {images.map((image) => (
        <ImageContainer key={image.id}>
          <Image
            src={image.src}
            alt={image.alt}
            width={imageWidth}
            height={imageHeight}
          />
        </ImageContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  top: 25%;
`;

export default YuWebRightMenu;
