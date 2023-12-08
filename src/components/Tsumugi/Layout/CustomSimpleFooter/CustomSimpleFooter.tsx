import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

const CustomSimpleFooter: React.FC<Props> = ({ text }) => {
  return (
    <Footer>
      <FooterText>{text}</FooterText>
    </Footer>
  );
};

export default CustomSimpleFooter;

const Footer = styled.footer`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const FooterText = styled.p`
  font-size: 1rem;
`;
