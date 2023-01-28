import React from "react";
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";

function InstagramContainer() {
  return (
    <>
      <URL href="https://www.instagram.com/mi2__user/?hl=ja" target="_blank">
        <FaInstagram size={30} color={"#fff"} />
      </URL>
      <CustomText>Instagram</CustomText>
    </>
  );
}

export default InstagramContainer;

const URL = styled.a`
  width: 100%;
  color: #fff;
`;

const CustomText = styled.p`
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
