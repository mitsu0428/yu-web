import React from "react";
import { FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";
import font from "../../../../styles/NextFont";

function TwitterContainer() {
  return (
    <URL
      href="https://twitter.com/mi2__user"
      target="_blank"
      whileHover={{ scale: 1.2 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
    >
      <Icon
        size={30}
        color={"#000"}
      />
      <CustomText className={font.roboto.className}>Twitter</CustomText>
    </URL>
  );
}

export default TwitterContainer;

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

const Icon = styled(FaTwitter)`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.6);
  }
`;
