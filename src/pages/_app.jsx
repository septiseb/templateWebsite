import 'focus-visible'
import '@/styles/tailwind.css'

const App = ({ Component, pageProps }) =>{

  return (
     <>
      <Scrip src="https://www.googletagmanager.com/gtag/js?id=GTM-TMRXP6MB" />
     <Component {...pageProps} />
     </>
  )
}

export default App;
