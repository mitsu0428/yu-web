import React from "react";
import styled from "styled-components";
import { FaInstagram } from "react-icons/fa";

type Props = {
  instagramUrl: string;
};

const CustomInstagramIcon: React.FC<Props> = ({ instagramUrl }) => {
  return <InstagramIcon onClick={() => window.open(instagramUrl)} />;
};

export default CustomInstagramIcon;

const InstagramIcon = styled(FaInstagram)`
  color: #000000;
  &:hover {
    color: #c13584;
  }
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
