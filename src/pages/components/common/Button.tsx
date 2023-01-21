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
  background-color: #palevioletred;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 1s;
  width: 300px;
  height: 100px;
  &:hover {
    background-color: #a260bf;
  }
`;

const CustomLink = styled.a`
  box-shadow: inset 0 0 0 0 #a260bf
  color: #a260bf
  padding: 0 0.25rem;
  margin: 0 -0.25rem;
  padding: 8px 16px 8px 16px;
  border-radius: 8px;
  transition: color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;
  font-size: 32px;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    color: #fff;
    padding: 8px 16px 8px 16px;
    border-radius: 8px;
    box-shadow: inset 300px 0 0 0 #a260bf
  }
`;

export default Button;
