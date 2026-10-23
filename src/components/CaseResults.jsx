import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scale, CheckCircle2, Trophy, ArrowRight } from 'lucide-react'

const CASES = [
  {
    id: 1,
    title: 'Apex Global Telecom vs. Regulatory Authority',
    category: 'Corporate',
    court: 'Supreme Court of India — Constitutional Bench',
    verdict: '$42.5M Penalty Quashed & Spectrum Restored',
    year: '2024',
    summary:
      'Challenged arbitrary retrospective spectrum regulatory penalties levied on a top telecommunications operator. Argued violation of Article 14 and administrative disproportionality.',
    highlight: 'Landmark constitutional judgment cited across telecom disputes nationwide.',
  },
  {
    id: 2,
    title: 'State vs. Dr. Alistair Ross (Senior Board Director)',
    category: 'Criminal',
    court: 'Special CBI Trial Court & High Court',
    verdict: 'Honorable Acquittal on All 14 Fraud Counts',
    year: '2023',
    summary:
      'Defended the executive director against false allegations of corporate embezzlement and criminal breach of trust. Conducted exhaustive 40-day cross-examination of forensic auditors.',
    highlight: 'Uncovered whistleblower forgery in audited ledger entries; full bail and acquittal.',
  },
  {
    id: 3,
    title: 'Crown Real Estate vs. Municipal Development Board',
    category: 'Property',
    court: 'High Court Commercial Division',
    verdict: 'Injunction Lifted & $65M Project Cleared',
    year: '2024',
    summary:
      'Defended title validity of a prime 22-acre commercial IT park against retrospective municipal acquisition notices. Successfully obtained ex-parte stay order within 24 hours.',
    highlight: 'Secured permanent injunction protecting developer investment and 4,000 jobs.',
  },
  {
    id: 4,
    title: 'Meridian Pharma vs. BioGenetics International',
    category: 'Corporate',
    court: 'WIPO Arbitration & Commercial High Court',
    verdict: 'Patent Injunction & $18M Royalty Settlement',
    year: '2023',
    summary:
      'Enforced proprietary medical formulation patents against international reverse-engineered generics. Obtained an immediate cross-border injunction restricting sales.',
    highlight: 'Resolved within 6 months through high-level arbitration with perpetual royalties.',
  },
  {
    id: 5,
    title: 'Banking Consortium vs. Apex Energy Infrastructure',
    category: 'Banking',
    court: 'National Company Law Tribunal (NCLT Bench)',
    verdict: '$88M Corporate Debt Resolution Approved',
    year: '2022',
    summary:
      'Represented a leading consortium of institutional lenders under the Insolvency and Bankruptcy Code (IBC). Formulated a 100% compliant resolution strategy avoiding liquidation.',
    highlight: 'Maximized asset value recovery at 92 cents on the dollar.',
  },
  {
    id: 6,
    title: 'Citizen Rights Collective vs. State Environmental Dept',
    category: 'Constitutional',
    court: 'Supreme Court of India (Writ Jurisdiction)',
    verdict: 'Forest Conservation Order & Industrial Halt',
    year: '2024',
    summary:
      'Pro Bono Public Interest Litigation (PIL) challenging illegal environmental clearance granted to an ecologically fragile wetland reserve.',
    highlight: 'Supreme Court passed an irreversible stay and directed restoration of the wetland.',
  },
]

const TABS = ['All Cases', 'Corporate', 'Criminal', 'Property', 'Constitutional', 'Banking']

export default function CaseResults({ onSelectCase }) {
  const [activeTab, setActiveTab] = useState('All Cases')

  const filteredCases =
    activeTab === 'All Cases'
      ? CASES
      : CASES.filter((c) => c.category === activeTab)

  return (
    <section id="portfolio" className="py-24 bg-[#f8f5ee] text-[#1c1d22] relative border-b border-[#e9e1d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0e6d6] border border-[#d8c5ab] text-[#936433] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Trophy className="w-3.5 h-3.5" />
            <span>Case Portfolio & Landmark Verdicts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#111317] tracking-tight">
            Proven Victories in High-Stakes Litigation
          </h2>
          <p className="mt-4 text-[#52525b] text-base">
            Explore notable courtroom judgments, arbitration awards, and regulatory clearances won through the chambers of Respet.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === tab
                  ? 'bg-[#b6884c] text-white shadow-md shadow-[#b6884c]/20'
                  : 'bg-white text-[#52525b] hover:text-[#18191c] hover:bg-[#faf5ee] border border-[#e5dcce]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCases.map((c, index) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, borderColor: '#b6884c' }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white border border-[#e8dfd0] rounded-xl p-6 flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div>
                  {/* Top metadata */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-[#8e602c] bg-[#f8efe2] border border-[#e2d4bf] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {c.category}
                    </span>
                    <span className="text-xs text-[#71717a] font-medium">
                      Verdict {c.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-serif text-[#18191c] group-hover:text-[#b6884c] transition-colors mb-2 line-clamp-2">
                    {c.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-[#52525b] mb-4">
                    <Scale className="w-3.5 h-3.5 text-[#b6884c] shrink-0" />
                    <span className="truncate">{c.court}</span>
                  </div>

                  {/* Verdict Badge */}
                  <div className="p-3.5 rounded-lg bg-[#faf6ee] border border-[#e8dfd0] mb-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#b6884c] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#71717a] block">
                          Ruling / Settlement
                        </span>
                        <p className="text-xs font-bold text-[#18191c]">
                          {c.verdict}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#52525b] leading-relaxed mb-4">
                    {c.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#ede5d8] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#8e602c] font-semibold italic">
                    {c.highlight}
                  </span>
                  <button
                    onClick={() => onSelectCase && onSelectCase(c)}
                    className="p-1 text-[#b6884c] group-hover:text-[#9d7036] transition-colors"
                    title="View Case Brief"
                  >
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
