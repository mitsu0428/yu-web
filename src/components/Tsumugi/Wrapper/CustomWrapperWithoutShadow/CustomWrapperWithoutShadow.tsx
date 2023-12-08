import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

function CustomWrapperWithoutShadow({ children }: Props) {
  return <Container>{children}</Container>;
}

export default CustomWrapperWithoutShadow;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
