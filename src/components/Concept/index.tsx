import React from "react";
import styled from "styled-components";
import * as Headtag from "../../ui/HeadTag";
import * as PTag from "../../ui/PTag";
import * as CustomFont from "../../styles/NextFont";

export const Component = () => {
  return (
    <Wrap>
      <Headtag.H2 className={CustomFont.Font.ZenKurenaido.className}>
        大切にしてる想い
      </Headtag.H2>
      <PTag.pSmall>
        『あなたの色でwebは完成する』
        <br />
        ここには、サイトのコンセプトや、制作実績などを掲載します。
        <br />
        ホテル、飲食店等の映像、ブランディング経験と技術でビジネスを多面的から支援。
        <br />
        優秀な技術者が集まり、結果や数字と真摯に向き合い、試行錯誤を重ねる。
        <br />
        web領域における伴走型パートナー。
        <br />
        ブランディングは、何があり、何を提供するか、潜在的なお客様とのお約束ごと。
        <br />
        ブランドにかける想いをテクニカルに表現するツール。
        <br />
        事業にかける想いをwebに繋げます。
      </PTag.pSmall>
    </Wrap>
  );
};

// memo: Headerの高さに合わせてTOPを調整する
const Wrap = styled.div`
  width: 100%;
  margin: 32px 0;
  padding: 32px;
  line-height: 2;
  letter-spacing: 0.1em;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
