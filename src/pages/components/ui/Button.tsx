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
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline: 1px solid;
  outline-color: #878787;
  transition: all 1.2s cubic-bezier(0.2, 1, 0.2, 1);

  &:hover {
    color: #ffffff;
    background-color: #878787;
    outline-color: transparent;
    outline-offset: 12px;
    cursor: pointer;
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
    margin-right: 4px;
  }
`;

export default Button;
