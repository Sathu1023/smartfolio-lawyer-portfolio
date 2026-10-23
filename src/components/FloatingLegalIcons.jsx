import React, { useEffect, useRef } from 'react'

const LEGAL_ICONS = [
  // Scales of Justice
  {
    type: 'scales',
    top: '8%',
    left: '3%',
    size: 48,
    delay: 0,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6l3 1m0 0l-3 9a5 5 0 006 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5 5 0 006 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  // Classical Courthouse Pillars
  {
    type: 'courthouse',
    top: '20%',
    right: '4%',
    size: 44,
    delay: -1.5,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  // Judge Gavel
  {
    type: 'gavel',
    top: '42%',
    left: '2%',
    size: 40,
    delay: -2.8,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 13l-7.5 7.5a2.12 2.12 0 11-3-3L11 10" />
        <path d="M16 16l6-6" />
        <path d="M8 8l6-6" />
        <path d="M9 7l8 8" />
        <path d="M21 11l-8-8" />
      </svg>
    ),
  },
  // Legal Shield of Privilege
  {
    type: 'shield',
    top: '62%',
    right: '3%',
    size: 46,
    delay: -3.6,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  // Law Book / Legal Code
  {
    type: 'codex',
    top: '78%',
    left: '4%',
    size: 42,
    delay: -4.4,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M9 7h6M9 11h4" />
      </svg>
    ),
  },
  // Fountain Pen Quill
  {
    type: 'quill',
    top: '86%',
    right: '6%',
    size: 38,
    delay: -5.2,
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
]

export default function FloatingLegalIcons() {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const x = (window.innerWidth / 2 - e.clientX) / 45
      const y = (window.innerHeight / 2 - e.clientY) / 45
      containerRef.current.querySelectorAll('.legal-floater').forEach((el, i) => {
        const depth = (i + 1) * 0.4
        el.style.transform = `translate(${x * depth}px, ${y * depth}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {LEGAL_ICONS.map((item, idx) => (
        <div
          key={idx}
          className="legal-floater absolute transition-transform duration-300 ease-out"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            width: item.size,
            height: item.size,
            animation: `legalBob 7s ease-in-out ${item.delay}s infinite`,
          }}
        >
          <div className="w-full h-full text-[#c59b66]/25 hover:text-[#b0814a]/40 filter drop-shadow-sm transition-colors duration-500">
            {item.svg}
          </div>
        </div>
      ))}

      <style>{`
        @keyframes legalBob {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-14px) rotate(4deg);
          }
          50% {
            transform: translateY(6px) rotate(-3deg);
          }
          75% {
            transform: translateY(-8px) rotate(2deg);
          }
        }
      `}</style>
    </div>
  )
}
