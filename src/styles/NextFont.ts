import { Roboto, Noto_Serif, Zen_Kurenaido } from "@next/font/google";

const Roboto300 = Roboto({
  subsets: ["cyrillic-ext", "greek"],
  weight: "300",
});

const NotoSerif700 = Noto_Serif({
  subsets: ["cyrillic-ext", "greek"],
  weight: "700",
  display: "swap",
});

const ZenKurenaido = Zen_Kurenaido({
  weight: "400",
  display: "swap",
  preload: false,
});

export const Font = {
  Roboto300,
  NotoSerif700,
  ZenKurenaido,
};
