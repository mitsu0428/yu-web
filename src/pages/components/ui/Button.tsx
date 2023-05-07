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
      <CustomButton onClick={onClick}>
        <CustomText>{props.title}</CustomText>
      </CustomButton>
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

const Container = styled.div`
  padding: 16px;
`;

const CustomButton = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
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

const CustomText = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  text-align: left;
  ::before {
    content: "▶︎";
    color: #000;
    margin-right: 8px;
  }
`;

export default Button;
