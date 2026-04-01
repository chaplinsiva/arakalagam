"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tv, BookOpen, Film, Palette, ExternalLink } from "lucide-react";
import { NETWORK_YOUTUBE } from "@/lib/channels";

const channelMeta = [
  {
    purpose: "News & Politics",
    description:
      "The flagship channel — independent Tamil news, political analysis, investigative journalism, and social justice reporting.",
    icon: Tv,
    color: "#D4AF37",
    gradient: "from-[#4B0082] to-[#D4AF37]/20",
    featured: true,
  },
  {
    purpose: "Cinema Analysis",
    description:
      "Deep cinematic analysis, film reviews with a social lens, and exploration of Tamil cinema's cultural impact.",
    icon: Film,
    color: "#E74C3C",
    gradient: "from-[#E74C3C]/20 to-[#4B0082]",
  },
  {
    purpose: "Literature & Ideas",
    description:
      "Intellectual discourse on Tamil literature, philosophy, ideological debates, and progressive thought leadership.",
    icon: BookOpen,
    color: "#3498DB",
    gradient: "from-[#3498DB]/20 to-[#4B0082]",
  },
  {
    purpose: "Documentaries",
    description:
      "Long-form documentary content — visual storytelling that preserves history and amplifies marginalized voices.",
    icon: Palette,
    color: "#2ECC71",
    gradient: "from-[#2ECC71]/20 to-[#4B0082]",
  },
];

const channels = NETWORK_YOUTUBE.map((ch, i) => ({
  ...ch,
  ...channelMeta[i],
}));

export default function NetworkChannels() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="network" className="relative overflow-hidden py-24 lg:py-32">
      <div className="section-divider w-full absolute top-0" />

      <div className="pointer-events-none absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-[#4B0082]/12 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-1/4 h-72 w-72 rounded-full bg-[#D4AF37]/8 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-transparent via-[#4B0082]/12 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
            Media Ecosystem
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            The <span className="gold-gradient">Network</span>
          </h2>
          <p className="text-[#A0A0B0] max-w-2xl mx-auto text-lg">
            More than a channel — a complete media network spanning news,
            cinema, literature, and documentaries.
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            <span className="h-px w-16 bg-gradient-to-r from-[#4B0082] to-[#D4AF37]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4B0082]" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#4B0082]/50" />
          </div>
        </motion.div>

        {/* Network Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {channels.map((channel, i) => {
            const Icon = channel.icon;
            return (
              <motion.a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={`glass-card glass-card-elevated p-8 group relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
                  channel.featured ? "sm:col-span-2" : ""
                }`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${channel.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className={`flex ${channel.featured ? "sm:flex-row sm:items-center gap-8" : "flex-col"}`}>
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 mb-6 ${channel.featured ? "sm:mb-0 sm:w-20 sm:h-20" : ""}`}
                      style={{
                        background: `linear-gradient(135deg, ${channel.color}20, ${channel.color}08)`,
                        border: `1px solid ${channel.color}30`,
                        boxShadow: `0 0 30px ${channel.color}15`,
                      }}
                    >
                        {channel.logoUrl ? (
                          <img src={channel.logoUrl} alt={channel.name} className="w-full h-full object-cover rounded-2xl" />
                        ) : (
                          <Icon
                            className={`w-8 h-8 ${channel.featured ? "sm:w-10 sm:h-10" : ""}`}
                            style={{ color: channel.color }}
                          />
                        )}
                      </div>

                      <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-[var(--font-outfit)] text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                          {channel.name}
                        </h3>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: `${channel.color}15`,
                            color: channel.color,
                            border: `1px solid ${channel.color}25`,
                          }}
                        >
                          {channel.purpose}
                        </span>
                      </div>
                      <p className="text-[#A0A0B0] leading-relaxed">
                        {channel.description}
                      </p>

                      <div className="flex items-center gap-2 mt-4 text-[#D4AF37] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Visit Channel
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
