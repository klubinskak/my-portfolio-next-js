import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ChakraProvider>
        <Head>
        <title>Klaudia Klubinska</title>
        <meta name="description" content='Klaudia Klubinska, software developer - my portfolio.' key="desc"/>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}
