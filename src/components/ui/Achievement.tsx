import React from "react";
import Image from "next/image";
import styled from "styled-components";
import font from "../../styles/NextFont";

type Props = {
  title: string;
  explainText: string;
  imagePath: string;
};

export const Component = ({ title, explainText, imagePath }: Props) => {
  const isMovie = imagePath.match(/mov$/);
  return (
    <Wrapper>
      <Title className={font.roboto.className}>{title}</Title>
      <ExplainText className={font.notoSansJP400.className}>
        {explainText}
      </ExplainText>
      {isMovie ? (
        <StyledVideo
          src="/achievements/pharcyde.mov"
          autoPlay
          muted
          loop
        />
      ) : (
        <StyledImage
          src={imagePath}
          alt={title}
          width={450}
          height={300}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 32px;
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
`;

const StyledVideo = styled.video`
  width: 200px;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const ExplainText = styled.p`
  color: #fff;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
