import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

type Props = {
  title: string;
  url: string;
};

const Button = (props: Props) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const onClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Container>
      <CustomButton onClick={onClick}>{props.title}</CustomButton>
      {isClicked && (
        <Modal close={onClick}>
          <CustomLink href={props.url} target="_blank">
            {props.title}
          </CustomLink>
        </Modal>
      )}
    </Container>
  );
};

const Container = styled.div``;

const CustomButton = styled.button`
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 1s;
  width: 300px;
  height: 100px;
  &:hover {
    background-color: #000;
  }
`;

const CustomLink = styled.a`
  padding: 8px 16px 8px 16px;
  font-size: 32px;
  font-weight: 700;
  text-decoration: none;
`;

export default Button;
