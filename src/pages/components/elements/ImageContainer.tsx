import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageContainer = () => {
  return (
    <ImageWrapper>
      <ImageComponent
        src="/images/mitsuhiro-1.jpg"
        alt="Mitsuhiro Okada"
        width={300}
        height={300}
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
    margin: 0 10px;
  }
`;

export default ImageContainer;
