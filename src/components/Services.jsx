import { motion } from 'framer-motion'
import { Landmark, Briefcase, ShieldAlert, Building2, Sparkles, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Landmark,
    title: 'Constitutional & Writs',
    description: 'Article 32 & 226 writ petitions before High Courts and the Supreme Court upholding fundamental civil & corporate rights.',
    from: '#b6884c',
    to: '#c59b66',
    glow: 'rgba(182,136,76,0.22)',
  },
  {
    icon: Briefcase,
    title: 'Corporate & Arbitration',
    description: 'Cross-border dispute resolution under SIAC, LCIA, and ICC rules, joint venture disputes, and M&A compliance advisory.',
    from: '#1e3a8a',
    to: '#3b82f6',
    glow: 'rgba(30,58,138,0.22)',
  },
  {
    icon: ShieldAlert,
    title: 'Criminal Defense & Bail',
    description: 'Relentless trial advocacy for complex white-collar financial investigations, urgent bail hearings, and CBI/ED appellate defense.',
    from: '#7c3aed',
    to: '#a855f7',
    glow: 'rgba(124,58,237,0.22)',
  },
  {
    icon: Building2,
    title: 'Real Estate Litigation',
    description: 'High-value commercial title due diligence, RERA appellate proceedings, developer disputes, and permanent injunction stays.',
    from: '#991b1b',
    to: '#ea580c',
    glow: 'rgba(153,27,27,0.24)',
  },
]

export default function Services({ onBook }) {
  return (
    <section id="services" className="px-[5%] py-16 lg:px-[6%] lg:py-24">
      <div className="mb-10 text-center lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-800/20 bg-amber-50/80 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-amber-800 shadow-[0_8px_24px_rgba(182,136,76,0.10)] backdrop-blur-lg lg:mb-5 lg:text-xs"
        >
          <Sparkles size={14} className="text-[#b6884c]" />
          My Practice Disciplines
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(1.8rem,8vw,2.4rem)] font-bold text-slate-900 lg:text-[clamp(2.2rem,4.8vw,3.4rem)]"
        >
          Specialized <span className="shimmer-text">Legal Counsel</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-3 max-w-[680px] text-sm leading-relaxed text-slate-600 lg:text-base lg:leading-relaxed"
        >
          I bring masterclass trial preparation and decisive strategy to constitutional, commercial arbitration, and appellate defense matters.
        </motion.p>
      </div>

      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl border border-slate-900/[0.06] bg-white/80 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all duration-300 hover:shadow-[0_20px_40px_rgba(182,136,76,0.14)] lg:p-8"
          >
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl transition-opacity duration-500 opacity-60 group-hover:opacity-100"
              style={{ background: service.glow }}
            />

            <div
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 shadow-sm"
              style={{ background: `${service.from}15` }}
            >
              <service.icon size={28} style={{ stroke: service.from }} />
            </div>

            <h3 className="font-display text-xl font-bold text-slate-900 lg:text-[1.35rem]">{service.title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 lg:text-sm">{service.description}</p>

            <button
              type="button"
              onClick={onBook}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold transition-all group-hover:gap-2.5"
              style={{ color: service.from }}
            >
              <span>Schedule Assessment</span>
              <ArrowRight size={14} />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
