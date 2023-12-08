import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  flexdirection?: string;
};

const CustomSimpleLayout: React.FC<Props> = ({
  children,
  flexdirection = "column",
}) => {
  return <Layout flexdirection={flexdirection}>{children}</Layout>;
};

export default CustomSimpleLayout;

const Layout = styled.div<{ flexdirection: string }>`
  display: flex;
  flex-direction: ${(props) => props.flexdirection};
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
`;
