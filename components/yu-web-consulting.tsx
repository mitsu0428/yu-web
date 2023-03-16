import React from "react";
import Container from "./container";
import PostSubTitle from "./post-title";
function Consulting() {
  return (
    <Container>
      <PostSubTitle {...{ children: "コンサルティング領域" }} />
    </Container>
  );
}

export default Consulting;
