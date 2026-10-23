import { useId } from 'react'

export function LogoMark({ size = 42, className = '', title }) {
  const rawId = useId()
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, '')
  const gradId = `lg-${id}`
  const shineId = `ls-${id}`

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <defs>
        <linearGradient id={gradId} x1="4" y1="3" x2="44" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b6884c" />
          <stop offset="0.5" stopColor="#1e3a8a" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id={shineId} x1="24" y1="2" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.36" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="14" fill={`url(#${gradId})`} />
      <rect x="2" y="2" width="44" height="44" rx="14" fill={`url(#${shineId})`} />
      <rect x="2.75" y="2.75" width="42.5" height="42.5" rx="13.25" stroke="#ffffff" strokeOpacity="0.4" strokeWidth="1.5" />
      
      {/* Scales of Justice / Fountain Pen Emblem */}
      <path
        d="M24 10v26M14 17l10-4 10 4M14 17l-3 8a3 3 0 0 0 6 0l-3-8zM34 17l-3 8a3 3 0 0 0 6 0l-3-8zM19 36h10"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="37.6" cy="10.4" r="3.4" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.6" />
    </svg>
  )
}

export default function Logo({ tone = 'dark', tagline = true, className = '', markClassName = '' }) {
  const onLight = tone === 'dark'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark
        size={42}
        className={`shrink-0 drop-shadow-[0_8px_18px_rgba(182,136,76,0.30)] ${markClassName}`}
      />
      <span className="flex flex-col">
        <span
          className={`font-display text-[1.22rem] font-bold leading-none tracking-tight lg:text-[1.38rem] ${
            onLight ? 'text-slate-900' : 'text-white'
          }`}
        >
          Adv. Jonathan{' '}
          <span
            className={
              onLight
                ? 'bg-gradient-to-r from-[#b6884c] via-[#1e3a8a] to-[#7c3aed] bg-clip-text text-transparent'
                : 'text-white/90'
            }
          >
            Vance
          </span>
        </span>
        {tagline && (
          <span
            className={`mt-1.5 text-[0.56rem] font-bold uppercase tracking-[0.28em] lg:text-[0.6rem] ${
              onLight ? 'text-slate-500' : 'text-white/60'
            }`}
          >
            Senior Advocate • Supreme Court
          </span>
        )}
      </span>
    </span>
  )
}
