import React from 'react'
import { motion } from 'framer-motion'
import { Award, BookOpen, Scale, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function About({ onOpenConsultation }) {
  return (
    <section id="about" className="py-24 bg-[#f8f5ee] text-[#1c1d22] relative border-b border-[#e9e1d3] overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#c59b66]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0e6d6] border border-[#d8c5ab] text-[#936433] text-xs font-bold tracking-wider uppercase mb-3 shadow-sm"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>Distinguished Legal Counsel</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#111317] tracking-tight">
            Advocate Jonathan Vance
          </h2>
          <p className="mt-4 text-[#52525b] text-base leading-relaxed">
            Senior Advocate & Managing Partner at Respet Chambers. Dedicated to high-stakes litigation, boardroom corporate strategy, and constitutional justice for over two decades.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border-2 border-[#e6dcce] shadow-2xl bg-white group"
            >
              <img
                src="/senior-attorney.jpg"
                alt="Senior Advocate Jonathan Vance"
                className="w-full h-[480px] sm:h-[540px] object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />

              {/* Floating Experience Badge with animated icon */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#e5dccb] shadow-xl">
                <div className="flex items-center gap-3">
                  <motion.div 
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                    className="w-10 h-10 rounded-lg bg-[#f5ecde] flex items-center justify-center text-[#b6884c]"
                  >
                    <Award className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <span className="text-2xl font-bold font-serif text-[#111317]">25+</span>
                    <p className="text-[11px] text-[#71717a] uppercase font-bold">Years of Advocacy</p>
                  </div>
                </div>
              </div>

              {/* Bottom Quote Badge */}
              <div className="absolute bottom-6 inset-x-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#e5dccb] shadow-lg">
                <p className="text-xs italic text-[#7c5322] font-serif font-medium">
                  "Justice is not granted by happenstance; it is secured through unrelenting preparation, moral courage, and masterclass courtroom strategy."
                </p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-[#52525b]">
                  <span className="font-bold text-[#18191c]">Jonathan Vance, LL.M.</span>
                  <span className="text-[#b6884c] font-semibold">Supreme Court Bar</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio, Philosophy & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#111317] leading-snug">
                Pioneering Landmark Verdicts with <span className="gold-gradient-text">Relentless Integrity</span>
              </h3>
              
              <p className="text-[#4b5563] text-base leading-relaxed">
                As founder of Respet Legal Chambers, Adv. Jonathan Vance has represented multinational conglomerates, government bodies, prominent founders, and individuals in landmark civil, criminal, and commercial cases before the Supreme Court and High Courts.
              </p>
              
              <p className="text-[#4b5563] text-base leading-relaxed">
                Our chambers combine classical courtroom rhetoric with modern investigative research, forensic accounting, and cutting-edge statutory interpretation.
              </p>
            </div>

            {/* Core Pillars Grid with animated icon hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <motion.div 
                whileHover={{ y: -4, borderColor: '#b6884c' }}
                className="p-4 rounded-xl bg-white border border-[#e8dfd0] shadow-sm transition-all"
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    className="p-2.5 rounded-lg bg-[#f8f1e5] text-[#b6884c] mt-0.5 shadow-sm"
                  >
                    <Shield className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-[#18191c] text-sm">Ironclad Confidentiality</h4>
                    <p className="text-xs text-[#52525b] mt-1 leading-normal">
                      Every document and evidentiary strategy is guarded with absolute statutory attorney-client privilege.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: '#b6884c' }}
                className="p-4 rounded-xl bg-white border border-[#e8dfd0] shadow-sm transition-all"
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: -10 }}
                    className="p-2.5 rounded-lg bg-[#f8f1e5] text-[#b6884c] mt-0.5 shadow-sm"
                  >
                    <Award className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-[#18191c] text-sm">Supreme Court Audience</h4>
                    <p className="text-xs text-[#52525b] mt-1 leading-normal">
                      Full right of audience across all national High Courts and international arbitration tribunals.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: '#b6884c' }}
                className="p-4 rounded-xl bg-white border border-[#e8dfd0] shadow-sm transition-all"
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 12 }}
                    className="p-2.5 rounded-lg bg-[#f8f1e5] text-[#b6884c] mt-0.5 shadow-sm"
                  >
                    <Scale className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-[#18191c] text-sm">98.4% Win & Resolution Rate</h4>
                    <p className="text-xs text-[#52525b] mt-1 leading-normal">
                      Exceptional track record spanning 1,850+ favorable orders, dismissals, and high-value settlements.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4, borderColor: '#b6884c' }}
                className="p-4 rounded-xl bg-white border border-[#e8dfd0] shadow-sm transition-all"
              >
                <div className="flex items-start gap-3">
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: -12 }}
                    className="p-2.5 rounded-lg bg-[#f8f1e5] text-[#b6884c] mt-0.5 shadow-sm"
                  >
                    <BookOpen className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-[#18191c] text-sm">Bespoke Trial Strategy</h4>
                    <p className="text-xs text-[#52525b] mt-1 leading-normal">
                      Tailored legal remedies designed specifically for complex corporate and individual litigation.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Signature & CTA */}
            <div className="pt-6 flex flex-wrap items-center justify-between gap-6 border-t border-[#e2d8c7]">
              {/* Handwritten style SVG signature */}
              <div className="flex flex-col">
                <svg className="w-48 h-12 text-[#b6884c]" viewBox="0 0 200 50" fill="none" stroke="currentColor">
                  <path
                    d="M10 35 C 30 10, 40 45, 60 20 C 70 10, 80 40, 100 25 C 120 15, 140 38, 170 18 C 180 12, 190 28, 195 22"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line x1="20" y1="42" x2="160" y2="40" strokeWidth="1.5" strokeDasharray="3 3" />
                </svg>
                <span className="text-[11px] text-[#71717a] font-bold tracking-wider uppercase mt-1">
                  Adv. Jonathan Vance — Managing Partner
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#b6884c] hover:bg-[#9d7036] text-white font-semibold text-sm transition-all shadow-md shadow-[#b6884c]/20"
              >
                <span>Book Legal Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
