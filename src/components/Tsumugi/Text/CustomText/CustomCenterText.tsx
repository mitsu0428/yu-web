import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

const CustomCenterText: React.FC<Props> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default CustomCenterText;

const Text = styled.p`
  font-size: 18px;
  padding: 8px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
