import Contact from '@/components/Contact'
import FAQS from '@/components/FAQS'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Maps from '@/components/Maps'
import NavBar from '@/components/NavBar'
import SEO from '@/components/SEO'
import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <SEO />
      </Head>
          <NavBar />
          <Hero />
          <Features features={""} />
          <FAQS faqs={""} />
          <Contact contact={""} />
          <Maps maps={""} />
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