import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

function CustomVertcalText({ text }: Props) {
  return <VerticalText>{text}</VerticalText>;
}

export default CustomVertcalText;

const VerticalText = styled.h2`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  text-shadow: 0 0 7px #000000;
  margin-top: 32px;
  margin-right: 32px;
  padding: 16px;
  writing-mode: vertical-rl;
  text-align: center;
  font-size: 36px;
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
