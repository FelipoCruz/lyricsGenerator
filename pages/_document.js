import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Magic Lyrics Generator" key="title"/>
        <meta property="og:description" content="Magic Lyrics Generator" key="description"/>
        <meta
          property="og:image"
          content="/ScreenShot.png"
        />
        <meta name="twitter:card" content="/ScreenShot.png"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
