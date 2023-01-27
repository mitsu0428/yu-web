import Image from "next/image";
import React, { useRef } from "react";
import styled from "styled-components";

type Props = {
  close: (e: any) => void;
  children: React.ReactNode;
};

const Modal: React.FC<Props> = ({ close, children }) => {
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
      <ModalContent ref={modalRef}>
        <CustomText>{children}</CustomText>
        <Image
          src="/ModalPokemon.gif"
          width={70}
          height={70}
          alt="pokemon modal"
        />
        <CloseButton onClick={close}>×</CloseButton>
      </ModalContent>
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
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 80vw;
  height: 80vh;
  border-radius: 8px;
`;

const CustomText = styled.p`
  color: #595959;
  font-size: 18px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const CloseButton = styled.button`
  top: 0;
  right: 0;
  padding: 0.5rem;
  font-size: 16px;
  margin-left: 16px;
  position: absolute;
  color: #595959;
`;
