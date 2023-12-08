import React from "react";
import styled from "styled-components";

export const Component = () => {
  return (
    <Wrapper>
      <h2>Pharcyde</h2>
      <p>ready to show...</p>
      <br />
      <h2>bar kaze</h2>
      <p>ready to show...</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;
