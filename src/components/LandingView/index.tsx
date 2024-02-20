import React from "react";
import styled from "styled-components";
import * as Headtag from "../../ui/HeadTag";
import * as PTag from "../../ui/PTag";

export const Component = () => {
  return (
    <Wrap>
      <Headtag.H2>大切にしてる想い</Headtag.H2>
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

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 100px;
  line-height: 2;
  letter-spacing: 0.1em;
  padding: 64px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
