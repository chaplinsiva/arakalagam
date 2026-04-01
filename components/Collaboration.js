"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Handshake, Mic2, Megaphone, Film, ArrowRight, Sparkles } from "lucide-react";

const offerings = [
  {
    icon: Mic2,
    title: "Exclusive Interviews",
    description:
      "Get featured on our platform with in-depth interviews reaching 300K+ engaged subscribers.",
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    description:
      "Partner with us to amplify social causes, political messaging, or community-driven initiatives.",
  },
  {
    icon: Film,
    title: "Documentary Collaborations",
    description:
      "Co-produce compelling documentary content with our experienced production team.",
  },
  {
    icon: Sparkles,
    title: "Sponsored Discussions",
    description:
      "Integrate your message into our trusted editorial discussions for authentic audience engagement.",
  },
];

export default function Collaboration() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collaboration" className="relative overflow-hidden py-24 lg:py-32">
      <div className="section-divider w-full absolute top-0" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#4B0082]/7 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-[#4B0082]/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-16 bottom-1/4 h-72 w-72 rounded-full bg-[#D4AF37]/6 blur-[95px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
              Partner With Us
            </span>
            <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Let&apos;s <span className="gold-gradient">Collaborate</span>
            </h2>
            <p className="text-[#A0A0B0] text-lg leading-relaxed mb-8">
              Partner with a media platform that drives real conversations.
              ARAKALAGAM MEDIA offers unmatched reach into Tamil Nadu&apos;s most
              engaged, politically-aware audience.
            </p>

            {/* Offerings */}
            <div className="space-y-4 mb-10">
              {offerings.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4 rounded-xl border border-[rgba(212,175,55,0.06)] bg-[rgba(12,12,18,0.45)] px-4 py-3 backdrop-blur-sm transition-colors group-hover:border-[rgba(212,175,55,0.14)]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[rgba(75,0,130,0.25)] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(75,0,130,0.15)] group-hover:bg-[rgba(75,0,130,0.35)] transition-colors">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h4 className="font-[var(--font-outfit)] text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#A0A0B0] mt-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8C84A] text-[#0B0B0F] font-bold text-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500 hover:scale-105 group"
            >
              <Handshake className="w-6 h-6" />
              Work With Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Right - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card glass-card-elevated p-6 sm:p-10 text-center relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#D4AF37]/10 blur-[60px]" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#4B0082]/20 blur-[60px]" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4B0082] to-[#D4AF37] flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(75,0,130,0.4)] animate-[pulse-glow_3s_ease-in-out_infinite]">
                  <Handshake className="w-10 h-10 text-white" />
                </div>

                <h3 className="font-[var(--font-outfit)] text-2xl font-bold text-white mb-4">
                  Why Partner With Us?
                </h3>

                <div className="space-y-4 text-left">
                  {[
                    "300K+ highly engaged subscribers",
                    "Trusted voice in Tamil media",
                    "High discussion-driven audience",
                    "Multi-platform media network",
                    "Professional production quality",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-[#A0A0B0]"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-[rgba(212,175,55,0.1)]">
                  <p className="text-[#D4AF37] font-[var(--font-outfit)] text-sm font-medium italic">
                    &ldquo;Partner with a media platform that drives real
                    conversations.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
