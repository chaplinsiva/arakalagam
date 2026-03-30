"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Users, Mic, Eye, Film, MessageSquare } from "lucide-react";

const stats = [
  { icon: Users, number: "300K+", label: "Subscribers", color: "#D4AF37" },
  { icon: Film, number: "5000+", label: "Videos Published", color: "#6A1BA5" },
  { icon: Eye, number: "5M+", label: "Monthly Views", color: "#D4AF37" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32">
      {/* Section divider */}
      <div className="section-divider w-full absolute top-0" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
            Who We Are
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            About{" "}
            <span className="gold-gradient">Arakalagam TV</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4B0082] to-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4B0082] to-[#6A1BA5] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(75,0,130,0.3)]">
                  <Target className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-[var(--font-outfit)] text-xl font-bold text-white mb-2">
                    Our Mission
                  </h3>
                  <p className="text-[#A0A0B0] leading-relaxed">
                    Arakalagam TV is a high-impact independent Tamil digital news
                    media platform dedicated to shaping political and social
                    discourse. We amplify marginalized voices, uncover truth
                    through investigative journalism, and drive awareness on
                    critical social issues.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4B0082] to-[#6A1BA5] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(75,0,130,0.3)]">
                  <Mic className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-[var(--font-outfit)] text-xl font-bold text-white mb-2">
                    Founded By Thavam
                  </h3>
                  <p className="text-[#A0A0B0] leading-relaxed">
                    Founded by <span className="text-[#D4AF37] font-medium">Thavam</span>,
                    Arakalagam TV has grown from a passion project into a
                    powerful media network that influences millions across Tamil
                    Nadu and the global Tamil diaspora. (Thavam and Thamizh Dasan collaborated exclusively on the Thiruparankundram documentary).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#4B0082] to-[#6A1BA5] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(75,0,130,0.3)]">
                  <MessageSquare className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-[var(--font-outfit)] text-xl font-bold text-white mb-2">
                    Our Focus
                  </h3>
                  <p className="text-[#A0A0B0] leading-relaxed">
                    Social justice, political analysis, custodial violence
                    awareness, historical storytelling, and fearless
                    investigative reporting — we cover the stories mainstream
                    media ignores.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-6"
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="glass-card p-6 flex items-center gap-6"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
                      boxShadow: `0 0 30px ${stat.color}15`,
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>
                  <div>
                    <p
                      className="font-[var(--font-outfit)] text-3xl sm:text-4xl font-bold"
                      style={{ color: stat.color }}
                    >
                      {stat.number}
                    </p>
                    <p className="text-[#A0A0B0] text-sm mt-1">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
