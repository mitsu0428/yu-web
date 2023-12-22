import React from "react";
import Image from "next/image";
import styled from "styled-components";
import font from "../../styles/NextFont";

export const Component = () => {
  return (
    <Container>
      <StyledImage
        src="/illustration/branding.png"
        alt="結う -web イメージ画像"
        width={300}
        height={300}
      />
      <TextWrapper>
        <Text className={font.roboto.className}>寄り添いを大切にする</Text>
        <Text className={font.roboto.className}>
          Webブランディングのパートナー
        </Text>
      </TextWrapper>
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
  margin-left: 32px;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  gap: 8px;
`;
