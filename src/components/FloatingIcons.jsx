import { useEffect, useRef } from 'react'

const icons = [
  // Scales of Justice
  { 
    path: 'M12 3v18m-7-9l7-3 7 3m-14 0l-2 5a3 3 0 006 0l-2-5zm14 0l-2 5a3 3 0 006 0l-2-5zM8 21h8', 
    top: '10%', 
    left: '4%', 
    size: 54, 
    delay: 0,
    stroke: true 
  },
  // Classical Pillars
  { 
    path: 'M4 21h16M4 7h16M7 7v14M12 7v14M17 7v14M12 3L4 7h16L12 3z', 
    top: '22%', 
    right: '6%', 
    size: 42, 
    delay: -1.2,
    stroke: true 
  },
  // Judge Gavel
  { 
    path: 'M14 13l-7.5 7.5a2.12 2.12 0 11-3-3L11 10m5 6l6-6M8 8l6-6m-5 5l8 8m4-4l-8-8', 
    top: '60%', 
    right: '3%', 
    size: 60, 
    delay: -2.4,
    stroke: true 
  },
  // Shield of Privilege
  { 
    path: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-3-10l2 2 4-4', 
    top: '76%', 
    left: '6%', 
    size: 46, 
    delay: -3.6,
    stroke: true 
  },
  // Law Codex / Book
  { 
    path: 'M4 19.5A2.5 2.5 0 016.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2zM9 7h6M9 11h4', 
    top: '42%', 
    left: '2%', 
    size: 38, 
    delay: -4.8,
    stroke: true 
  },
  // Fountain Pen
  { 
    path: 'M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.5 7.5', 
    top: '84%', 
    right: '16%', 
    size: 48, 
    delay: -5.2,
    stroke: true 
  },
  // Landmark Star
  { 
    path: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', 
    top: '8%', 
    right: '22%', 
    size: 32, 
    delay: -2,
    stroke: false 
  },
  // Seal Badge
  { 
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', 
    top: '54%', 
    left: '12%', 
    size: 40, 
    delay: -6,
    stroke: false 
  },
]

export default function FloatingIcons() {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const x = (window.innerWidth / 2 - e.clientX) / 40
      const y = (window.innerHeight / 2 - e.clientY) / 40
      containerRef.current.querySelectorAll('.floater').forEach((el, i) => {
        const depth = (i + 1) * 0.5
        el.style.transform = `translate(${x * depth}px, ${y * depth}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="legalFloaterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b6884c" />
            <stop offset="50%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
      {icons.map((icon, i) => (
        <div
          key={i}
          className="floater absolute"
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            width: icon.size,
            height: icon.size,
            animation: `bob 6s ease-in-out ${icon.delay}s infinite`,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-full w-full"
            style={{
              stroke: icon.stroke ? 'url(#legalFloaterGrad)' : 'none',
              fill: icon.stroke ? 'none' : 'url(#legalFloaterGrad)',
              strokeWidth: icon.stroke ? 1.8 : 0,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              opacity: 0.55,
            }}
          >
            <path d={icon.path} />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes bob {
          0%, 100% { transform: translateY(0) rotateY(0deg) rotateX(0deg); }
          25% { transform: translateY(-18px) rotateY(10deg) rotateX(5deg); }
          50% { transform: translateY(6px) rotateY(-6deg) rotateX(-3deg); }
          75% { transform: translateY(-12px) rotateY(5deg) rotateX(6deg); }
        }
      `}</style>
    </div>
  )
}
