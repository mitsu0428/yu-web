import React from "react";
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";

function InstagramContainer() {
  return (
    <>
      <URL href="https://www.instagram.com/mi2__user/?hl=ja" target="_blank">
        <FaInstagram size={30} color={"#595959"} />
      </URL>
      <CustomText>Instagram</CustomText>
    </>
  );
}

export default InstagramContainer;

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

const StyledLink = styled.a`
  box-shadow: inset 0 0 0 0 #54b3d6;
  color: #54b3d6;
  padding: 0 0.25rem;
  margin: 0 -0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  font-family: "Poppins", sans-serif;
  font-size: 27px;
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;

  &:hover {
    color: #fff;
    box-shadow: inset 200px 0 0 0 #54b3d6;
  }
`;
