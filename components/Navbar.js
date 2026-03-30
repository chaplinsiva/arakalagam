"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Play, Tv } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Impact", href: "#achievements" },
  { name: "Videos", href: "#videos" },
  { name: "Series", href: "#documentaries" },
  { name: "Interviews", href: "#interviews" },
  { name: "Network", href: "#network" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-[rgba(212,175,55,0.1)] shadow-[0_4px_30px_rgba(75,0,130,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleClick(e, "#hero")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(75,0,130,0.4)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-shadow duration-300 overflow-hidden">
              <img src="https://yt3.googleusercontent.com/m3rHVIVMOHyoujV49Kjb2x9o4o5Hp7TpHNBh7GbRGx9L3UHSbdqfLLwfDsFcBdUOIRZXk-sb=s160-c-k-c0x00ffffff-no-rj" alt="Arakalagam TV Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="font-[var(--font-outfit)] text-lg font-bold tracking-wider text-white">
                ARAKALAGAM
              </h1>
              <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase -mt-1">
                TV
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-[#A0A0B0] hover:text-[#D4AF37] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#4B0082] to-[#D4AF37] group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://www.youtube.com/@ARAKALAGAM"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#4B0082] to-[#6A1BA5] text-white text-sm font-semibold flex items-center gap-2 hover:shadow-[0_0_25px_rgba(75,0,130,0.5)] transition-all duration-300 hover:scale-105"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white hover:text-[#D4AF37] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0B0B0F]/95 backdrop-blur-xl border-t border-[rgba(212,175,55,0.1)]"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block px-4 py-3 text-[#A0A0B0] hover:text-[#D4AF37] hover:bg-[rgba(75,0,130,0.1)] rounded-lg transition-all duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="https://www.youtube.com/@ARAKALAGAM"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#4B0082] to-[#6A1BA5] text-white text-center font-semibold"
              >
                <Play className="w-4 h-4 fill-current inline mr-2" />
                Watch Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
