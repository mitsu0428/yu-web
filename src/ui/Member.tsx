import React from "react";
import Image from "next/image";
import styled from "styled-components";

export const Component = () => {
  return (
    <Wrapper>
      <StyledImage
        src="/images/mitsuhiro-1.jpg"
        alt="Mitsuhiro Okada"
        width={50}
        height={50}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  padding: 16px;
`;

const StyledImage = styled(Image)`
  border-radius: 4px;
  margin: 0 20px;
  margin-top: 16px;

  @media (max-width: 480px) {
    margin: 0 10px;
  }
`;
