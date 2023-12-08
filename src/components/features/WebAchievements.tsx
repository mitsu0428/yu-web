import React from "react";
import styled from "styled-components";

export const Component = () => {
  return (
    <Wrapper>
      <>
        <p>Pharcyde</p>
        <p>ready to show...</p>
      </>
      <>
        <p>bar kaze</p>
        <p>ready to show...</p>
      </>
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
