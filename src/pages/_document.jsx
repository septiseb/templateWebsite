import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script';


const Document = (props) =>{
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
    >
      <Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-TMRXP6MB" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-TMRXP6MB');
        `}
      </Script>
      </Head>
      <body className="flex h-full flex-col font-display">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;