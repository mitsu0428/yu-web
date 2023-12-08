import React from "react";
import styled from "styled-components";
import font from "../../../styles/NextFont";

type Props = {
  text: string;
};

export const Component = ({ text }: Props) => {
  return (
    <Wrapper>
      <Text className={font.roboto.className}>
        {text} <Hr />
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

const Text = styled.h2`
  width: 100%;
  text-align: center;
  color: #fff;
  font-weight: 1200;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
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
