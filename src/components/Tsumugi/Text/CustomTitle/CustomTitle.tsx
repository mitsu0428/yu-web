import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

const CustomTitle: React.FC<Props> = ({ text }) => {
  return <Title>{text}</Title>;
};

export default CustomTitle;

const Title = styled.h1`
  font-size: 32px;
  padding: 8px;
  text-align: center;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
