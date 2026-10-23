import { useState } from 'react'
import { motion, MotionConfig, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Experience from './components/Experience'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import FloatingIcons from './components/FloatingIcons'
import BookingModal from './components/BookingModal'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 })
  const [bookingOpen, setBookingOpen] = useState(false)

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-hidden selection:bg-[#b6884c] selection:text-white">
        <div className="bg-mesh" />
        <div className="grid-lines" />
        <div className="aurora" aria-hidden="true">
          <span className="aurora-blob a1" />
          <span className="aurora-blob a2" />
          <span className="aurora-blob a3" />
          <span className="aurora-blob a4" />
        </div>
        <motion.div
          style={{ scaleX }}
          className="fixed inset-x-0 top-0 z-[110] h-[3.5px] origin-left bg-gradient-to-r from-[#b6884c] via-[#1e3a8a] to-[#7c3aed] shadow-[0_0_14px_rgba(182,136,76,0.55)]"
        />
        <FloatingIcons />
        <Navbar onBook={() => setBookingOpen(true)} />
        <main className="pb-28 lg:pb-0">
          <Hero onBook={() => setBookingOpen(true)} />
          <Stats />
          <Services onBook={() => setBookingOpen(true)} />
          <Experience />
          <Testimonials />
          <CTA onBook={() => setBookingOpen(true)} />
        </main>
        <Footer />
        <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </div>
    </MotionConfig>
  )
}
