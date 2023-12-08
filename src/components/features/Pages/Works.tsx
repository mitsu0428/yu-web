import React from "react";
import styled from "styled-components";
import YuWebLoading from "@/components/features/Loading/YuWebLoading";
import font from "@/components/Tsumugi/Font/NextFont";

function Works() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <YuWebLoading text="The legacy we've forged." />;
  }

  return (
    <Wrapper>
      <Description>
        <Text className={font.khand_400.className}>
          The legacy we&apos;ve forged.
        </Text>
      </Description>
    </Wrapper>
  );
}

export default Works;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  width: 100%;
`;

const Text = styled.p`
  font-size: 3rem;
  font-weight: 600;
  color: #000000;
  text-align: center;
  margin: 0;
  padding: 0;
`;