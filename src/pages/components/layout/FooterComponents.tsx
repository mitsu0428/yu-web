import React from "react";
import styled from "styled-components";
import LoadingIndicator from "../ui/icons/LoadingIcon";

const FooterComponents = () => {
  return (
    <Container>
      {/* <LoadingIndicator /> */}
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
  color: #fff;
  text-shadow: 0 0 7px #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 16px;
`;
