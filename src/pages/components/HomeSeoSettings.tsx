import SeoSettings from "./SeoSettings";

const HomeSeoSettings = () => {
  return (
    <SeoSettings
      pageTitle={"mi2のポートフォリオサイト"}
      pageDescription={
        "okada mitsuhiroのポートフォリオサイトです。普段は、フロントエンジニアをしています。 | Webサイト作成 | SNS運用"
      }
      pagePath={"https://mitsuhiro-okada.com"}
      pageImg={"https://mitsuhiro-okada.com"}
      pageImgWidth={1280}
      pageImgHeight={960}
    />
  );
};

export default HomeSeoSettings;
