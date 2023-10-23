import { Head, Html, Main, NextScript } from 'next/document'

const Document = (props) =>{
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
    >
      <Head>
      </Head>
      <body className="flex h-full flex-col font-display">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;