import { AppProps } from "next/app";
import "../styles/index.css";
import GoogleTagManager from "../lib/GoogleTagManager";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager googleTagManagerId="GTM-WGSD52Q" />
      <Component {...pageProps} />
    </>
  );
}
