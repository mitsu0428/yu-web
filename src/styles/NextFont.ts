import { Roboto } from "@next/font/google";
import { Noto_Sans_JP } from "@next/font/google";

const roboto = Roboto({
  subsets: ["cyrillic-ext", "greek"],
  weight: "300",
});

const notoSansJP400 = Noto_Sans_JP({
  weight: "400",
  display: "swap",
  preload: false,
});
const notoSansJP700 = Noto_Sans_JP({
  weight: "700",
  display: "swap",
  preload: false,
});

const font = {
  roboto,
  notoSansJP400,
  notoSansJP700,
};

export default font;
