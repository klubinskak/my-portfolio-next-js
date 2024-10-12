import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Head from "next/head";
import { ThemeWrapper } from "@/components/Layout/theme-wrapper";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeWrapper>
      <ChakraProvider>
        <Head>
        <title>Klaudia Klubinska</title>
        <meta name="description" content='Klaudia Klubinska, software developer - my portfolio.' key="desc"/>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeWrapper>
  );
}
