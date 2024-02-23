import React from "react";
import styled from "styled-components";
import * as Headtag from "../../ui/HeadTag";
import * as CustomFont from "../../styles/NextFont";
import Image from "next/image";

export const Component = () => {
  const images = [
    {
      src: "/images/barkaze.jpg",
      alt: "bar kaze 公式サイト",
      width: 1500,
      height: 1500,
    },
    {
      src: "/images/zininternational.jpg",
      alt: "bar kaze 公式サイト",
      width: 1500,
      height: 1500,
    },
    {
      src: "/images/chachatokyo.jpg",
      alt: "bar kaze 公式サイト",
      width: 1500,
      height: 1500,
    },
    {
      src: "/images/liltaroboy2.jpeg",
      alt: "Lil taro boy 撮影",
      width: 1500,
      height: 1500,
    },
    {
      src: "/images/風景.jpg",
      alt: "風景レタッチ",
      width: 1500,
      height: 1500,
    },
    {
      src: "/images/liltaroboy.jpeg",
      alt: "bar kaze 公式サイト",
      width: 1500,
      height: 1500,
    },
    {
      src: "/images/barkazeイベント.jpg",
      alt: "bar kaze 公式サイト",
      width: 1500,
      height: 1500,
    },
  ];

  return (
    <Wrap>
      <Headtag.H2 className={CustomFont.Font.ZenKurenaido.className}>
        YU WEB
      </Headtag.H2>
      <SeparateViewer>
        {images.map((image, index) => (
          <Item key={index}>
            <ImageParent>
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </ImageParent>
          </Item>
        ))}
      </SeparateViewer>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  margin-top: 100px;
  line-height: 2;
  letter-spacing: 0.1em;
  padding: 32px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const SeparateViewer = styled.div`
  column-count: 3;
  height: auto !important;
  break-inside: avoid;
`;

const Item = styled.div`
  width: 100%;
  height: auto !important;
  break-inside: avoid;
`;

const ImageParent = styled.div`
  width: 100%;
  height: auto;
  img {
    width: 100%;
    height: 100%;
  }
`;
