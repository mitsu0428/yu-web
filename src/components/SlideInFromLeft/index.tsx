import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export const Component = ({ children }: Props) => {
  return (
    <Wrap>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
`;
