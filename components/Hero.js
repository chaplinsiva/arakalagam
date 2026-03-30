"use client";

import { motion } from "framer-motion";
import { Play, Users, ChevronDown } from "lucide-react";

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0F] via-[#1a0a2e] to-[#0B0B0F]" />

        {/* Animated purple orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#4B0082]/20 blur-[120px] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/10 blur-[100px] animate-[float_10s_ease-in-out_infinite_2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#4B0082]/10 blur-[150px]" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(75,0,130,0.15)] backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-sm text-[#D4AF37] font-medium tracking-wide">
            Independent Tamil Media Network
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-[var(--font-outfit)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4"
        >
          <span className="block text-white">ARAKALAGAM</span>
          <span className="block gold-gradient text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.2em] mt-2">
            TV
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-[var(--font-outfit)] text-xl sm:text-2xl md:text-3xl text-[#A0A0B0] font-light tracking-wide mb-6"
        >
          Towards Social Change
        </motion.p>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10"
        >
          {[
            "Independent Journalism",
            "Social Justice",
            "Political Analysis",
          ].map((tag, i) => (
            <span
              key={tag}
              className="text-sm sm:text-base text-[#A0A0B0] flex items-center gap-2"
            >
              {i > 0 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              )}
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://www.youtube.com/@ARAKALAGAM"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#4B0082] to-[#6A1BA5] text-white font-semibold text-lg flex items-center gap-3 hover:shadow-[0_0_40px_rgba(75,0,130,0.5)] transition-all duration-500 hover:scale-105"
          >
            <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
            Watch Highlights
          </a>
          <button
            onClick={() => handleScroll("#collaboration")}
            className="px-8 py-4 rounded-full border border-[rgba(212,175,55,0.3)] text-[#D4AF37] font-semibold text-lg flex items-center gap-3 hover:bg-[rgba(212,175,55,0.08)] hover:border-[rgba(212,175,55,0.5)] transition-all duration-500 hover:scale-105"
          >
            <Users className="w-5 h-5" />
            Collaborate With Us
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { number: "300K+", label: "Subscribers" },
            { number: "5000+", label: "Videos" },
            { number: "5M+", label: "Monthly Views" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[var(--font-outfit)] text-3xl sm:text-4xl font-bold gold-gradient">
                {stat.number}
              </p>
              <p className="text-sm text-[#A0A0B0] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => handleScroll("#about")}
            className="flex flex-col items-center gap-2 text-[#A0A0B0] hover:text-[#D4AF37] transition-colors group"
          >
            <span className="text-xs tracking-widest uppercase">Explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
