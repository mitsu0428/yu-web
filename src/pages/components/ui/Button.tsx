import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

type Props = {
  title: string;
  description: string;
  url: string;
  image_path: string;
  image_height: number;
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
        <Modal
          close={onClick}
          actionAreaCardProps={
            {
              title: props.title,
              description: props.description,
              url: props.url,
              image_path: props.image_path,
              image_height: props.image_height,
            } as Props
          }
        />
      )}
    </Container>
  );
};

const Container = styled.div``;

const CustomButton = styled.button`
  background-color: #eaeaea;
  border: none;
  border-radius: 4px;
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  transition: background-color 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background-color: #000;
    color: #ffffff;
  }
`;

const CustomLink = styled.a`
  background-color: #000000;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 32px 16px 32px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

export default Button;
