import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import CustomSimpleHeader from "@/components/Tsumugi/Layout/CustomSimpleHeader/CustomSimpleHeader";
import font from "@/components/Tsumugi/Font/NextFont";
import YuWebLeftBg from "./YuWebLeftBg";

function YuWebHeader() {
  // 画面サイズの取得
  const [imageWidth, setImageWidth] = React.useState(50);
  const [imageHeight, setImageHeight] = React.useState(50);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setImageWidth(50);
        setImageHeight(50);
        return;
      }

      setImageWidth(75);
      setImageHeight(75);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <CustomSimpleHeader flexdirection="row">
      <LogoContainer>
        <Link href="/">
          <StyledImage
            src="/Logo/logo-tate.png"
            width={imageWidth}
            height={imageHeight}
            alt="結う -webのロゴ"
          />
        </Link>
      </LogoContainer>
      <HeaderMenu className={font.khand_400.className}>
        <StyledLink href="/about">
          <LinkText>About</LinkText>
        </StyledLink>
        <StyledLink href="/works">
          <LinkText>Works</LinkText>
        </StyledLink>
        <StyledLink href="/news">
          <LinkText>News</LinkText>
        </StyledLink>
        <StyledLink href="/approach">
          <LinkText>Approach</LinkText>
        </StyledLink>
        <StyledLink href="/contact">
          <LinkText>Contact</LinkText>
        </StyledLink>
      </HeaderMenu>
    </CustomSimpleHeader>
  );
}

export default YuWebHeader;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
`;

const StyledImage = styled(Image)`
  border-radius: 4px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-right: 40px;
  @media (max-width: 640px) {
    margin-right: 20px;
  }
`;

const LinkText = styled.p`
  font-size: 24px;
  color: #000000;
  @media (max-width: 640px) {
    font-size: 16px;
  }
`;
