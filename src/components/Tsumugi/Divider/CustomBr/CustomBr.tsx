import React from "react";
import styled from "styled-components";

function CustomBr() {
  return <Br />;
}

export default CustomBr;

const Br = styled.br`
  display: block;
  content: "";
  margin-top: 16px;
`;
