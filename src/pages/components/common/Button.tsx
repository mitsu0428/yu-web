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

const CustomLink = styled(Link)`
  color: #595959;
`;

export default Button;
