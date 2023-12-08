import React from "react";
import styled from "styled-components";
import font from "../../../styles/NextFont";

type Props = {
  texts: string[];
};

export const Component = ({ texts }: Props) => {
  return (
    <Wrapper>
      {texts.map((text) => (
        <Text
          key={text}
          className={font.roboto.className}
        >
          {text}
        </Text>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  width: 100%;
`;

const Text = styled.h2`
  width: 100%;
  text-align: left;
  color: #fff;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
