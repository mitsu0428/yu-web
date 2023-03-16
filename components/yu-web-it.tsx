import React from "react";
import Container from "./container";
import PostSubTitle from "./post-title";
function It() {
  return (
    <Container>
      <PostSubTitle {...{ children: "Web制作" }} />
    </Container>
  );
}

export default It;
