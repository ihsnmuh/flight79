import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/flight79/Hero'
import About from '../components/flight79/About'
import Menu from '../components/flight79/Menu'
import Reviews from '../components/flight79/Reviews'
import Blog from '../components/flight79/Blog'
import Atmosphere from '../components/flight79/Atmosphere'
import Location from '../components/flight79/Location'
import CTA from '../components/flight79/CTA'
import Footer from '../components/flight79/Footer'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <Blog />
      <Atmosphere />
      <Location />
      <CTA />
      <Footer />
    </div>
  )
}
