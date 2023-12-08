import React from "react";
import Image from "next/image";
import styled from "styled-components";
import font from "@/components/Tsumugi/Font/NextFont";

function YuWebAboutsArea() {
  return (
    <Wrapper className={font.zen_old_mincho_400.className}>
      <RelativeArea>
        <Image
          src="/VerticalText/about.png"
          alt="TopImage"
          width={125}
          height={500}
        />
        <Image
          src="/VerticalText/about-jp.png"
          alt="TopImage"
          width={125}
          height={500}
        />
      </RelativeArea>
      <RelativeArea>
        <Text>YuWebAboutArea</Text>
        <Text>YuWebAboutAreaにテキスト。</Text>
        <Text>YuWebAboutArea</Text>
        <Text>YuWebAboutAreaに何か入る。</Text>
      </RelativeArea>
    </Wrapper>
  );
}

export default YuWebAboutsArea;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RelativeArea = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`;

const Text = styled.p`
  font-size: 36px;
  font-weight: bold;
  color: #000000;
  text-align: right;
  margin-top: 16px;
  margin-right: 250px;
`;
