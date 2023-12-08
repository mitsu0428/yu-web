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
  return (
    <Wrapper>
      <StyledImage
        src={imagePath}
        alt={title}
        width={450}
        height={300}
      />
      <Title className={font.roboto.className}>{title}</Title>
      <ExplainText className={font.notoSansJP400.className}>
        {explainText}
        <Hr />
      </ExplainText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 26px;
  line-height: 1.5;
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
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Hr = styled.hr`
  border-width: 0 0 1px;
  border-image: linear-gradient(
      90deg,
      hsla(0, 0%, 35%, 0),
      hsla(0, 0%, 35%, 0.5) 50%,
      hsla(0, 0%, 35%, 0) 100%
    )
    0 0 100%;
  border-style: solid;
`;
