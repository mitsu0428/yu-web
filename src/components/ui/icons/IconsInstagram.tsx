import React from "react";
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Component = () => {
  return (
    <URL
      href="https://www.instagram.com/mi2__pic/?hl=ja"
      target="_blank"
      whileHover={{ scale: 1.2 }}
      onHoverStart={(e) => {}}
      onHoverEnd={(e) => {}}
    >
      <Icon
        size={25}
        color={"#000"}
      />
    </URL>
  );
};

const URL = styled(motion.a)`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  margin-left: 16px;
`;

const Icon = styled(FaInstagram)`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.6);
  }
`;
