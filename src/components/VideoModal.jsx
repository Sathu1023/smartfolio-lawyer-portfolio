import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Volume2, ShieldCheck, Scale, Award, ArrowRight } from 'lucide-react'

export default function VideoModal({ isOpen, onClose, onOpenConsultation }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#15161a] border border-[#2e313c] rounded-2xl shadow-2xl overflow-hidden z-10 text-white"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-[#a1a1aa] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Cinematic Video Reel Player */}
          <div className="relative aspect-video w-full bg-[#0a0a0d] overflow-hidden flex items-center justify-center">
            {/* Background lawyer desk photo with subtle zoom animation */}
            <img
              src="/hero-lawyer.jpg"
              alt="Respet Chambers Video Introduction"
              className="w-full h-full object-cover filter brightness-[0.45] scale-105 animate-pulse"
              style={{ animationDuration: '4s' }}
            />

            {/* Simulated cinematic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#15161a] via-transparent to-black/60" />

            {/* Video content overlay */}
            <div className="relative z-10 text-center px-6 max-w-lg space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#c59b66]/20 border-2 border-[#dfba89] flex items-center justify-center mx-auto text-[#dfba89] shadow-2xl animate-bounce">
                <Play className="w-7 h-7 fill-[#dfba89] ml-1" />
              </div>
              <span className="text-xs font-bold text-[#c59b66] uppercase tracking-[0.25em] block">
                Chambers Introduction & Courtroom Philosophy
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                "Defending Rights, Structuring Landmark Verdicts"
              </h3>
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                An exclusive message from Senior Advocate Jonathan Vance on ethics, trial preparation, and appellate advocacy at the Supreme Court.
              </p>

              {/* Simulated audio waveform */}
              <div className="flex items-center justify-center gap-1 h-6 pt-2">
                {[12, 24, 16, 28, 20, 32, 24, 18, 26, 14, 22, 30, 18, 24, 16].map((h, i) => (
                  <div
                    key={i}
                    className="w-1 bg-[#c59b66] rounded-full animate-pulse"
                    style={{
                      height: `${h}px`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '1s',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Time badge */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[11px] text-[#dfba89] border border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <span>Chambers Reel • 02:45 min</span>
            </div>
          </div>

          {/* Reel Information & Actions Footer */}
          <div className="p-6 bg-[#18191e] border-t border-[#272934] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#c59b66]/15 flex items-center justify-center text-[#c59b66]">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-serif text-white">
                  Respet & Partners Legal Chambers
                </h4>
                <p className="text-xs text-[#a1a1aa]">
                  Supreme Court Enclave, New Delhi
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose()
                  onOpenConsultation()
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#c59b66] hover:bg-[#dfba89] text-[#121315] font-semibold text-xs transition-colors"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
