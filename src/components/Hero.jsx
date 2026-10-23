import { useEffect, useId, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ChevronDown, CheckCircle, Scale, ShieldCheck, Award } from 'lucide-react'

const roles = [
  'Supreme Court Trial Counsel',
  'Constitutional Law Strategist',
  'Commercial Arbitration Counsel',
  'High Court Appellate Advocate',
]

export default function Hero({ onBook }) {
  const cardRef = useRef(null)
  const sceneRef = useRef(null)
  const rawId = useId()
  const sealPathId = `seal-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`
  const [roleIndex, setRoleIndex] = useState(0)

  // Cycling role words
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  // 3D Tilt interaction for the hero card
  useEffect(() => {
    const scene = sceneRef.current
    const card = cardRef.current
    if (!scene || !card) return

    const handleMove = (e) => {
      const rect = scene.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -16
      const rotateY = ((x - centerX) / centerX) * 16
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleLeave = () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }

    scene.addEventListener('mousemove', handleMove)
    scene.addEventListener('mouseleave', handleLeave)

    return () => {
      scene.removeEventListener('mousemove', handleMove)
      scene.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <section id="about" className="relative flex min-h-screen items-center overflow-hidden px-[5%] pb-16 pt-20 lg:px-[6%] lg:pb-20 lg:pt-36">
      <div className="mx-auto grid w-full max-w-[540px] grid-cols-1 items-center gap-6 text-center lg:max-w-[1360px] lg:grid-cols-[1.18fr_0.82fr] lg:gap-16 lg:text-left">
        {/* Text column - uses contents on mobile so photo card can sit right after the name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="contents lg:block"
        >
          {/* 1. Header (Mobile order-1): Badge, Hi I'm, Name, Title */}
          <div className="order-1 flex flex-col items-center lg:block">
            {/* Live Availability Badge */}
            <div className="mb-3.5 inline-flex items-center justify-center gap-2 rounded-full border border-amber-800/20 bg-amber-50/85 px-4 py-1.5 text-xs font-semibold text-amber-900 shadow-[0_8px_24px_rgba(182,136,76,0.12)] backdrop-blur-lg lg:mb-5 lg:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Chambers Active • Supreme Court & Arbitration</span>
            </div>

            {/* "Hi, I'm" Line matching doctor pattern */}
            <p className="mb-1 flex items-center justify-center gap-2.5 text-base font-medium tracking-wide text-slate-500 lg:mb-2 lg:justify-start lg:text-lg">
              <span aria-hidden="true" className="h-px w-7 bg-gradient-to-r from-transparent to-amber-600/70 lg:w-9" />
              Hi, I&apos;m
            </p>

            {/* Big Name H1 */}
            <h1 className="font-display text-[clamp(2.4rem,9.5vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.02em] text-slate-900 lg:text-[clamp(3.1rem,5.3vw,4.7rem)]">
              Adv. Jonathan <span className="shimmer-text">Vance</span>
            </h1>

            {/* Subtitle / Credentials */}
            <p className="mt-2.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-amber-800 lg:mt-4 lg:justify-start lg:text-[0.78rem]">
              Senior Advocate
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-amber-500/50" />
              Supreme Court of India
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-amber-500/50" />
              Harvard Law LL.M.
            </p>
          </div>

          {/* 3. Details (Mobile order-3): Role Cycler, Bio, Buttons, Credentials Ribbon */}
          <div className="order-3 flex flex-col items-center lg:block">
            {/* Cycling Role Pill with smooth animation */}
            <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2 text-xs lg:justify-start lg:text-sm">
              <span className="font-medium text-slate-500">Appearing before benches as:</span>
              <div className="relative inline-flex h-7 items-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="rounded-md border border-amber-600/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-bold text-amber-900"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* First-Person Bio */}
            <p className="mx-auto mb-6 mt-3 max-w-[340px] px-1 text-[0.95rem] leading-relaxed text-slate-600 lg:mx-0 lg:mb-10 lg:mt-6 lg:max-w-[560px] lg:px-0 lg:text-lg lg:leading-[1.75]">
              For over 25 years, I have provided fearless trial advocacy and constitutional counsel to individuals, corporate founders, and institutions before the Supreme Court of India and international arbitration tribunals.
            </p>

            {/* Action buttons */}
            <div className="mx-auto flex w-full max-w-[340px] flex-col gap-3 lg:mx-0 lg:w-auto lg:max-w-none lg:flex-row lg:gap-4">
              <button
                type="button"
                onClick={onBook}
                className="btn-gradient inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3.5 text-base font-bold text-white shadow-[0_14px_36px_rgba(182,136,76,0.35)] transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_22px_50px_rgba(182,136,76,0.45)] lg:px-7 lg:py-4 xl:px-9"
              >
                <Mail size={20} />
                Consult With Me Directly
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-slate-900/10 bg-white/80 px-6 py-3.5 text-base font-semibold text-slate-800 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-lg transition-all hover:-translate-y-1 hover:border-amber-600/40 hover:bg-white hover:shadow-[0_16px_36px_rgba(182,136,76,0.15)] lg:px-6 lg:py-4 xl:px-9"
              >
                <ChevronDown size={20} className="rotate-180" />
                Explore Practice Areas
              </a>
            </div>

            {/* Quick stats ribbon below buttons */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 border-t border-slate-900/[0.06] pt-5 text-xs text-slate-600 lg:justify-start lg:gap-7 lg:text-sm">
              <div className="flex items-center gap-2">
                <Award size={15} className="text-[#b6884c]" />
                <span className="font-semibold text-slate-800">Harvard Law LL.M.</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#b6884c]" />
                <span className="font-semibold text-slate-800">Supreme Court Bar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-[#b6884c]" />
                <span className="font-semibold text-slate-800">25+ Years Experience</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Photo Card (Mobile order-2): Positioned right under the name on mobile, and in right column on desktop! */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="order-2 relative flex min-h-[350px] items-center justify-center my-2 lg:my-0 lg:order-none lg:min-h-[580px]"
          style={{ transformStyle: 'preserve-3d' }}
          ref={sceneRef}
        >
          {/* Ambient color glow behind card */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#b6884c]/28 via-[#1e3a8a]/20 to-[#7c3aed]/25 blur-3xl lg:h-[460px] lg:w-[460px]"
          />

          {/* 3D Orbit rings with glowing satellites */}
          <div className="orbit-ring r1">
            <div className="orbit-dot" />
          </div>
          <div className="orbit-ring r2">
            <div className="orbit-dot" />
          </div>
          <div className="orbit-ring r3">
            <div className="orbit-dot" />
          </div>

          {/* 3D Tilt Card Container */}
          <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
            <div
              ref={cardRef}
              className="hero-card relative flex h-[390px] w-[270px] flex-col items-center justify-between rounded-[30px] border border-white/70 bg-gradient-to-br from-white/95 via-white/85 to-white/65 p-5 shadow-[0_30px_70px_rgba(15,23,42,0.16)] backdrop-blur-2xl transition-transform duration-100 ease-out lg:h-[540px] lg:w-[380px] lg:rounded-[36px] lg:p-8"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Rotating Circular Seal + Real Portrait of Jonathan Vance */}
              <div
                className="relative z-[2] mt-1 h-[180px] w-[180px] lg:mt-3 lg:h-[270px] lg:w-[270px]"
                style={{ transform: 'translateZ(40px)' }}
              >
                {/* Behind portrait glow */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#b6884c]/30 via-[#1e3a8a]/20 to-[#7c3aed]/25 blur-xl"
                />

                {/* Outer Rotating Seal Ring */}
                <div className="absolute inset-0 rounded-full border border-amber-800/25 bg-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_44px_rgba(182,136,76,0.22)] backdrop-blur-md">
                  <svg
                    viewBox="0 0 200 200"
                    className="seal-ring absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id={sealPathId}
                        d="M100,100 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0"
                      />
                    </defs>
                    <text className="fill-amber-900" fontSize="10.2" fontWeight="700" letterSpacing="4.1">
                      <textPath href={`#${sealPathId}`}>
                        SENIOR ADVOCATE • SUPREME COURT OF INDIA • 25+ YEARS •
                      </textPath>
                    </text>
                  </svg>
                  <span
                    className="absolute left-1/2 top-[3px] h-2.5 w-2.5 -translate-x-1/2 rotate-45 rounded-[2px] bg-[#b6884c] shadow-[0_0_10px_rgba(182,136,76,0.8)]"
                    aria-hidden="true"
                  />
                </div>

                {/* Real High-Resolution Portrait Photo */}
                <div
                  className="absolute inset-[22px] overflow-hidden rounded-full border-2 border-white/80 shadow-[0_12px_28px_rgba(0,0,0,0.18)] lg:inset-[30px]"
                  style={{
                    boxShadow:
                      'inset 0 0 0 2px rgba(182,136,76,0.4), 0 16px 36px rgba(182,136,76,0.30)',
                  }}
                >
                  <img
                    src="/jonathan_vance.jpg"
                    alt="Senior Advocate Jonathan Vance"
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle inner vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
              </div>

              {/* Personal Details on Card */}
              <div className="relative z-[2] text-center" style={{ transform: 'translateZ(30px)' }}>
                <h3 className="text-xl font-bold text-slate-900 lg:text-[1.65rem]">
                  Adv. Jonathan Vance
                </h3>
                <p className="mt-0.5 text-xs font-semibold text-amber-800 lg:text-sm">
                  Senior Advocate • Supreme Court of India
                </p>
                <p className="mt-0.5 text-[0.72rem] text-slate-500">
                  LL.M. Harvard Law School • Chambers Enclave
                </p>
              </div>

              {/* Social / Direct Action Links on Card */}
              <div className="relative z-[2] flex gap-2.5 lg:gap-3.5" style={{ transform: 'translateZ(35px)' }}>
                {[
                  { label: 'in', name: 'LinkedIn', href: 'https://linkedin.com' },
                  { label: 'scba', name: 'Supreme Court Bar', href: 'https://scbaindia.org' },
                  { label: 'ica', name: 'Arbitration Council', href: 'https://icaindia.co.in' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="flex h-8 px-2.5 items-center justify-center rounded-xl border border-slate-900/10 bg-white/80 text-[0.68rem] font-bold uppercase tracking-wider text-slate-700 transition-all hover:-translate-y-1 hover:scale-105 hover:bg-amber-50 hover:text-amber-900 hover:shadow-[0_8px_20px_rgba(182,136,76,0.22)] lg:h-9 lg:px-3 lg:text-xs"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Floating verification badges on the 3D card (kept snug on mobile) */}
            <div
              className="absolute left-1 top-[10%] z-[3] flex items-center gap-1.5 rounded-xl border border-white/80 bg-white/95 px-2.5 py-1.5 text-[0.72rem] font-semibold text-slate-800 shadow-[0_10px_26px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:left-[-38px] lg:top-[16%] lg:px-4 lg:py-2.5 lg:text-[0.84rem]"
              style={{ transform: 'translateZ(50px) rotateY(-8deg)' }}
            >
              <CheckCircle size={15} className="text-[#b6884c] lg:size-5" />
              <span>Supreme Court Bar</span>
            </div>

            <div
              className="absolute bottom-[-10px] right-1 z-[3] flex items-center gap-1.5 rounded-xl border border-white/80 bg-white/95 px-2.5 py-1.5 text-[0.72rem] font-semibold text-slate-800 shadow-[0_10px_26px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:bottom-[-18px] lg:right-[-42px] lg:px-4 lg:py-2.5 lg:text-[0.84rem]"
              style={{ transform: 'translateZ(45px) rotateY(8deg)' }}
            >
              <Scale size={15} className="text-[#b6884c] lg:size-5" />
              <span>98.4% Win Rate</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop Scroll indicator */}
      <div className="scroll-indicator absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-slate-400 lg:flex animate-bounce">
        <ChevronDown size={20} />
        Scroll down
      </div>
    </section>
  )
}
