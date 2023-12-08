import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

const CustomSubtitle: React.FC<Props> = ({ text }) => {
  return <SubTitle>{text}</SubTitle>;
};

export default CustomSubtitle;

const SubTitle = styled.h1`
  font-size: 24px;
  padding: 8px;
  text-align: center;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
