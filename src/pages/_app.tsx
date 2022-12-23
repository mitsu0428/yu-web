import "../styles/globals.css";
import type { AppProps } from "next/app";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "./components/GoogleTagManager";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager googleTagManagerId="GTM-WBDX5RM" />
      <Component {...pageProps} />;
    </>
  );
}
