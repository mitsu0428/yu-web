import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

const CustomBoldText: React.FC<Props> = ({ text }) => {
  return <Text>{text}</Text>;
};

export default CustomBoldText;

const Text = styled.p`
  font-size: 20px;
  padding: 8px;
  text-align: center;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
