import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Building 
} from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    practice: 'Corporate & Commercial Law',
    urgency: 'standard',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section id="contact" className="py-24 bg-white text-[#1c1d22] relative border-b border-[#e9e1d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f0e6d6] border border-[#d8c5ab] text-[#936433] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Mail className="w-3.5 h-3.5" />
            <span>Chambers Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#111317] tracking-tight">
            Schedule a Confidential Consultation
          </h2>
          <p className="mt-4 text-[#52525b] text-base">
            Reach out to our senior litigation team. All inquiries are strictly protected under statutory attorney-client privilege.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Chambers details & Office Locations */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#fbf9f4] border-2 border-[#e8ded0] rounded-2xl p-7 space-y-6 shadow-md">
              <h3 className="text-xl font-bold font-serif text-[#111317] flex items-center gap-2.5">
                <Building className="w-5 h-5 text-[#b6884c]" />
                <span>Principal Chambers</span>
              </h3>

              <div className="space-y-4 text-sm text-[#374151]">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#b6884c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111317] block">New Delhi Chambers</span>
                    <p className="text-xs text-[#52525b] mt-0.5">
                      14 New Delhi Assembly Chambers, Supreme Court Enclave, Bhagwan Das Road, New Delhi — 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#b6884c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111317] block">Chambers Direct Lines</span>
                    <a href="tel:+032456586876" className="text-xs text-[#b6884c] font-bold hover:underline block">
                      +032 (456)586 876
                    </a>
                    <span className="text-[11px] text-[#71717a]">24/7 Urgent Bail: +91 98112 34567</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-5 h-5 text-[#b6884c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111317] block">Electronic Correspondence</span>
                    <a href="mailto:info.respet@gmail.com" className="text-xs text-[#b6884c] font-bold hover:underline">
                      info.respet@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#b6884c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111317] block">Consultation Hours</span>
                    <p className="text-xs text-[#52525b] mt-0.5">
                      Monday – Saturday: 09:30 AM – 08:00 PM IST<br />
                      Sunday: By Prior Appointment Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Privilege Guarantee */}
              <div className="p-4 rounded-xl bg-white border border-[#e2d5c3] flex items-start gap-3 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#b6884c] shrink-0 mt-0.5" />
                <p className="text-xs text-[#4b5563] leading-relaxed">
                  <strong className="text-[#111317]">Strict Privilege:</strong> All communications, case summaries, and evidence documents transmitted are protected under Section 126 of the Evidence Act.
                </p>
              </div>
            </div>

            {/* Other offices */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-[#fbf9f4] border border-[#e8ded0] p-4 rounded-xl shadow-sm">
                <span className="text-[#b6884c] font-bold block mb-1">Mumbai Chambers</span>
                <p className="text-[#52525b]">Express Towers, 18th Floor, Nariman Point</p>
              </div>
              <div className="bg-[#fbf9f4] border border-[#e8ded0] p-4 rounded-xl shadow-sm">
                <span className="text-[#b6884c] font-bold block mb-1">London Liaison</span>
                <p className="text-[#52525b]">Chancery Lane, Lincoln's Inn, WC2A</p>
              </div>
            </div>

          </div>

          {/* Right Column: Confidential Form */}
          <div className="lg:col-span-7 bg-[#fbf9f4] border-2 border-[#e8ded0] rounded-2xl p-8 sm:p-10 shadow-xl relative">
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#f4ebd9] border-2 border-[#b6884c] text-[#b6884c] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#b6884c]" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#111317]">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#4b5563] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#111317]">{formData.name}</strong>. Your confidential case brief has been logged under Ref ID: <span className="text-[#b6884c] font-mono font-bold">#RSP-2026-{Math.floor(1000 + Math.random() * 9000)}</span>. Our chamber clerk will contact you within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({ name: '', phone: '', email: '', practice: 'Corporate & Commercial Law', urgency: 'standard', message: '' })
                  }}
                  className="mt-6 px-6 py-2.5 rounded-lg bg-[#b6884c] text-white font-bold text-xs tracking-wider uppercase hover:bg-[#9d7036] transition-all shadow-md"
                >
                  Submit Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-[#111317] mb-1">
                    Book Confidential Case Evaluation
                  </h3>
                  <p className="text-xs text-[#52525b]">
                    Fill in your details below. We review all submissions personally within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#d9cebe] focus:border-[#b6884c] rounded-lg px-4 py-3 text-sm text-[#18191c] placeholder-[#9ca3af] outline-none transition-colors shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#d9cebe] focus:border-[#b6884c] rounded-lg px-4 py-3 text-sm text-[#18191c] placeholder-[#9ca3af] outline-none transition-colors shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      Corporate / Personal Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-[#d9cebe] focus:border-[#b6884c] rounded-lg px-4 py-3 text-sm text-[#18191c] placeholder-[#9ca3af] outline-none transition-colors shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#374151] mb-1.5">
                      Practice Area / Dispute Type *
                    </label>
                    <select
                      value={formData.practice}
                      onChange={(e) => setFormData({ ...formData, practice: e.target.value })}
                      className="w-full bg-white border border-[#d9cebe] focus:border-[#b6884c] rounded-lg px-4 py-3 text-sm text-[#18191c] outline-none transition-colors shadow-sm"
                    >
                      <option value="Corporate & Commercial Law">Corporate & Commercial Law</option>
                      <option value="Criminal Defense & Bail">Criminal Defense & Bail</option>
                      <option value="High Court & Supreme Court Writs">High Court & Supreme Court Writs</option>
                      <option value="Real Estate & Land Disputes">Real Estate & Land Disputes</option>
                      <option value="Intellectual Property & Patents">Intellectual Property & Patents</option>
                      <option value="Banking, IBC & Debt Recovery">Banking, IBC & Debt Recovery</option>
                      <option value="Family Trust & Succession">Family Trust & Succession</option>
                      <option value="Commercial Arbitration">Commercial Arbitration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] mb-1.5">
                    Case Urgency Level
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer text-xs font-semibold transition-colors ${
                      formData.urgency === 'standard' ? 'bg-[#f5ede2] border-[#b6884c] text-[#8e602c]' : 'bg-white border-[#ded4c4] text-[#4b5563]'
                    }`}>
                      <input
                        type="radio"
                        name="urgency"
                        value="standard"
                        checked={formData.urgency === 'standard'}
                        onChange={() => setFormData({ ...formData, urgency: 'standard' })}
                        className="accent-[#b6884c]"
                      />
                      <span>Standard Assessment (24-48 hrs)</span>
                    </label>

                    <label className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer text-xs font-semibold transition-colors ${
                      formData.urgency === 'urgent' ? 'bg-red-50 border-red-500 text-red-700' : 'bg-white border-[#ded4c4] text-[#4b5563]'
                    }`}>
                      <input
                        type="radio"
                        name="urgency"
                        value="urgent"
                        checked={formData.urgency === 'urgent'}
                        onChange={() => setFormData({ ...formData, urgency: 'urgent' })}
                        className="accent-red-600"
                      />
                      <span>Urgent Bail / Stay (&lt; 6 hrs)</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#374151] mb-1.5">
                    Summary of Matter & Court Status *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly summarize your case facts, existing proceedings, or legal assistance required..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#d9cebe] focus:border-[#b6884c] rounded-lg p-4 text-sm text-[#18191c] placeholder-[#9ca3af] outline-none transition-colors resize-none shadow-sm"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-[#b6884c] via-[#c59b66] to-[#cca36f] text-white font-bold text-sm tracking-wide shadow-md shadow-[#b6884c]/25 hover:shadow-xl hover:shadow-[#b6884c]/40 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Registering Case Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Confidential Inquiry</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}
