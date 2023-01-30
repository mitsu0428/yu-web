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
        <LoremText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </LoremText>
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

const CustomText = styled.p`
  color: #595959;
  font-size: 16px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
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
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa;
`;

const LoremText = styled.p`
  color: #000;
  margin-top: 32px;
  margin-left: 32px;
  margin-right: 32px;
  padding: 8px 16px 8px;
  font-size: 18px;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
