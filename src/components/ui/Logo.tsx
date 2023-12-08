import React from "react";
import Image from "next/image";
import styled from "styled-components";

export const Component = () => {
  return (
    <Wrapper>
      <StyledImage
        src="/yu-logo/logo-tate.png"
        alt="結う -web 公式ロゴ"
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
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
  margin: 0 20px;

  @media (max-width: 480px) {
    margin: 0 10px;
  }
`;
