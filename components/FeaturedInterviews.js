"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import VideoModal from "./VideoModal";

const interviews = [
  {
    id: "thirumavalavan",
    name: "Thirumavalavan",
    role: "Member of Parliament & VCK Party Leader",
    description:
      "A powerful conversation on the Jai Bhim movie controversy, state violence, and the fight for Dalit rights and constitutional justice in Tamil Nadu.",
    videoId: "A3AbtZ15YOI",
    color: "#D4AF37",
  },
  {
    id: "nakheeran-gopal",
    name: "Nakheeran Gopal",
    role: "Editor-in-Chief, Nakheeran Magazine",
    description:
      "Exclusive in-depth interview with veteran investigative journalist Nakheeran Gopal, uncovering hard-hitting perspectives on Tamil Nadu's political landscape.",
    videoId: "59YgkcoX6Ak",
    color: "#9B59B6",
  },
  {
    id: "mano-thangaraj",
    name: "Minister Mano Thangaraj",
    role: "Tamil Nadu Cabinet Minister",
    description:
      "Surprise field inspection in Madurai — a rare on-ground accountability moment with Minister Mano Thangaraj that won public praise and media attention.",
    videoId: "STs3tpRwcoI",
    color: "#1ABC9C",
  },
  {
    id: "nallakannu-ayya",
    name: "Nallakannu Ayya",
    role: "Veteran Communist Leader",
    description:
      "Priceless insights and rare historical perspective from one of Tamil Nadu's most respected veteran communist leaders — a conversation on justice, struggle, and legacy.",
    videoId: "jrSxKmFgSyo",
    color: "#E74C3C",
  },
];

export default function FeaturedInterviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalVideo, setModalVideo] = useState(null);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const prev = () => {
    const prevIdx = (current - 1 + interviews.length) % interviews.length;
    goTo(prevIdx);
  };

  const next = () => {
    const nextIdx = (current + 1) % interviews.length;
    goTo(nextIdx);
  };

  const person = interviews[current];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section id="interviews" className="relative py-24 lg:py-32">
      <div className="section-divider w-full absolute top-0" />

      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#4B0082]/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
            Voices That Matter
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Featured <span className="gold-gradient">Interviews</span>
          </h2>
          <p className="text-[#A0A0B0] max-w-2xl mx-auto text-lg">
            Conversations with leaders, thinkers, and changemakers shaping
            Tamil Nadu&apos;s political and social landscape.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4B0082] to-[#D4AF37] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Card */}
          <div className="glass-card overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={person.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="flex flex-col lg:flex-row"
              >
                {/* Thumbnail — LEFT */}
                <div className="relative lg:w-[55%] aspect-video overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${person.videoId}/maxresdefault.jpg`}
                    alt={person.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B0B0F]/60 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent lg:hidden" />

                  {/* Color accent bar */}
                  <div
                    className="absolute top-0 left-0 w-1 h-full"
                    style={{ background: person.color }}
                  />

                  {/* Play button */}
                  <button
                    onClick={() => setModalVideo(person.videoId)}
                    className="absolute inset-0 flex items-center justify-center group/play"
                    aria-label={`Play ${person.name} interview`}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover/play:scale-110"
                      style={{
                        background: `radial-gradient(circle, ${person.color}cc, ${person.color}66)`,
                        boxShadow: `0 0 40px ${person.color}66`,
                      }}
                    >
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </button>

                  {/* Index badge */}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm border border-white/10"
                    style={{ background: `${person.color}33` }}>
                    {current + 1} / {interviews.length}
                  </span>
                </div>

                {/* Info — RIGHT */}
                <div className="lg:w-[45%] p-8 lg:p-10 flex flex-col justify-center">
                  {/* Color bar */}
                  <div
                    className="w-12 h-1 rounded-full mb-6"
                    style={{ background: person.color }}
                  />

                  <h3
                    className="font-[var(--font-outfit)] text-2xl lg:text-3xl font-bold text-white mb-2"
                  >
                    {person.name}
                  </h3>

                  <p className="text-sm font-semibold mb-5 tracking-wide" style={{ color: person.color }}>
                    {person.role}
                  </p>

                  <p className="text-[#A0A0B0] leading-relaxed mb-8 text-sm lg:text-base">
                    {person.description}
                  </p>

                  <button
                    onClick={() => setModalVideo(person.videoId)}
                    className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full border transition-all duration-300 w-fit hover:gap-3"
                    style={{
                      color: person.color,
                      borderColor: `${person.color}50`,
                      background: `${person.color}10`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${person.color}20`;
                      e.currentTarget.style.borderColor = `${person.color}99`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${person.color}10`;
                      e.currentTarget.style.borderColor = `${person.color}50`;
                    }}
                  >
                    Watch Interview <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 lg:-translate-x-7 w-12 h-12 rounded-full glass-card flex items-center justify-center border border-[rgba(212,175,55,0.2)] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)] hover:scale-110 transition-all duration-300 z-20 shadow-xl"
            aria-label="Previous interview"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 lg:translate-x-7 w-12 h-12 rounded-full glass-card flex items-center justify-center border border-[rgba(212,175,55,0.2)] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)] hover:scale-110 transition-all duration-300 z-20 shadow-xl"
            aria-label="Next interview"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {interviews.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(i)}
              className="transition-all duration-300 rounded-full"
              aria-label={`Go to ${item.name}`}
              style={{
                width: i === current ? "2rem" : "0.5rem",
                height: "0.5rem",
                background: i === current ? item.color : "rgba(255,255,255,0.2)",
                boxShadow: i === current ? `0 0 10px ${item.color}80` : "none",
              }}
            />
          ))}
        </div>

        {/* Thumbnail strip */}
        <div className="flex justify-center gap-4 mt-6">
          {interviews.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(i)}
              className="relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0"
              style={{
                borderColor: i === current ? item.color : "transparent",
                opacity: i === current ? 1 : 0.45,
                transform: i === current ? "scale(1.08)" : "scale(1)",
              }}
              aria-label={item.name}
            >
              <Image
                src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`}
                alt={item.name}
                fill
                className="object-cover"
              />
              {i === current && (
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: item.color }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <VideoModal
        videoId={modalVideo}
        isOpen={!!modalVideo}
        onClose={() => setModalVideo(null)}
      />
    </section>
  );
}
