import React from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { motion } from "framer-motion";
import font from "../../styles/NextFont";

type Props = {
  title: string;
  description: string;
  serviceDescription: string;
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
      <CustomButton
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.72, 1.01],
        }}
        onClick={onClick}
      >
        <CustomText className={font.notoSansJP400.className}>
          {props.title}
        </CustomText>
        <CustomServiceText className={font.notoSansJP400.className}>
          {props.serviceDescription}
        </CustomServiceText>
      </CustomButton>
      {isClicked && (
        <Modal
          close={onClick}
          actionAreaCardProps={
            {
              title: props.title,
              description: props.description,
              serviceDescription: props.serviceDescription,
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
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CustomButton = styled(motion.button)`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  color: #fff;
  border: none;
  font-size: 16px;
  padding: 16px;
  margin-top: 16px;
  border-radius: 8px;
  height: 72px;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  transition: all 1.2s cubic-bezier(0.2, 1, 0.2, 1);

  &:hover {
    color: #ffffff;
    background-color: #878787;
    cursor: pointer;
  }
`;

const CustomText = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  text-align: left;
  ::before {
    content: "▶︎";
    color: #000;
    margin-right: 4px;
  }
`;

const CustomServiceText = styled.p`
  color: #000;
  font-size: 12px;
  margin: 0 0 0 16px;
`;

export default Button;
