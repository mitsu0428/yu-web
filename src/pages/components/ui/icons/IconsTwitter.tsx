import React from "react";
import { FaTwitter } from "react-icons/fa";
import styled from "styled-components";

function TwitterContainer() {
  return (
    <>
      <URL
        href="https://twitter.com/mi2__user"
        target="_blank"
      >
        <Icon
          size={30}
          color={"#fff"}
        />
      </URL>
      <CustomText>Twitter</CustomText>
    </>
  );
}

export default TwitterContainer;

const URL = styled.a`
  width: 100%;
  color: #fff;
`;

const CustomText = styled.p`
  color: #fff;
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
    transform: scale(1.4);
  }
`;
