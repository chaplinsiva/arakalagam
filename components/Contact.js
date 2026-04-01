"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from "@/lib/contact";

const YTIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
  </svg>
);
const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const IGIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const socialLinks = [
  {
    name: "YouTube",
    handle: "@ARAKALAGAM",
    icon: YTIcon,
    url: "https://www.youtube.com/@ARAKALAGAM",
    color: "#FF0000",
  },
  {
    name: "Twitter / X",
    handle: "@arakalagam",
    icon: XIcon,
    url: "https://x.com/arakalagam",
    color: "#1DA1F2",
  },
  {
    name: "Instagram",
    handle: "@arakalagamofficial",
    icon: IGIcon,
    url: "https://www.instagram.com/arakalagamofficial/",
    color: "#E4405F",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
      <div className="section-divider w-full absolute top-0" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4B0082]/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#D4AF37]/6 blur-[90px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
            Get In Touch
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Contact <span className="gold-gradient">Us</span>
          </h2>
          <p className="text-[#A0A0B0] max-w-2xl mx-auto text-lg">
            Call, email, or follow us — we&apos;re here for story tips, collaborations,
            and media inquiries.
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            <span className="h-px w-16 bg-gradient-to-r from-[#4B0082] to-[#D4AF37]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4B0082]" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#4B0082]/50" />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            <h3 className="font-[var(--font-outfit)] text-lg font-bold text-white mb-2">
              Reach us directly
            </h3>
            <a
              href={CONTACT_PHONE_TEL}
              className="glass-card glass-card-elevated p-5 sm:p-6 flex items-center gap-4 hover:border-[rgba(212,175,55,0.35)] transition-all duration-300 group touch-manipulation"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4B0082] to-[#6A1BA5] flex items-center justify-center shadow-[0_0_28px_rgba(75,0,130,0.4)] shrink-0">
                <Phone className="w-7 h-7 text-[#D4AF37]" aria-hidden />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-xs uppercase tracking-wider text-[#A0A0B0] mb-1">
                  Call
                </p>
                <p className="font-[var(--font-outfit)] text-xl sm:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {CONTACT_PHONE_DISPLAY}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="glass-card p-5 sm:p-6 flex items-center gap-4 hover:border-[rgba(212,175,55,0.35)] transition-all duration-300 group touch-manipulation"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4B0082] to-[#6A1BA5] flex items-center justify-center shadow-[0_0_24px_rgba(75,0,130,0.35)] shrink-0">
                <Mail className="w-7 h-7 text-[#D4AF37]" aria-hidden />
              </div>
              <div className="min-w-0 text-left">
                <p className="text-xs uppercase tracking-wider text-[#A0A0B0] mb-1">
                  Email
                </p>
                <p className="font-medium text-[#D4AF37] text-sm sm:text-base break-all group-hover:underline">
                  {CONTACT_EMAIL}
                </p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="glass-card glass-card-elevated p-6 sm:p-8"
          >
            <h3 className="font-[var(--font-outfit)] text-lg font-bold text-white mb-6">
              Follow Us
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-[rgba(75,0,130,0.15)] transition-colors group"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${social.color}15` }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: social.color }}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-sm font-medium group-hover:text-[#D4AF37] transition-colors">
                        {social.name}
                      </p>
                      <p className="text-[#A0A0B0] text-xs truncate">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
