import { Html, Head, Main, NextScript } from 'next/document'

const env = process.env.NODE_ENV;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script defer src="https://cloud.umami.is/script.js" data-website-id="4ce9ca7d-1e66-4059-ba51-6953f53dc9a2"></script>
      </Head>
      <body className={ env == "development" ? "debug-screens" : ""}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
