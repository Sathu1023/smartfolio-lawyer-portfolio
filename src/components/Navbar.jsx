import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Phone,
  Scale,
  Briefcase,
  Award,
  Star,
  User,
  Shield,
} from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'About', href: '#about', icon: User },
  { label: 'Practice Areas', href: '#services', icon: Briefcase },
  { label: 'Journey', href: '#experience', icon: Award },
  { label: 'Reviews', href: '#testimonials', icon: Star },
  { label: 'Contact', href: '#contact', icon: Shield },
]

export default function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#about')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)

      // Detect active section on scroll smoothly from bottom up
      const sections = ['#about', '#services', '#experience', '#testimonials', '#contact']
      const scrollPos = window.scrollY + 280

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i])
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* =========================================
          1. DESKTOP NAVBAR (Top Floating Glass Bar)
          ========================================= */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[100] hidden items-center justify-between border-b border-slate-900/[0.06] px-[5%] py-3 backdrop-blur-[22px] transition-[background-color,box-shadow] duration-500 lg:flex lg:px-[6%] lg:py-4 ${
          scrolled
            ? 'bg-white/90 shadow-[0_14px_40px_rgba(15,23,42,0.10)]'
            : 'bg-white/75 shadow-[0_8px_30px_rgba(15,23,42,0.04)]'
        }`}
      >
        <a
          href="#about"
          aria-label="Adv. Jonathan Vance — Senior Advocate, back to top"
          className="inline-flex shrink-0 transition-transform duration-300 hover:scale-[1.02]"
        >
          <Logo markClassName="transition-transform duration-500 hover:rotate-6" />
        </a>

        {/* Desktop links */}
        <ul className="flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}
            >
              <a
                href={link.href}
                className={`nav-link inline-block text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  activeSection === link.href
                    ? 'font-bold text-amber-800'
                    : 'text-slate-600 hover:text-amber-800'
                }`}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Book Consultation Action */}
        <button
          type="button"
          onClick={onBook}
          className="btn-gradient btn-shine group hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(182,136,76,0.25)] transition-all hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(182,136,76,0.35)] lg:inline-flex"
        >
          <Calendar size={16} className="transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
          Book Consultation
        </button>
      </motion.nav>

      {/* =========================================
          2. MOBILE TOP HEADER (Slim, Minimal & Clean)
          ========================================= */}
      <header className="fixed top-0 left-0 right-0 z-[90] flex h-14 items-center justify-between border-b border-slate-900/[0.08] bg-white/90 px-4 backdrop-blur-xl lg:hidden shadow-sm">
        <a href="#about" className="inline-flex items-center gap-2">
          <Logo tagline={false} markClassName="h-8 w-8" className="text-base" />
        </a>

        <div className="flex items-center gap-2">
          <a
            href="tel:+919840154321"
            className="inline-flex items-center gap-1.5 rounded-full border border-amber-800/20 bg-amber-50/90 px-3 py-1 text-xs font-bold text-amber-900 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <Phone size={12} className="text-amber-800" />
            <span>Chambers</span>
          </a>
        </div>
      </header>

      {/* ========================================================
          3. MOBILE BOTTOM DOCK NAVBAR ("Navbar கீழ வந்து இருக்குமே")
             App-like floating bottom dock for smooth mobile navigation
          ======================================================== */}
      <motion.aside
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        aria-label="Mobile Navigation"
        className="fixed bottom-3 inset-x-3 z-[100] mx-auto max-w-[420px] lg:hidden"
      >
        <nav className="flex items-center justify-between rounded-2xl border border-slate-900/10 bg-white/95 px-2 py-1.5 shadow-[0_16px_40px_rgba(15,23,42,0.18)] backdrop-blur-2xl">
          {/* Tab: About */}
          <a
            href="#about"
            onClick={() => setActiveSection('#about')}
            className={`flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1 text-[0.66rem] font-bold transition-all ${
              activeSection === '#about'
                ? 'text-amber-800 font-extrabold scale-105'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <User size={18} className={activeSection === '#about' ? 'stroke-[2.4]' : 'stroke-[1.8]'} />
            <span>About</span>
          </a>

          {/* Tab: Practice Disciplines */}
          <a
            href="#services"
            onClick={() => setActiveSection('#services')}
            className={`flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1 text-[0.66rem] font-bold transition-all ${
              activeSection === '#services'
                ? 'text-amber-800 font-extrabold scale-105'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Scale size={18} className={activeSection === '#services' ? 'stroke-[2.4]' : 'stroke-[1.8]'} />
            <span>Practice</span>
          </a>

          {/* Tab: Journey / Experience */}
          <a
            href="#experience"
            onClick={() => setActiveSection('#experience')}
            className={`flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1 text-[0.66rem] font-bold transition-all ${
              activeSection === '#experience'
                ? 'text-amber-800 font-extrabold scale-105'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Award size={18} className={activeSection === '#experience' ? 'stroke-[2.4]' : 'stroke-[1.8]'} />
            <span>Journey</span>
          </a>

          {/* Tab: Reviews */}
          <a
            href="#testimonials"
            onClick={() => setActiveSection('#testimonials')}
            className={`flex flex-1 flex-col items-center justify-center gap-0.5 rounded-xl py-1 text-[0.66rem] font-bold transition-all ${
              activeSection === '#testimonials'
                ? 'text-amber-800 font-extrabold scale-105'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Star size={18} className={activeSection === '#testimonials' ? 'stroke-[2.4]' : 'stroke-[1.8]'} />
            <span>Reviews</span>
          </a>

          {/* Primary Action Button: Book Consultation */}
          <motion.button
            whileTap={{ scale: 0.94 }}
            type="button"
            onClick={onBook}
            className="btn-gradient btn-shine ml-1 flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold text-white shadow-[0_8px_20px_rgba(182,136,76,0.30)]"
          >
            <Calendar size={14} />
            <span>Consult</span>
          </motion.button>
        </nav>
      </motion.aside>
    </>
  )
}
