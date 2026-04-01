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

          <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            About{" "}
            <span className="gold-gradient">Arakalagam TV</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4B0082] to-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start max-w-6xl mx-auto mt-20">
          {/* Left - Headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3 shrink-0"
          >
            <h3 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Who <br className="hidden lg:block" />
              <span className="gold-gradient">We Are</span>
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#4B0082] to-[#D4AF37] mt-6 rounded-full" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <p className="text-[#E0E0E0] text-lg sm:text-xl leading-relaxed font-light">
              We specialize in creating <span className="text-white font-medium">high-impact political content</span> designed to transform your public image into a powerful, recognizable brand. Our team has a proven track record of producing viral videos that don&apos;t just share information—they center your face and your identity as the definitive voice of the people. In today&apos;s digital-first landscape, voters connect with personalities before they connect with policies, and we excel at building that essential human connection through the screen.
              <br /><br />
              What sets us apart is our deep commitment to a <span className="text-white font-medium">progressive mindset and social justice</span>. We don&apos;t just record events; we translate your sociological vision into a compelling digital narrative that aligns perfectly with the core values of your party. By rooting our content in these ideals, we position you as a forward-thinking leader who truly understands the pulse of the community.
              <br /><br />
              Using <span className="text-[#D4AF37] font-medium">cinematic storytelling and strategic editing</span>, we ensure your presence is commanding, your values are unmistakable, and your face becomes synonymous with leadership and trust. We would love to bring this vision to your campaign, maximizing your personal reach and ensuring that when voters head to the polls, yours is the identity they remember and trust.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
