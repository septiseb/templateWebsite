import Contact from '@/components/Contact'
import FAQS from '@/components/FAQS'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import GoogleCard from '@/components/GoogleCard'
import Hero from '@/components/Hero'
import Maps from '@/components/Maps'
import NavBar from '@/components/NavBar'
import ReviewCard from '@/components/ReviewCard'
import SEO from '@/components/SEO'
import WhatsApp from '@/components/WhatsApp'
import Head from 'next/head'


const testimonial = {
  body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
  author: {
    name: 'Leslie Alexander',
    handle: 'lesliealexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
}
export default function Login() {
  return (
    <>
      <Head>
        
      </Head>
          <NavBar />
          <Hero />
          <GoogleCard />
          <ReviewCard testimonial={testimonial} />
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