import font from "@/components/Tsumugi/Font/NextFont";
import React from "react";
import styled from "styled-components";

function YuWebFooter() {
  return (
    <Footer>
      <FooterTop>
        <FooterTitle className={font.khand_700.className}>
          YU <br />
          WEB
        </FooterTitle>
        <FooterSubtitle className={font.zen_old_mincho_400.className}>
          「三糸一心」 <br />
          人の心をつなぐ、WEBの架け橋
        </FooterSubtitle>
      </FooterTop>
      <FooterBottom>
        <ChildLeftMenu>
          <FooterText1 className={font.zen_old_mincho_400.className}>
            (c) 2023 YU WEB, All Right Resereved
          </FooterText1>
        </ChildLeftMenu>
        <ChildRightMenu>
          <FooterText2 className={font.zen_old_mincho_400.className}>
            | TOP |
          </FooterText2>
          <FooterText2 className={font.zen_old_mincho_400.className}>
            | Privacy Policy |
          </FooterText2>
        </ChildRightMenu>
      </FooterBottom>
    </Footer>
  );
}

export default YuWebFooter;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 170px;
  position: relative;
  background-color: #c2c2c2;
  z-index: 1;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  postion: absolute;
  top: 0;
  align-items: center;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
`;

const ChildLeftMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

const ChildRightMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 640px;
`;

const FooterTitle = styled.h1`
  font-size: 40px;
  margin-left: 48px;
`;

const FooterSubtitle = styled.h2`
  font-size: 20px;
  margin-left: 64px;
`;

const FooterText1 = styled.p`
  font-size: 12px;
  margin-top: 32px;
  margin-left: 32px;
`;

const FooterText2 = styled.p`
  font-size: 16px;
  margin-left: 32px;
`;
