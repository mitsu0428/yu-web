import React from "react";
import { FaTwitter } from "react-icons/fa";
import styled from "styled-components";

function TwitterContainer() {
  return (
    <>
      <URL href="https://twitter.com/mi2__user" target="_blank">
        <FaTwitter size={30} color={"#595959"} />
      </URL>
      <CustomText>Twitter</CustomText>
    </>
  );
}

export default TwitterContainer;

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
