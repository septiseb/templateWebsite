import Contact from '@/components/Contact'
import FAQS from '@/components/FAQS'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Maps from '@/components/Maps'
import NavBar from '@/components/NavBar'
import ReviewCard from '@/components/ReviewCard'
import SEO from '@/components/SEO'
import WhatsApp from '@/components/CTA/WhatsApp'
import Head from 'next/head'
//Information of the Business to Populate Website
import {
  business,
  placeId,
  faqs
} from '@/services/business'

export default function Login() {
  return (
    <>
      <SEO business={business} />
      <NavBar placeId={placeId} phoneNumber={business.phone} />
      <Hero business={business}>
        {business.testimonials.map((testimonial) => (
          <ReviewCard testimonial={testimonial} />
        ))}
      </Hero>
      <Features features={business.features} />
      <Contact phoneNumber={business.phone} email={business.email} />
      <Maps placeId={'ChIJLU7jZClu5kcR4PcOOO6p3I0'} />
      <FAQS faqs={faqs} />
      <WhatsApp phoneNumber={business.phone} />
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export async function getServerSideProps() {
  // Pass data to the page via props
  return { props: { data: 'data' } }
}
