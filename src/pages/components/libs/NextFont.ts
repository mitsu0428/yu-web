import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["cyrillic-ext", "greek"],
  weight: "100",
});

const roboto2 = Roboto({
  subsets: ["cyrillic-ext", "greek"],
  weight: "300",
});

const font = {
  roboto,
  roboto2,
};

export default font;
