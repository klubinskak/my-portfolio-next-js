import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Head from "next/head";
import { ThemeWrapper } from "@/components/Layout/theme-wrapper";
import Script from "next/script";


export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ThemeWrapper>
      <ChakraProvider>
        <Head>
        <title>Klaudia Klubinska</title>
        <meta name="description" content='Klaudia Klubinska, software developer - my portfolio.' key="desc"/>
        </Head>
        <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `,
        }}
      />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeWrapper>
  );
}
