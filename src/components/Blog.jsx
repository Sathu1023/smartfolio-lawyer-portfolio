import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react'

const ARTICLES = [
  {
    id: 1,
    title: 'Understanding the New Criminal Law Codes: Critical Shifts in Bail Jurisprudence',
    excerpt:
      'A deep-dive analysis of procedural changes in pre-trial detention, digital evidence admissibility under the Bharatiya Sakshya Adhiniyam, and safeguarding constitutional liberties.',
    date: 'Oct 14, 2026',
    readTime: '6 min read',
    category: 'Criminal Law',
    author: 'Adv. Jonathan Vance',
  },
  {
    id: 2,
    title: 'Structuring Cross-Border Joint Ventures: Risk Allocation & Dispute Clauses',
    excerpt:
      'Key considerations when drafting multi-tier escalation clauses, governing law selection, and institutional arbitration rules under SIAC and LCIA conventions.',
    date: 'Sep 28, 2026',
    readTime: '8 min read',
    category: 'Corporate & M&A',
    author: 'Adv. Jonathan Vance',
  },
  {
    id: 3,
    title: 'Arbitration vs. Commercial High Court Litigation: Tactical Decision Matrix',
    excerpt:
      'Comparing enforcement timelines, emergency interim relief provisions, and confidentiality protocols for corporate disputes exceeding $10 Million.',
    date: 'Aug 19, 2026',
    readTime: '5 min read',
    category: 'Arbitration',
    author: 'Respet Research Desk',
  },
]

export default function Blog({ onSelectArticle }) {
  return (
    <section id="blog" className="py-24 bg-[#f8f5ee] text-[#1c1d22] relative border-b border-[#e9e1d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#b6884c] text-xs font-bold uppercase tracking-wider">
                Legal Insights & Articles —
              </span>
              <div className="h-0.5 w-6 bg-[#b6884c]" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#111317] tracking-tight">
              Publications & Legal Briefs
            </h2>
            <p className="mt-3 text-[#52525b] max-w-xl text-base">
              Thought leadership, statutory commentaries, and strategic analyses from our senior research team.
            </p>
          </div>

          <a
            href="#contact"
            className="text-xs font-bold text-[#b6884c] hover:text-[#9d7036] flex items-center gap-2 transition-colors"
          >
            <span>Subscribe to Chambers Journal</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, borderColor: '#b6884c' }}
              transition={{ duration: 0.35, delay: index * 0.1 }}
              className="bg-white border border-[#e8ded0] rounded-xl overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="p-7">
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="font-bold text-[#8e602c] bg-[#f8efe2] px-2.5 py-0.5 rounded-full border border-[#e4d4bd]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#71717a]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-serif text-[#111317] group-hover:text-[#b6884c] transition-colors mb-3 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#52525b] leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom author & link */}
              <div className="px-7 py-4 bg-[#fbf9f4] border-t border-[#ede5d8] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#52525b]">
                  <Calendar className="w-3.5 h-3.5 text-[#b6884c]" />
                  <span>{article.date}</span>
                </div>

                <button
                  onClick={() => onSelectArticle && onSelectArticle(article)}
                  className="font-bold text-[#b6884c] group-hover:text-[#9d7036] flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
