import React from "react";
import Image from "next/image";
import styled from "styled-components";
import font from "@/components/Tsumugi/Font/NextFont";

function YuWebApproachsAreaThird() {
  return (
    <Wrapper>
      <RelativeArea>
        <Image
          src="/VerticalText/approach.png"
          alt="TopImage"
          width={125}
          height={500}
        />
      </RelativeArea>
      <RelativeArea className={font.khand_700.className}>
        <SubTitle>03</SubTitle>
        <SubTitle>Branding</SubTitle>
      </RelativeArea>
      <StyledImage
        src="/TopImage/TopImage2.jpeg"
        width={750}
        height={200}
        alt="結う -webのロゴ"
      />
      <Text className={font.khand_400.className}>
        TEXT が入るよ入るよ TEXT が入るよ入るよ TEXT が入るよ入るよ
      </Text>
      <Text className={font.khand_400.className}>
        TEXT が入るよ入るよ TEXT が入るよ入るよ TEXT が入るよ入るよ
      </Text>
    </Wrapper>
  );
}

export default YuWebApproachsAreaThird;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 32px;
  margin-top: 32px;
`;

const RelativeArea = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
`;

const SubTitle = styled.h2`
  font-size: 36px;
  color: #000000;
  text-align: center;
`;

const Text = styled.p`
  font-size: 24px;
  color: #000000;
  text-align: center;
  margin-top: 32px;
`;

const StyledImage = styled(Image)`
  border-radius: 4px;
  margin-top: 32px;
`;
