import React from "react";
import Image from "next/image";
import styled from "styled-components";

const ImageContainer = () => {
  return (
    <ImageComponent
      src="/images/mitsuhiro-okada.jpg"
      alt="Mitsuhiro Okada"
      width={300}
      height={300}
    />
  );
};

export default ImageContainer;

const ImageComponent = styled(Image)`
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: 0 0 7px #932e40, 0 0 10px #932e40, 0 0 21px #932e40;
`;
