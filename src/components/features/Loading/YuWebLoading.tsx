import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import font from "@/components/Tsumugi/Font/NextFont";

type Props = {
  text: string;
};

function YuWebLoading(props: Props) {
  return (
    <LoadingWrapper>
      <LoadingImage
        src="/Loading/loading.png"
        alt="loading"
        width={1920}
        height={1080}
      />
      <CenterText className={font.khand_400.className}>
        <p>{props.text}</p>
      </CenterText>
    </LoadingWrapper>
  );
}

export default YuWebLoading;

const LoadingImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #000;
`;

const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const FadeInText = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    `;

const CenterText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  font-size: 30px;
  color: #000000;
  animation: ${FadeInText} 1s ease-in-out;
`;
