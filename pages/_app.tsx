import { AppProps } from "next/app";
import "../styles/index.css";
import GoogleTagManager from "../lib/GoogleTagManager";
import { ToastProvider } from "../components/hooks/useToast";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider>
      <GoogleTagManager googleTagManagerId="GTM-WGSD52Q" />
      <Component {...pageProps} />
    </ToastProvider>
  );
}
