import React from 'react'
import { motion } from 'framer-motion'
import { Award, ShieldCheck, Scale, Check } from 'lucide-react'

const STATS = [
  { label: 'Overall Case Win Rate', value: '98.4%', sub: 'Verified Court Orders & Arbitrations' },
  { label: 'Cases Successfully Resolved', value: '1,850+', sub: 'High Court & Supreme Court' },
  { label: 'Client Recoveries Won', value: '$140M+', sub: 'Civil, Commercial & Tax Claims' },
  { label: 'Years of Legal Practice', value: '25+', sub: 'Managing Partner Experience' },
]

const SKILL_BARS = [
  { name: 'Supreme Court Appellate & Writs', level: 98, note: 'Constitutional law & landmark precedent' },
  { name: 'Trial Court Advocacy & Cross-Examination', level: 96, note: 'Criminal defense & evidentiary mastery' },
  { name: 'Cross-Border Corporate Arbitration (SIAC/LCIA)', level: 94, note: 'Commercial contracts & mergers' },
  { name: 'Real Estate & Title Litigation', level: 95, note: 'Injunctions, ownership & RERA claims' },
  { name: 'Financial Crimes & White-Collar Defense', level: 97, note: 'Bail, PMLA & regulatory compliance' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#f8f5ee] text-[#1c1d22] relative border-b border-[#e9e1d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0e6d6] border border-[#d8c5ab] text-[#936433] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Excellence & Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#111317] tracking-tight">
            Advocacy Skills & Legal Mastery
          </h2>
          <p className="mt-4 text-[#52525b] text-base">
            Quantifiable results backed by an unwavering commitment to trial precision, forensic depth, and strategic negotiation.
          </p>
        </div>

        {/* 4 Large Highlight Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, borderColor: '#b6884c' }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              className="bg-white border border-[#e8dfd0] rounded-xl p-6 text-center relative overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#b6884c]/5 rounded-bl-full pointer-events-none group-hover:bg-[#b6884c]/15 transition-colors" />

              <span className="text-4xl sm:text-5xl font-serif font-bold text-[#111317] group-hover:text-[#b6884c] transition-colors block mb-2">
                {stat.value}
              </span>
              <h3 className="text-sm font-bold text-[#27272a] tracking-wide mb-1">
                {stat.label}
              </h3>
              <p className="text-[11px] text-[#71717a]">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Two-Column: Proficiency Bars + Chambers Accreditations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Skill Progress Bars */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#111317] mb-6 flex items-center gap-2">
              <Scale className="w-6 h-6 text-[#b6884c]" />
              <span>Core Courtroom & Advisory Competencies</span>
            </h3>

            <div className="space-y-5">
              {SKILL_BARS.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-sm font-bold text-[#27272a]">
                      {skill.name}
                    </span>
                    <span className="text-xs font-bold text-[#b6884c]">
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress track */}
                  <div className="w-full h-3 bg-[#e8e0d2] rounded-full overflow-hidden p-0.5 shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-[#9d7036] via-[#b6884c] to-[#c59b66]"
                    />
                  </div>

                  <p className="text-[11px] text-[#71717a]">
                    {skill.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Accreditations, Fellowships & Honors */}
          <div className="lg:col-span-5 bg-white border border-[#e8dfd0] rounded-2xl p-7 relative shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="p-2.5 rounded-xl bg-[#f8f1e5] text-[#b6884c] shadow-sm"
              >
                <ShieldCheck className="w-6 h-6" />
              </motion.div>
              <div>
                <h4 className="text-lg font-serif font-bold text-[#111317]">Bar Council & Chambers</h4>
                <p className="text-xs text-[#71717a]">Authorized Standing & Honors</p>
              </div>
            </div>

            <ul className="space-y-4">
              <motion.li whileHover={{ x: 4 }} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#faf6ee] border border-[#ebe1d3]">
                <div className="p-1 rounded bg-[#b6884c]/20 text-[#b6884c] mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#18191c]">Bar Council of India / Delhi Bar</h5>
                  <p className="text-[11px] text-[#52525b]">Enrolled Senior Advocate, Bar ID: D/1999/8472</p>
                </div>
              </motion.li>

              <motion.li whileHover={{ x: 4 }} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#faf6ee] border border-[#ebe1d3]">
                <div className="p-1 rounded bg-[#b6884c]/20 text-[#b6884c] mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#18191c]">International Bar Association (IBA)</h5>
                  <p className="text-[11px] text-[#52525b]">Active Fellow & Commercial Arbitration Specialist</p>
                </div>
              </motion.li>

              <motion.li whileHover={{ x: 4 }} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#faf6ee] border border-[#ebe1d3]">
                <div className="p-1 rounded bg-[#b6884c]/20 text-[#b6884c] mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#18191c]">Chambers & Partners Band 1 Lawyer</h5>
                  <p className="text-[11px] text-[#52525b]">Recognized for Eminent Trial Strategy (2022 - 2026)</p>
                </div>
              </motion.li>

              <motion.li whileHover={{ x: 4 }} className="flex items-start gap-3 p-3.5 rounded-lg bg-[#faf6ee] border border-[#ebe1d3]">
                <div className="p-1 rounded bg-[#b6884c]/20 text-[#b6884c] mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#18191c]">Chartered Institute of Arbitrators (CIArb)</h5>
                  <p className="text-[11px] text-[#52525b]">Empaneled Arbitrator for Cross-Border Disputes</p>
                </div>
              </motion.li>
            </ul>

            <div className="mt-6 pt-5 border-t border-[#eee6d8] flex items-center justify-between text-xs">
              <span className="text-[#71717a]">Admitted in all High Courts</span>
              <span className="font-bold text-[#b6884c]">All-India Audience</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
