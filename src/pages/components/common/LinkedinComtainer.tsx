import React from "react";
import { FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

function LinkedinComtainer() {
  return (
    <>
      <URL href="https://www.linkedin.com/in/mitsuhiro-okada" target="_blank">
        <FaLinkedin size={30} color={"#595959"} />
      </URL>
      <CustomText>Linkedin</CustomText>
    </>
  );
}

export default LinkedinComtainer;

const URL = styled.a`
  width: 100%;
  color: #595959;
`;

const CustomText = styled.p`
  color: #595959;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
