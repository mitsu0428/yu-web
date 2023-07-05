import React from "react";
import Container from "../container";
import PostSubTitle from "../post-title";
function Sns() {
  return (
    <Container>
      <PostSubTitle {...{ children: "Webサイト制作、SNS運用" }} />
    </Container>
  );
}

export default Sns;
