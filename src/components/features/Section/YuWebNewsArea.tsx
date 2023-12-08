import React from "react";
import styled from "styled-components";
import CustomDivider from "@/components/Tsumugi/Divider/CustomDivider/CustomDivider";
import CustomImageWrapper from "@/components/Tsumugi/Image/CustomImage/CustomImageWrapper";
import font from "@/components/Tsumugi/Font/NextFont";
import Image from "next/image";

function YuWebNewsArea() {
  return (
    <Wrapper>
      <ImageWithText>
        <CustomImageWrapper
          imgPath="/TopImage/TopImage.jpg"
          alt="TopImage"
          width={200}
          height={200}
          text="Yu Web News Area"
        />

        <CustomDivider />

        <CustomImageWrapper
          imgPath="/TopImage/TopImage.jpg"
          alt="TopImage"
          width={200}
          height={200}
          text="Yu Web News Area"
        />

        <CustomDivider />

        <CustomImageWrapper
          imgPath="/TopImage/TopImage.jpg"
          alt="TopImage"
          width={200}
          height={200}
          text="Yu Web News Area"
        />

        <CustomDivider />
        <Text className={font.khand_400.className}>MORE...</Text>
      </ImageWithText>
    </Wrapper>
  );
}

export default YuWebNewsArea;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const RelativeArea = styled.div`
  position: absolute;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const ImageWithText = styled.div``;

const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  text-align: center;
  margin: 0;
  padding: 0;
`;
