import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageContainer = () => {
  return (
    <ImageComponent
      src="/images/mitsuhiro-okada.png"
      alt="Mitsuhiro Okada"
      width={300}
      height={300}
    />
  );
};

export default ImageContainer;

const ImageComponent = styled(Image)`
  border-radius: 50%;
  box-shadow: 0 0 7px #fff, 0 0 10px #fff;
`;
