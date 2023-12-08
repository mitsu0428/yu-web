import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imgPath: string;
  alt: string;
  text?: string;
  imageLink?: string;
  width: number;
  height: number;
};

function CustomImageWrapperCircle({
  text,
  imgPath,
  alt,
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
      {hasText && <Text>{text}</Text>}
    </Wrapper>
  );
}

export default CustomImageWrapperCircle;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CustomImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const CustomLink = styled(Link)`
  text-decoration: none;
`;

const Text = styled.p`
  width: 100%;
  font-size: 1.5em;
  text-align: center;
`;
