import Contact from '@/components/Contact'
import FAQS from '@/components/FAQS'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Maps from '@/components/Maps'
import NavBar from '@/components/NavBar'
import SEO from '@/components/SEO'
import WhatsApp from '@/components/WhatsApp'
import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        
      </Head>
          <NavBar />
          <Hero />
          <Features features={""} />
          <Contact contact={""} />
          <Maps placeId={"ChIJLU7jZClu5kcR4PcOOO6p3I0"} />
          {/*<FAQS />*/}
          <WhatsApp />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export async function getServerSideProps() {

  // Pass data to the page via props
  return { props: {data: "data" } }
}