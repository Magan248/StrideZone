import { lazy, Suspense } from 'react'
import Header from './components/Header'
const HeroSection = lazy(() => import('./components/HeroSection'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const About = lazy(() => import('./components/About'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <>
      <Header /> {/* Already handles lazy + Suspense internally */}
      <Suspense>
        <HeroSection />
      </Suspense>
      <Suspense>
        <HowItWorks />
      </Suspense>
      <Suspense>
        <About />
      </Suspense>
      <Suspense>
        <Testimonials />
      </Suspense>
      <Suspense>
        <Contact />
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}

export default App
