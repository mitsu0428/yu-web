import React from "react";
import styled from "styled-components";

type Props = {
  key: string | number;
  buttonText: string;
  onClick?: () => void;
};

function CustomSimpleButton({ key, buttonText, onClick }: Props) {
  return (
    <StyledButton
      key={key}
      onClick={onClick}
    >
      {buttonText}
    </StyledButton>
  );
}

export default CustomSimpleButton;

const StyledButton = styled.button`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: #000000;
  background-color: #333333;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  margin: 0;
  margin-top: 16px;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  white-space: nowrap;
  &:hover {
    background-color: #cccccc;
  }
`;
