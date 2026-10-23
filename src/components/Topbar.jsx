import React from 'react'
import { Phone, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react'
import { FacebookIcon, TwitterIcon, LinkedinIcon, PinterestIcon } from './SocialIcons'

export default function Topbar() {
  return (
    <div className="bg-[#fcfaf7] border-b border-[#e7e1d5] text-[#4a4f56] text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-10 flex items-center justify-between">
          {/* Left contact info */}
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1">
            <a 
              href="tel:+032456586876" 
              className="flex items-center gap-1.5 hover:text-[#c59b66] transition-colors whitespace-nowrap group"
              title="Direct Chambers Helpline"
            >
              <Phone className="w-3.5 h-3.5 text-[#c59b66] group-hover:scale-110 transition-transform" />
              <span className="font-medium tracking-wide">+032 (456)586 876</span>
            </a>

            <span className="hidden sm:inline-block w-px h-3 bg-[#ded7c8]" />

            <a 
              href="mailto:info.respet@gmail.com" 
              className="flex items-center gap-1.5 hover:text-[#c59b66] transition-colors whitespace-nowrap group"
              title="Official Chambers Email"
            >
              <Mail className="w-3.5 h-3.5 text-[#c59b66] group-hover:scale-110 transition-transform" />
              <span>info.respet@gmail.com</span>
            </a>

            <span className="hidden md:inline-block w-px h-3 bg-[#ded7c8]" />

            <div className="hidden md:flex items-center gap-1.5 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#c59b66]" />
              <span>New Delhi Assembly / High Court Enclave</span>
            </div>
          </div>

          {/* Right side: Emergency badge & Social links */}
          <div className="flex items-center gap-4 pl-4">
            <div className="hidden lg:flex items-center gap-1.5 bg-[#f3ece0] text-[#865d2c] px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-[#e2d5c0]">
              <Clock className="w-3 h-3 text-[#c59b66]" />
              <span>24/7 Urgent Bail & Injunction Support</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#social-facebook"
                aria-label="Facebook"
                className="w-6 h-6 rounded-full flex items-center justify-center text-[#555b63] hover:text-[#c59b66] hover:bg-[#efe8dc] transition-all"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#social-twitter"
                aria-label="Twitter"
                className="w-6 h-6 rounded-full flex items-center justify-center text-[#555b63] hover:text-[#c59b66] hover:bg-[#efe8dc] transition-all"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#social-linkedin"
                aria-label="LinkedIn"
                className="w-6 h-6 rounded-full flex items-center justify-center text-[#555b63] hover:text-[#c59b66] hover:bg-[#efe8dc] transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#social-pinterest"
                aria-label="Pinterest"
                className="w-6 h-6 rounded-full flex items-center justify-center text-[#555b63] hover:text-[#c59b66] hover:bg-[#efe8dc] transition-all"
              >
                <PinterestIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="#bar-council-verified"
                title="Bar Council Verified Advocate"
                className="hidden sm:flex items-center gap-1 text-[11px] text-[#2e6930] bg-[#eef7ee] px-2 py-0.5 rounded-sm font-medium border border-[#cde5cd]"
              >
                <ShieldCheck className="w-3 h-3 text-[#2e6930]" />
                <span>Bar Council Verified</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
