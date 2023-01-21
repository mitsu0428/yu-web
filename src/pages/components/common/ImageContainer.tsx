import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageContainer = () => {
  return (
    <ImageComponent
      src="/images/mitsuhirookada.png"
      alt="Mitsuhiro Okada"
      width={300}
      height={300}
    />
  );
};

export default ImageContainer;

const ImageComponent = styled(Image)`
  border-radius: 50%;
`;
