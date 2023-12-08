import { Khand } from "@next/font/google";
import { Zen_Old_Mincho } from "@next/font/google";

const khand_200 = Khand({
  weight: "300",
  display: "swap",
  preload: false,
});

const khand_400 = Khand({
  weight: "400",
  display: "swap",
  preload: false,
});

const khand_700 = Khand({
  weight: "700",
  display: "swap",
  preload: false,
});

const zen_old_mincho_400 = Zen_Old_Mincho({
  weight: "400",
  display: "swap",
  preload: false,
});

const font = {
  khand_200,
  khand_400,
  khand_700,
  zen_old_mincho_400,
};

export default font;
