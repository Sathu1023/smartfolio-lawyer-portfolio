import { motion } from 'framer-motion'
import { Star, Scale } from 'lucide-react'

const testimonials = [
  {
    name: 'Vikramaditya Singhania',
    role: 'Group General Counsel — Industrial Holdings',
    text: '"Advocate Jonathan Vance’s courtroom mastery is simply unrivaled. When our conglomerate faced a hostile $45M tax penalty, his team prepared a groundbreaking constitutional argument that secured a unanimous victory at the Supreme Court."',
    avatar: 'linear-gradient(135deg, #b6884c, #1e3a8a)',
    initials: 'VS',
    quote: 'text-amber-600/[0.18]',
  },
  {
    name: 'Dr. Eleanor Sterling',
    role: 'Chief Executive Officer — Biotech Corp',
    text: '"In our darkest hour during an unexpected commercial inquiry, Adv. Vance acted with surgical precision. Within 48 hours, he obtained an anticipatory injunction, completely dismantling fabricated allegations."',
    avatar: 'linear-gradient(135deg, #1e3a8a, #7c3aed)',
    initials: 'ES',
    quote: 'text-blue-600/[0.18]',
  },
  {
    name: 'Rajesh K. Oberoi',
    role: 'Managing Trustee — Heritage Estates',
    text: '"Resolving a high-stakes family trust and multi-million dollar property partition seemed impossible until Adv. Vance took the helm. His deep grasp of trust laws preserved our legacy without public acrimony."',
    avatar: 'linear-gradient(135deg, #7c3aed, #991b1b)',
    initials: 'RO',
    quote: 'text-purple-600/[0.16]',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-[5%] py-16 lg:px-[6%] lg:py-24">
      <div className="mb-10 text-center lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-800/20 bg-amber-50/80 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-amber-800 shadow-[0_8px_24px_rgba(182,136,76,0.10)] backdrop-blur-lg lg:mb-5 lg:text-xs"
        >
          <Scale size={14} className="text-[#b6884c]" />
          Client Endorsements
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(1.8rem,8vw,2.4rem)] font-bold text-slate-900 lg:text-[clamp(2.2rem,4.8vw,3.4rem)]"
        >
          Client <span className="shimmer-text">Trust</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-3 max-w-[680px] text-sm leading-relaxed text-slate-600 lg:text-base"
        >
          Real experiences from corporate general counsels, entrepreneurs, and families represented in critical court proceedings.
        </motion.p>
      </div>

      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-900/[0.06] bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_18px_36px_rgba(182,136,76,0.12)] lg:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="mb-4 flex items-center gap-1 text-[#b6884c]">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-[#b6884c]" />
                ))}
              </div>
              <p className="font-serif text-sm leading-relaxed text-slate-700 italic lg:text-[0.95rem]">
                {t.text}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3.5 border-t border-slate-900/[0.06] pt-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-md"
                style={{ background: t.avatar }}
              >
                {t.initials}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                <p className="text-[11px] font-medium text-slate-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
