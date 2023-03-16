import React from "react";
import Container from "./container";
import PostSubTitle from "./post-title";
function Sns() {
  return (
    <Container>
      <PostSubTitle {...{ children: "SNS領域" }} />
    </Container>
  );
}

export default Sns;
