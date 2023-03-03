import React from "react";
import { FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

function LinkedinComtainer() {
  return (
    <>
      <URL href="https://www.linkedin.com/in/mitsuhiro-okada" target="_blank">
        <FaLinkedin size={30} color={"#fff"} />
      </URL>
      <CustomText>Linkedin</CustomText>
    </>
  );
}

export default LinkedinComtainer;

const URL = styled.a`
  width: 100%;
  color: #fff;
`;

const CustomText = styled.p`
  color: #fff;
  text-shadow: 0 0 7px #932e40, 0 0 10px #932e40, 0 0 21px #932e40,
    0 0 42px #0fa;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
