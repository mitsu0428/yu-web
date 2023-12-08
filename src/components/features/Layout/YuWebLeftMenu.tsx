import font from "@/components/Tsumugi/Font/NextFont";
import React from "react";
import styled from "styled-components";

const YuWebLeftMenu = () => {
  return (
    <Container>
      <NewsArea>
        <NewsText className={font.khand_400.className}>
          News March,06,2023
        </NewsText>
        <NewsDescription className={font.khand_400.className}>
          Bar KAZE
          <br />
          円山町BARの再建
        </NewsDescription>
      </NewsArea>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  bottom: 48px;
  left: 0;
  width: 300px;
  height: 100px;
  background: #fff;
  @media (max-width: 768px) {
    display: none;
  }
  z-index: 1;
`;

const NewsArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const NewsText = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const NewsDescription = styled.p`
  margin: 0;
  font-size: 1rem;
  margin-left: 16px;
`;

export default YuWebLeftMenu;
