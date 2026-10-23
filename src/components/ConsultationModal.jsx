import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck, CheckCircle2, Phone, Mail, Calendar, Send } from 'lucide-react'

export default function ConsultationModal({ isOpen, onClose, defaultPractice = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    practice: defaultPractice || 'Corporate & Commercial Law',
    urgency: 'standard',
    summary: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 700)
  }

  const handleClose = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-white border-2 border-[#e6dcce] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 text-[#18191c] my-8 overflow-hidden"
        >
          {/* Gold top accent line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#9d7036] via-[#b6884c] to-[#c59b66]" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-[#f4ede1] text-[#52525b] hover:text-[#18191c] hover:bg-[#e8ded0] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#f5eddf] border-2 border-[#b6884c] text-[#b6884c] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9 text-[#b6884c]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#111317]">
                Consultation Scheduled
              </h3>
              <p className="text-sm text-[#4b5563] leading-relaxed max-w-sm mx-auto">
                Dear <strong className="text-[#111317]">{formData.name}</strong>, your request has been prioritized under confidential Case Ref ID: <span className="text-[#b6884c] font-mono font-bold">#RESPET-{Math.floor(2000 + Math.random() * 8000)}</span>.
              </p>
              <div className="p-3.5 rounded-lg bg-[#faf6ee] border border-[#e8ded0] text-xs text-[#52525b] text-left">
                <p>• Our Chamber Registrar will reach out via phone & email within 2 hours.</p>
                <p>• Emergency Bail & Injunction inquiries are processed round the clock.</p>
              </div>
              <button
                onClick={handleClose}
                className="mt-4 px-6 py-2.5 rounded-lg bg-[#b6884c] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#9d7036] transition-all shadow-md"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold text-[#b6884c] uppercase tracking-wider">
                  Chambers of Respet — Let's Talk
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#111317] mt-1">
                  Schedule Confidential Consultation
                </h3>
                <p className="text-xs text-[#52525b] mt-1">
                  Connect with Adv. Jonathan Vance and our senior litigation associates.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#374151] mb-1">
                    Your Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Adv. Jonathan Sterling / Corporate Rep"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#faf8f4] border border-[#d9cdbe] focus:border-[#b6884c] rounded-lg px-3.5 py-2.5 text-sm text-[#18191c] placeholder-[#9ca3af] outline-none shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#faf8f4] border border-[#d9cdbe] focus:border-[#b6884c] rounded-lg px-3.5 py-2.5 text-sm text-[#18191c] placeholder-[#9ca3af] outline-none shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#faf8f4] border border-[#d9cdbe] focus:border-[#b6884c] rounded-lg px-3.5 py-2.5 text-sm text-[#18191c] placeholder-[#9ca3af] outline-none shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] mb-1">
                    Matter Category
                  </label>
                  <select
                    value={formData.practice}
                    onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                    className="w-full bg-[#faf8f4] border border-[#d9cdbe] focus:border-[#b6884c] rounded-lg px-3.5 py-2.5 text-sm text-[#18191c] outline-none shadow-sm"
                  >
                    <option value="Corporate & Commercial Law">Corporate & Commercial Law</option>
                    <option value="Criminal Defense & Bail">Criminal Defense & Bail Hearings</option>
                    <option value="High Court & Supreme Court Writs">High Court & Supreme Court Writs</option>
                    <option value="Real Estate & Title Disputes">Real Estate & Title Disputes</option>
                    <option value="Intellectual Property & Patents">Intellectual Property & Patents</option>
                    <option value="Commercial Arbitration">Commercial Arbitration (SIAC / LCIA)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] mb-1">
                    Matter Summary / Court Case Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe the ongoing dispute, court forum, or relief sought..."
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    className="w-full bg-[#faf8f4] border border-[#d9cdbe] focus:border-[#b6884c] rounded-lg p-3 text-sm text-[#18191c] placeholder-[#9ca3af] outline-none resize-none shadow-sm"
                  />
                </div>

                <div className="flex items-center gap-2 p-2.5 bg-[#fbf9f4] rounded-lg border border-[#e8dfd0] text-xs text-[#52525b]">
                  <ShieldCheck className="w-4 h-4 text-[#b6884c] shrink-0" />
                  <span>Strictly Confidential under Section 126 Evidence Act</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#b6884c] via-[#c59b66] to-[#cca36f] text-white font-bold text-sm shadow-md shadow-[#b6884c]/25 hover:shadow-xl hover:shadow-[#b6884c]/40 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? 'Submitting to Chambers...' : 'Confirm Consultation Request'}
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
