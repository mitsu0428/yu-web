import React from "react";
import styled from "styled-components";

const FooterComponents = () => {
  return (
    <Container>
      <Footer>© 2022 mi2</Footer>
    </Container>
  );
};

export default FooterComponents;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  color: #595959;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;