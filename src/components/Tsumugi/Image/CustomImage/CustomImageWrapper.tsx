import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import font from "../../Font/NextFont";

type Props = {
  imgPath: string;
  alt: string;
  text?: string;
  textColor?: string;
  imageLink?: string;
  width: number;
  height: number;
};

function CustomImageWrapper({
  imgPath,
  alt,
  text,
  imageLink,
  width,
  height,
}: Props) {
  const hasLink = imageLink !== undefined;
  const hasText = text !== undefined;

  return (
    <Wrapper>
      {hasLink ? (
        <CustomLink href={imageLink ?? ""}>
          <CustomImage
            src={imgPath}
            alt={alt}
            width={width}
            height={height}
          />
        </CustomLink>
      ) : (
        <CustomImage
          src={imgPath}
          alt={alt}
          width={width}
          height={height}
        />
      )}
      {hasText && <Text className={font.khand_400.className}>{text}</Text>}
    </Wrapper>
  );
}

export default CustomImageWrapper;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
`;

const CustomImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;

const CustomLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

const Text = styled.p<{ textColor?: string }>`
  width: 100%;
  font-size: 1.5em;
  text-align: center;
  margin-left: 16px;
  color: ${(props) => props.textColor ?? "#000000"};
`;
