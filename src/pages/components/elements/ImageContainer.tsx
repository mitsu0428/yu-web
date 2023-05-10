import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageContainer = () => {
  return (
    <ImageWrapper>
      <ImageComponent
        src="/images/mitsuhiro-2.jpg"
        alt="Image 1"
        width={200}
        height={200}
      />
      <ImageComponent
        src="/images/mitsuhiro-1.jpg"
        alt="Mitsuhiro Okada"
        width={300}
        height={300}
      />
      <ImageComponent
        src="/images/mitsuhiro-3.jpg"
        alt="Image 2"
        width={200}
        height={200}
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  padding: 16px;
`;

const ImageComponent = styled(Image)`
  border-radius: 8px;
  margin: 0 20px;
  margin-top: 16px;

  @media (max-width: 480px) {
    &:first-child {
      display: none;
    }
    &:last-child {
      display: none;
    }
  }

  opacity: 0.1;
  &:hover {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }
`;

export default ImageContainer;
