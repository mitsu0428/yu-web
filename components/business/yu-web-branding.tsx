import React from "react";
import Container from "../container";
import PostSubTitle from "../post-title";
function Branding() {
  return (
    <Container>
      <PostSubTitle {...{ children: "ブランディング" }} />
    </Container>
  );
}

export default Branding;
