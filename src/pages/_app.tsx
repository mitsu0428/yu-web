import "../styles/globals.css";
import type { AppProps } from "next/app";
import YuWebHeader from "@/components/features/Layout/YuWebHeader";
import YuWebLeftBg from "@/components/features/Layout/YuWebLeftBg";
import YuWebFooter from "@/components/features/Layout/YuWebFooter";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <YuWebLeftBg />
      <Component {...pageProps} />
      <YuWebFooter />
    </>
  );
}
