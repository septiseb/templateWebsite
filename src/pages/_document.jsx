import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

const Document = (props) => {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']">
      <Head>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TMRXP6MB');`,
          }}
        ></Script>
      </Head>
      <body className="flex h-full flex-col font-display">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TMRXP6MB"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        >
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
