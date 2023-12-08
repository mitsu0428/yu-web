import React from "react";
import styled from "styled-components";

function CustomDivider() {
  return <Divider />;
}

export default CustomDivider;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e0e0e0;
  margin-top: 32px;
  margin-bottom: 32px;
`;
