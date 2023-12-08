import React from "react";
import { FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Component = () => {
  return (
    <URL
      href="https://twitter.com/mi2__user"
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
  border-radius: 8px;
  margin-left: 16px;
`;

const Icon = styled(FaTwitter)`
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.6);
  }
`;
