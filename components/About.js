"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="section-divider w-full absolute top-0" />

      {/* Soft atmosphere */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-[#4B0082]/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-[#D4AF37]/8 blur-[90px]" />

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#D4AF37]/90">
            Who we are
          </span>
          <h2 className="font-[var(--font-outfit)] mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            About{" "}
            <span className="gold-gradient">ARAKALAGAM MEDIA</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#A0A0B0] sm:text-base">
            Independent Tamil digital media — journalism, analysis, and stories
            that serve the public interest.
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            <span className="h-px w-16 max-w-[40vw] bg-gradient-to-r from-[#4B0082] to-[#D4AF37]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4B0082]" />
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#4B0082]/60" />
          </div>
        </motion.div>

        {/* Content card */}
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative rounded-2xl border border-[rgba(212,175,55,0.12)] bg-[linear-gradient(165deg,rgba(17,17,24,0.85)_0%,rgba(11,11,15,0.92)_100%)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-3xl sm:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

            <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
              <div className="shrink-0 lg:w-[220px] lg:border-r lg:border-[rgba(212,175,55,0.08)] lg:pr-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]/80">
                  Identity
                </p>
                <h3 className="font-[var(--font-outfit)] mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Voice for{" "}
                  <span className="gold-gradient">social change</span>
                </h3>
                <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-[#4B0082] to-[#D4AF37]" />
              </div>

              <div className="min-w-0 flex-1 space-y-6 text-[#C8C8D0]">
                <p className="text-[15px] leading-[1.75] sm:text-lg">
                  We specialize in creating{" "}
                  <span className="font-medium text-white">
                    high-impact political content
                  </span>{" "}
                  designed to transform your public image into a powerful,
                  recognizable brand. Our team has a proven track record of
                  producing viral videos that don&apos;t just share
                  information—they center your face and your identity as the
                  definitive voice of the people. In today&apos;s digital-first
                  landscape, voters connect with personalities before they
                  connect with policies, and we excel at building that essential
                  human connection through the screen.
                </p>
                <p className="text-[15px] leading-[1.75] sm:text-lg">
                  What sets us apart is our deep commitment to a{" "}
                  <span className="font-medium text-white">
                    progressive mindset and social justice
                  </span>
                  . We don&apos;t just record events; we translate your
                  sociological vision into a compelling digital narrative that
                  aligns perfectly with the core values of your party. By
                  rooting our content in these ideals, we position you as a
                  forward-thinking leader who truly understands the pulse of the
                  community.
                </p>
                <p className="border-l-2 border-[#D4AF37]/40 pl-5 text-[15px] leading-[1.75] text-[#B8B8C8] sm:text-lg">
                  Using{" "}
                  <span className="font-medium text-[#D4AF37]">
                    cinematic storytelling and strategic editing
                  </span>
                  , we ensure your presence is commanding, your values are
                  unmistakable, and your face becomes synonymous with leadership
                  and trust. We would love to bring this vision to your campaign,
                  maximizing your personal reach and ensuring that when voters
                  head to the polls, yours is the identity they remember and
                  trust.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
