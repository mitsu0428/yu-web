import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

function CustomWrapperWithShadow({ children }: Props) {
  return <Container>{children}</Container>;
}

export default CustomWrapperWithShadow;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
