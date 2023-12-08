import React from "react";
import Image from "next/image";
import styled from "styled-components";
import YuWebHeader from "./YuWebHeader";
import TopSection from "../Section/YuWebTopSection";

const YuWebLeftBg = () => {
  const [imageWidth, setImageWidth] = React.useState(600);
  const [imageHeight, setImageHeight] = React.useState(400);

  React.useEffect(() => {
    const handleResize = () => {
      // MEMO: 画像のアスペクト比
      const newWidth = window.innerWidth * 0.7;
      const newHeight = (newWidth / 600) * 400;

      setImageWidth(newWidth);
      setImageHeight(newHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <GrayBg>
        <YuWebHeader />
      </GrayBg>
      <StyledImage
        src="/TopImage/TopImage.jpg"
        alt="Image"
        width={imageWidth}
        height={imageHeight}
      />
    </>
  );
};

export default YuWebLeftBg;

const GrayBg = styled.div`
  position: fixed;
  width: 450px;
  height: 100%;
  background: #eee;

  @media (max-width: 768px) {
    display: none;
  }
  z-index: 1;
`;

const StyledImage = styled(Image)`
  position: absolute;
  z-index: 1;
  top: 100px;
  left: 200px;
`;
