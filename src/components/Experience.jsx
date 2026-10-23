import { motion } from 'framer-motion'
import {
  Award,
  BadgeCheck,
  Briefcase,
  GraduationCap,
  Scale,
  MapPin,
  Quote,
  Sparkles,
  ShieldCheck,
  Landmark,
} from 'lucide-react'
import { LogoMark } from './Logo'

const journey = [
  {
    period: '2018 — Present',
    current: true,
    role: 'Senior Managing Counsel',
    place: 'Vance Chambers, Supreme Court Enclave, New Delhi',
    icon: Scale,
    summary:
      'Directing high-stakes Supreme Court appellate benches, constitutional writs, cross-border corporate arbitrations, and high-profile criminal defenses.',
    tags: ['Supreme Court', 'Arbitration', 'Constitutional Writs'],
    from: '#b6884c',
    to: '#c59b66',
    glow: 'rgba(182,136,76,0.22)',
  },
  {
    period: '2010 — 2018',
    role: 'Senior Advocate (Designated)',
    place: 'Supreme Court & High Court of Delhi',
    icon: Landmark,
    summary:
      'Argued over 400+ landmark appeals, special leave petitions (SLPs), and commercial arbitrations before federal benches with a 97.4% resolution rate.',
    tags: ['Special Leave Petitions', 'High Court Writs', 'NCLT'],
    from: '#1e3a8a',
    to: '#3b82f6',
    glow: 'rgba(30,58,138,0.20)',
  },
  {
    period: '2003 — 2010',
    role: 'Lead Litigation Partner',
    place: 'Vance & Sterling Legal Associates',
    icon: Briefcase,
    summary:
      'Headed corporate dispute resolution. Advised consortiums of multinational banks on recovery of over $120M in distressed assets and contracts.',
    tags: ['Commercial Contracts', 'Insolvency', 'Debt Recovery'],
    from: '#7c3aed',
    to: '#a855f7',
    glow: 'rgba(124,58,237,0.20)',
  },
  {
    period: '1998 — 1999',
    role: 'LL.M. — Master of Laws',
    place: 'Harvard Law School, Cambridge, MA',
    icon: GraduationCap,
    summary:
      'Specialized in Corporate Law and International Dispute Resolution. Awarded the Dean’s Scholar Prize for excellence in appellate jurisprudence.',
    tags: ['Harvard Law', 'Dean’s Scholar', 'LL.M.'],
    from: '#991b1b',
    to: '#ea580c',
    glow: 'rgba(153,27,27,0.22)',
  },
  {
    period: '1993 — 1998',
    role: 'B.A., LL.B. (Honors) — 5-Year Integrated',
    place: 'National Law School of India',
    icon: Award,
    summary:
      'Five years of rigorous courtroom and statutory training, graduating as University Gold Medalist and recipient of the Best Courtroom Advocate Trophy.',
    tags: ['Gold Medalist', 'First Class Honours', 'Moot Court Champion'],
    from: '#b6884c',
    to: '#d4a373',
    glow: 'rgba(182,136,76,0.20)',
  },
]

const credentials = [
  { icon: GraduationCap, label: 'LL.M. — Harvard Law School (Dean’s Scholar)', color: '#b6884c' },
  { icon: Award, label: 'B.A., LL.B. (Hons) — University Gold Medalist', color: '#1e3a8a' },
  { icon: ShieldCheck, label: 'Enrolled Senior Advocate — Bar Council of India', color: '#7c3aed' },
  { icon: Scale, label: 'Fellow — Chartered Institute of Arbitrators (CIArb, London)', color: '#991b1b' },
  { icon: BadgeCheck, label: 'Designated Senior Counsel — Supreme Court Bar Association', color: '#b6884c' },
]

export default function Experience() {
  return (
    <section id="experience" className="px-[5%] py-16 lg:px-[6%] lg:py-24">
      <div className="mb-10 text-center lg:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-800/20 bg-amber-50/80 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-amber-800 shadow-[0_8px_24px_rgba(182,136,76,0.10)] backdrop-blur-lg lg:mb-5 lg:text-xs"
        >
          <Sparkles size={14} className="text-[#b6884c]" />
          My Legal Journey
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(1.8rem,8vw,2.4rem)] font-bold text-slate-900 lg:text-[clamp(2.2rem,4.8vw,3.4rem)]"
        >
          25 Years at the <span className="shimmer-text">Bar & Bench</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-3 max-w-[680px] text-sm leading-relaxed text-slate-600 lg:text-base lg:leading-relaxed"
        >
          A chronicle of my courtroom trials, constitutional appeals, and professional credentials across India and global arbitral seats.
        </motion.p>
      </div>

      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:gap-16">
        {/* Timeline */}
        <div className="relative pl-6 before:absolute before:bottom-0 before:left-[9px] before:top-2 before:w-[2px] before:bg-gradient-to-b before:from-[#b6884c] before:via-[#1e3a8a] before:to-transparent lg:pl-8 lg:before:left-[11px]">
          {journey.map((item, i) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative mb-8 last:mb-0 lg:mb-10"
            >
              {/* Dot */}
              <div
                className="absolute -left-[24px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-white shadow-md lg:-left-[32px] lg:h-6 lg:w-6"
                style={{ borderColor: item.from }}
              >
                <div className="h-2 w-2 rounded-full" style={{ background: item.from }} />
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-slate-900/[0.06] bg-white/80 p-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(182,136,76,0.12)] lg:p-7">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ background: item.glow }}
                />

                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold"
                    style={{ background: `${item.from}15`, color: item.from }}
                  >
                    {item.period}
                    {item.current && <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={12} className="text-[#b6884c]" />
                    {item.place}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 lg:text-xl">{item.role}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 lg:text-sm">{item.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-900/[0.06] bg-slate-50/80 px-2.5 py-1 text-[0.7rem] font-semibold text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Credentials & Quote */}
        <div className="space-y-6 lg:space-y-8">
          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-amber-800/15 bg-gradient-to-br from-white/95 to-amber-50/50 p-6 shadow-[0_20px_50px_rgba(182,136,76,0.10)] backdrop-blur-xl lg:p-8"
          >
            <Quote size={40} className="mb-3 text-[#b6884c]/20" />
            <blockquote className="font-serif text-lg font-medium italic leading-relaxed text-slate-800 lg:text-xl">
              "Justice is never a matter of luck in the courtroom. It is the natural outcome of exhaustive statutory preparation, forensic discipline, and relentless courtroom courage."
            </blockquote>
            <div className="mt-6 flex items-center gap-3.5 border-t border-slate-900/[0.06] pt-5">
              <LogoMark size={40} />
              <div>
                <h4 className="text-base font-bold text-slate-900">Adv. Jonathan Vance</h4>
                <p className="text-xs font-semibold text-amber-800">Senior Advocate • Supreme Court</p>
              </div>
            </div>
          </motion.div>

          {/* Credentials Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl border border-slate-900/[0.06] bg-white/80 p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl lg:p-8"
          >
            <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-bold text-slate-900 lg:text-xl">
              <ShieldCheck size={22} className="text-[#b6884c]" />
              Accreditations & Admissions
            </h3>
            <ul className="space-y-3.5">
              {credentials.map((cred, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-semibold text-slate-700 lg:text-sm">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: `${cred.color}15`, color: cred.color }}
                  >
                    <cred.icon size={16} />
                  </div>
                  <span>{cred.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
