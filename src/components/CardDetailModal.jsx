import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Scale, Landmark, Gavel, CheckCircle2, ArrowRight } from 'lucide-react'

const CARD_DETAILS = {
  professional: {
    title: 'Professional Service',
    icon: Scale,
    tagline: 'Uncompromising Dedication to Client Interests & Ethical Precision',
    description:
      'At Respet Chambers, professional service means round-the-clock availability for critical legal hearings, direct access to senior counsel, meticulous document drafting, and transparent litigation counsel. Every client is assigned a dedicated senior associate to guarantee seamless, continuous case updates.',
    pillars: [
      'Direct personal counsel from Senior Advocate Jonathan Vance on key arguments',
      'Exhaustive evidentiary audits and forensic cross-examination preparation',
      'Daily trial monitoring and instant reporting after every judicial hearing',
      'Ironclad statutory confidentiality protected under legal privilege',
    ],
    metric: '99.4% Client Recommendation Rating',
  },
  result: {
    title: 'Quick & Positive Result',
    icon: Landmark,
    tagline: 'High Win Rates, Rapid Injunctions & Strategic Dispute Settlements',
    description:
      'We combine deep mastery of statutory law with swift tactical remedies. Whether obtaining immediate ex-parte stay orders before High Courts or structuring confidential multi-million dollar arbitrations, our strategy prioritizes resolving legal disputes with maximum speed and optimal client leverage.',
    pillars: [
      'Emergency 24-hr petitions for anticipatory bail, stays, and status-quo injunctions',
      'High-velocity commercial arbitration settlement protocols (SIAC & LCIA)',
      'Pre-litigation risk audits preventing protracted multi-year court delays',
      'Over $140M successfully recovered in claims and tax penalty reversals',
    ],
    metric: '98.4% Win & Resolution Rate in Commercial & Appellate Courts',
  },
  expert: {
    title: 'Top Legal Expert',
    icon: Gavel,
    tagline: 'Quarter-Century of Battle-Tested Trial & Supreme Court Experience',
    description:
      'Led by Adv. Jonathan Vance (LL.M. Harvard Law School), our chambers combine academic prestige with over 25 years of fierce courtroom defense. With rights of audience across the Supreme Court and all national High Courts, our counsel represents the benchmark of top-tier legal advocacy.',
    pillars: [
      'Empaneled as Senior Advocate with over 1,850+ successfully resolved litigations',
      'Recognized by Chambers & Partners Band 1 and Legal 500 for eminent trial strategy',
      'Faculty & keynote contributor to national constitutional and corporate law symposiums',
      'Fellow of the Chartered Institute of Arbitrators (CIArb, London)',
    ],
    metric: '25+ Years of Dedicated Appellate & Trial Practice',
  },
}

export default function CardDetailModal({ selectedCard, onClose, onOpenConsultation }) {
  if (!selectedCard || !CARD_DETAILS[selectedCard]) return null

  const data = CARD_DETAILS[selectedCard]
  const Icon = data.icon

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white border-2 border-[#e6dcce] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-[#18191c] my-8 overflow-hidden"
        >
          {/* Top gold accent line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#9d7036] via-[#b6884c] to-[#c59b66]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#f4ede1] text-[#52525b] hover:text-[#18191c] hover:bg-[#e8ded0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon Badge with animated hover */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-16 h-16 rounded-full bg-[#f6eee2] border-2 border-[#b6884c] flex items-center justify-center text-[#b6884c] mb-5 shadow-sm"
          >
            <Icon className="w-8 h-8 text-[#b6884c]" />
          </motion.div>

          <span className="text-xs font-bold text-[#b6884c] uppercase tracking-wider block mb-1">
            Chambers Standards & Guarantees
          </span>

          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#111317] mb-2">
            {data.title}
          </h3>

          <p className="text-sm font-bold text-[#8e602c] mb-4">
            {data.tagline}
          </p>

          <p className="text-xs sm:text-sm text-[#4b5563] leading-relaxed mb-6">
            {data.description}
          </p>

          {/* Pillars List */}
          <div className="space-y-2.5 mb-6 p-4 rounded-xl bg-[#faf6ee] border border-[#e8ded0]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111317] mb-3">
              Core Principles in Action:
            </h4>
            {data.pillars.map((pillar, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#27272a]">
                <CheckCircle2 className="w-4 h-4 text-[#b6884c] shrink-0 mt-0.5" />
                <span>{pillar}</span>
              </div>
            ))}
          </div>

          {/* Metric banner */}
          <div className="p-3.5 rounded-lg bg-[#f8efe2] border border-[#e5d6c2] text-xs font-bold text-[#8e602c] text-center mb-6 shadow-sm">
            ★ {data.metric}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#ede5d8]">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-xs font-bold text-[#52525b] hover:text-[#18191c] transition-colors"
            >
              Back to Overview
            </button>
            <button
              onClick={() => {
                onClose()
                onOpenConsultation()
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#b6884c] hover:bg-[#9d7036] text-white font-bold text-xs transition-colors shadow-md"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
