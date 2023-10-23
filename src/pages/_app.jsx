import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script';

const App = ({ Component, pageProps }) =>{

  return (
     <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=GTM-TMRXP6MB" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GTM-TMRXP6MB');
        `}
      </Script>
     <Component {...pageProps} />
     </>
  )
}

export default App;
