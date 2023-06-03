import React from "react";
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";

function IconsInstagram() {
  return (
    <URL
      href="https://www.instagram.com/mi2__user/?hl=ja"
      target="_blank"
      whileHover={{ scale: 1.2 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
    >
      <Icon
        size={30}
        color={"#000"}
      />
      <CustomText>Instagram</CustomText>
    </URL>
  );
}

export default IconsInstagram;

const URL = styled(motion.a)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  padding: 16px;
`;

const CustomText = styled.p`
  color: #000;
  text-shadow: 0 0 7px #fff;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Icon = styled(FaInstagram)`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.6);
  }
`;
