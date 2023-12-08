import React from "react";
import styled from "styled-components";
import CustomSimpleButton from "../CustomSimpleButton/CustomSimpleButton";

type Props = {
  buttonActions: { buttonText: string; onClick: () => void }[];
};

function CustomSimpleButtons({ buttonActions }: Props) {
  return (
    <ButtonContainer>
      {buttonActions.map((buttonAction, index) => (
        <CustomSimpleButton
          key={index}
          buttonText={buttonAction.buttonText}
          onClick={buttonAction.onClick}
        />
      ))}
    </ButtonContainer>
  );
}
export default CustomSimpleButtons;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
