"use client";

import { Tv, ArrowUp, Phone, Mail } from "lucide-react";
import { ARAKALAGAM_LOGO_URL, NETWORK_YOUTUBE } from "@/lib/channels";
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

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Impact", href: "#achievements" },
  { name: "Videos", href: "#videos" },
  { name: "Series", href: "#documentaries" },
  { name: "Interviews", href: "#interviews" },
  { name: "Network", href: "#network" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "YouTube",
    icon: YTIcon,
    url: "https://www.youtube.com/@ARAKALAGAM",
  },
  {
    name: "Twitter / X",
    icon: XIcon,
    url: "https://x.com/arakalagam",
  },
  {
    name: "Instagram",
    icon: IGIcon,
    url: "https://www.instagram.com/arakalagamofficial/",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[rgba(212,175,55,0.1)] bg-[#08080C]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                <img src={ARAKALAGAM_LOGO_URL} alt="ARAKALAGAM MEDIA logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-[var(--font-outfit)] text-lg font-bold text-white tracking-wider">
                  ARAKALAGAM
                </h3>
                <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase -mt-1">
                  MEDIA
                </p>
              </div>
            </div>
            <p className="text-[#A0A0B0] text-sm leading-relaxed mb-6">
              Independent Tamil Media Powering Social Change — shaping political
              and social discourse through fearless journalism.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-[rgba(212,175,55,0.15)] flex items-center justify-center text-[#A0A0B0] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-outfit)] text-sm font-bold text-white tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-[#A0A0B0] text-sm hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Network */}
          <div>
            <h4 className="font-[var(--font-outfit)] text-sm font-bold text-white tracking-wider uppercase mb-6">
              Our Network
            </h4>
            <ul className="space-y-3">
              {NETWORK_YOUTUBE.map((channel) => (
                <li key={channel.url}>
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A0A0B0] text-sm hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {channel.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[var(--font-outfit)] text-sm font-bold text-white tracking-wider uppercase mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-[#A0A0B0]">
              <a
                href={CONTACT_PHONE_TEL}
                className="flex items-center gap-2 hover:text-[#D4AF37] transition-colors touch-manipulation"
              >
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" aria-hidden />
                <span className="text-white font-medium">{CONTACT_PHONE_DISPLAY}</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-start gap-2 hover:text-[#D4AF37] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" aria-hidden />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <a
                href="https://www.youtube.com/@ARAKALAGAM"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-[#D4AF37] transition-colors pt-1"
              >
                youtube.com/@ARAKALAGAM
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-[rgba(212,175,55,0.08)] bg-[rgba(6,6,10,0.35)] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-xs">
            © {new Date().getFullYear()} ARAKALAGAM MEDIA. All rights reserved.
          </p>
          <p className="text-[#555] text-xs">
            Towards Social Change
          </p>
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[rgba(212,175,55,0.15)] flex items-center justify-center text-[#A0A0B0] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
