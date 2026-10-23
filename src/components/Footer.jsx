import {
  ArrowUpRight,
  Clock,
  Scale,
  Mail,
  MapPin,
  Phone,
  Shield,
} from 'lucide-react'
import Logo from './Logo'

const explore = [
  { label: 'About Counsel', href: '#about' },
  { label: 'Litigation Journey', href: '#experience' },
  { label: 'Practice Disciplines', href: '#services' },
  { label: 'Client Testimonials', href: '#testimonials' },
  { label: 'Retain / Contact', href: '#contact' },
]

const socials = [
  {
    label: 'LinkedIn',
    short: 'in',
    href: 'https://www.linkedin.com',
    hover: 'hover:border-[#0a66c2]/30 hover:bg-[#0a66c2]/10 hover:text-[#0a66c2]',
  },
  {
    label: 'Supreme Court Bar',
    short: 'scba',
    href: 'https://scbaindia.org',
    hover: 'hover:border-amber-600/30 hover:bg-amber-50 hover:text-amber-800',
  },
  {
    label: 'Indian Council of Arbitration',
    short: 'ica',
    href: 'https://icaindia.co.in',
    hover: 'hover:border-purple-600/30 hover:bg-purple-50 hover:text-purple-700',
  },
]

const contact = [
  {
    Icon: Phone,
    label: 'Chambers Hotline',
    value: '+91 98401 54321',
    href: 'tel:+919840154321',
    tint: 'border-amber-600/15 bg-amber-50 text-amber-800',
  },
  {
    Icon: Mail,
    label: 'Confidential Email',
    value: 'chambers@advjonathanvance.com',
    href: 'mailto:chambers@advjonathanvance.com',
    tint: 'border-blue-600/15 bg-blue-50 text-blue-800',
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden px-[5%] pb-28 pt-12 lg:mt-16 lg:px-[6%] lg:pb-8 lg:pt-16">
      <div className="absolute inset-x-[5%] top-0 h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent lg:inset-x-[6%]" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-[1280px] gap-10 text-center lg:grid-cols-[1.35fr_0.65fr_1fr] lg:gap-14 lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          <Logo />
          <p className="mt-5 max-w-[380px] text-sm leading-relaxed text-slate-600">
            Principled constitutional advocacy and decisive commercial dispute resolution across the Supreme Court of India, High Courts, and International Arbitration Tribunals.
          </p>
          <div className="mt-5 flex gap-2.5">
            {socials.map(({ label, short, href, hover }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${label} (sample link)`}
                title={label}
                className={`group flex h-10 min-w-10 px-3 items-center justify-center rounded-xl border border-slate-900/10 bg-white/70 text-[0.7rem] font-extrabold uppercase tracking-wide text-slate-600 shadow-[0_6px_16px_rgba(15,23,42,0.04)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(15,23,42,0.10)] ${hover}`}
              >
                <span className="transition-transform duration-300 group-hover:scale-105">{short}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-slate-500">Navigation</h4>
          <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:flex-col lg:items-start lg:gap-2.5">
            {explore.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-amber-800"
                >
                  <span className="h-1 w-1 rounded-full bg-amber-600/0 transition-colors duration-300 group-hover:bg-amber-600" />
                  {link.label}
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-slate-500">Chambers Registry</h4>
          <ul className="mt-4 space-y-3">
            {contact.map(({ Icon, label, value, href, tint }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center justify-center gap-3 lg:justify-start"
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:-rotate-6 group-hover:scale-105 ${tint}`}
                  >
                    <Icon size={15} />
                  </span>
                  <span className="text-left">
                    <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {label}
                    </span>
                    <span className="text-sm font-semibold text-slate-800 transition-colors group-hover:text-amber-800">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-purple-600/15 bg-purple-50 text-purple-700">
                <MapPin size={15} />
              </span>
              <span className="text-left">
                <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Supreme Court Chambers
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  Chamber Block, Supreme Court of India, New Delhi
                </span>
              </span>
            </li>
            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/15 bg-amber-50 text-amber-700">
                <Clock size={15} />
              </span>
              <span className="text-left">
                <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Chambers Hours
                </span>
                <span className="text-sm font-semibold text-slate-800">Mon – Sat · 9:30 am – 7:30 pm</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bar Council Compliance Disclaimer */}
      <div className="relative mx-auto mt-8 max-w-[1280px] rounded-2xl border border-amber-900/10 bg-amber-50/50 p-4 text-center text-[0.72rem] leading-relaxed text-slate-500 lg:text-left">
        <p className="flex items-center justify-center gap-2 font-semibold text-slate-700 lg:justify-start">
          <Shield size={14} className="text-amber-700" />
          Bar Council of India Disclaimer
        </p>
        <p className="mt-1">
          As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. By accessing this website, the user acknowledges that the information provided is solely for informational purposes and does not create an advocate-client relationship.
        </p>
      </div>

      <div className="relative mx-auto mt-8 flex max-w-[1280px] flex-col items-center justify-between gap-3 border-t border-slate-900/[0.06] pt-5 text-center text-[0.74rem] text-slate-500 lg:mt-10 lg:flex-row lg:text-left lg:text-[0.8rem]">
        <p>&copy; 2026 Senior Advocate Jonathan Vance. All rights reserved.</p>
        <p className="inline-flex items-center gap-1.5">
          Dedicated to
          <Scale size={13} className="text-amber-700" aria-hidden="true" />
          Justice, Equity & Good Conscience
        </p>
      </div>
    </footer>
  )
}
