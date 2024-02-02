import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import Loading from "../components/Loading";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "../components/lib/GoogleTagManager";
import "ress";

export default function App({ Component, pageProps }: AppProps) {
  // const [loading, setLoading] = React.useState(true);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <GoogleTagManager googleTagManagerId="GTM-WBDX5RM" />
      <Component {...pageProps} />
    </>
  );
}
