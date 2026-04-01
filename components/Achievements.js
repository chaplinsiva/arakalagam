"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Mic2, Shield, TrendingUp, Award, Zap } from "lucide-react";

const achievements = [
  {
    icon: Search,
    title: "Investigative Impact",
    description:
      "Exposed critical cases like Srimathi Case with 1M+ views, driving public discourse and accountability.",
    stat: "10+",
    statLabel: "Views on Impact Videos",
  },
  {
    icon: Mic2,
    title: "Viral Political Interviews",
    description:
      "In-depth interviews with key political leaders — DMK, VCK, and independent voices shaping Tamil Nadu's future.",
    stat: "500+",
    statLabel: "Exclusive Interviews",
  },
  {
    icon: Shield,
    title: "Social Justice Campaigns",
    description:
      "Pioneered awareness on custodial violence (Sattankulam), institutional abuse (PSBB), and marginalized community rights.",
    stat: "50+",
    statLabel: "Campaigns",
  },
  {
    icon: TrendingUp,
    title: "Audience Growth",
    description:
      "Consistent growth driven by authentic, fearless reporting — from 300 to 300K+ subscribers organically.",
    stat: "300K+",
    statLabel: "Organic Subscribers",
  },
  {
    icon: Award,
    title: "Documentary Excellence",
    description:
      "Produced acclaimed documentary series like Thiruparankundram Files.",
    stat: "2+",
    statLabel: "Documentary Series",
  },
  {
    icon: Zap,
    title: "Real-Time Reporting",
    description:
      "Breaking coverage of political events, elections, and social movements — always ahead of mainstream media.",
    stat: "24/7",
    statLabel: "Active Coverage",
  },
];

function AnimatedCounter({ target, suffix = "", inView }) {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target.replace(/\D/g, "")) || 0;

  useEffect(() => {
    if (!inView || numericTarget === 0) return;
    let start = 0;
    const duration = 2000;
    const increment = numericTarget / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, numericTarget]);

  if (target === "24/7") return "24/7";

  return `${count.toLocaleString()}${suffix}`;
}

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative overflow-hidden py-24 lg:py-32">
      <div className="section-divider w-full absolute top-0" />

      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#4B0082]/12 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#D4AF37]/6 blur-[100px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4B0082]/8 blur-[140px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
            Our Impact
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Achievements & <span className="gold-gradient">Impact</span>
          </h2>
          <p className="text-[#A0A0B0] max-w-2xl mx-auto text-lg">
            From investigative journalism to social justice campaigns — our work
            has driven real change in Tamil society.
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            <span className="h-px w-16 bg-gradient-to-r from-[#4B0082] to-[#D4AF37]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4B0082]" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#4B0082]/50" />
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card glass-card-elevated p-8 group relative overflow-hidden transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4B0082]/0 to-[#D4AF37]/0 group-hover:from-[#4B0082]/10 group-hover:to-[#D4AF37]/5 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#4B0082] to-[#6A1BA5] flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(75,0,130,0.3)] group-hover:shadow-[0_0_35px_rgba(75,0,130,0.5)] transition-shadow duration-300">
                    <Icon className="w-7 h-7 text-[#D4AF37]" />
                  </div>

                  <h3 className="font-[var(--font-outfit)] text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#A0A0B0] text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-[rgba(212,175,55,0.1)]">
                    <p className="font-[var(--font-outfit)] text-2xl font-bold gold-gradient">
                      <AnimatedCounter
                        target={item.stat}
                        suffix={item.stat.includes("+") ? "+" : ""}
                        inView={inView}
                      />
                    </p>
                    <p className="text-xs text-[#A0A0B0] mt-1">
                      {item.statLabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
