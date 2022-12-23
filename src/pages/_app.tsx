import "../styles/globals.css";
import type { AppProps } from "next/app";
import { googleTagManagerId } from "../lib/gtag";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "./components/GoogleTagManager";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager
        googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
      />
      <Component {...pageProps} />;
    </>
  );
}
