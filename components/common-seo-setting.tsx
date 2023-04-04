import React from "react";
import SeoSettings from "../lib/SeoSettings";

const HomeSeoSettings = () => {
  return (
    <SeoSettings
      pageTitle={"結う -web"}
      pageDescription={
        "あなたとwebという2本の糸をわたしという1本の糸で結う。Web制作やSNS運用等のトータルブランディングを行う、web brandingのパートナーです。"
      }
      pagePath={"https://yu-web.jp"}
      pageImg={"https://yu-web.jp"}
      pageImgWidth={1280}
      pageImgHeight={960}
    />
  );
};

export default HomeSeoSettings;
