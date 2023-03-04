import Link from "next/link";
import React, { useRef } from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

type Props = {
  close: (e: any) => void;
  actionAreaCardProps: ActionAreaCardProps;
};

type ActionAreaCardProps = {
  title: string;
  description: string;
  url: string;
  image_path: string;
  image_height: number;
};

const Modal = ({ close, actionAreaCardProps }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      close(event);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModalWrapper>
      {actionAreaCardProps && (
        <ModalContent ref={modalRef}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CustomLink href={actionAreaCardProps.url} target="_blank">
                <CardMedia
                  component="img"
                  image={actionAreaCardProps.image_path}
                  height={actionAreaCardProps.image_height}
                  alt={actionAreaCardProps.title}
                />
              </CustomLink>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {actionAreaCardProps.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {actionAreaCardProps.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <CustomButton>
            <CustomLink href={actionAreaCardProps.url} target="_blank">
              More Info...
            </CustomLink>
          </CustomButton>

          <CloseButton onClick={close}>×</CloseButton>
        </ModalContent>
      )}
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 80vw;
  height: 80vh;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  top: 0;
  right: 0;
  padding: 0.5rem;
  font-size: 16px;
  margin-left: 16px;
  position: absolute;
  color: #595959;
  text-shadow: 0 0 7px #932e40, 0 0 10px #932e40, 0 0 21px #932e40,
    0 0 42px #0fa;
`;

const CustomButton = styled.button`
  border: none;
  border-radius: 4px;
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 8px 16px;
  margin-top: 16px;
`;

const CustomLink = styled.a`
  border: none;
  border-radius: 4px;
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 16px 32px 16px 32px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
`;
