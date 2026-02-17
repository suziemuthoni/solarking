import Hero from '../components/Hero'
import SolarHomeProducts from '../components/SolarHomeProducts'
import WhySolarKing from '../components/WhySolarKing'
import HowWeDoIt from '../components/HowWeDoIt'
import HowItWorksCarousel from '../components/HowItWorksCarousel'
import WhySolarHome from '../components/WhySolarHome'
import FeaturedProducts from '../components/FeaturedProducts'
import Testimonials from '../components/Testimonials'

function HomePage() {
  return (
    <>
      <Hero />
      <SolarHomeProducts />
      <WhySolarKing />
      <HowWeDoIt />
      <HowItWorksCarousel />
      <WhySolarHome />
      <FeaturedProducts />
      <Testimonials />
    </>
  )
}

export default HomePage
