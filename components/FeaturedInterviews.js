"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, ExternalLink, ZoomIn } from "lucide-react";
import Image from "next/image";
import VideoModal from "./VideoModal";
import CollageLightbox from "./CollageLightbox";

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

const COLLAGE_FILES = [
  "IMG_20260304_113415.jpg.jpeg",
  "IMG_20260304_122431.jpg.jpeg",
  "IMG_20260304_123512.jpg (2).jpeg",
  "IMG_20260304_124207.jpg.jpeg",
  "IMG_20260304_133618_1.jpg.jpeg",
  "IMG_20260304_135030.jpg.jpeg",
  "IMG_20260304_140406.jpg.jpeg",
  "IMG_20260304_140443.jpg.jpeg",
  "IMG_20260401_140634.jpg.jpeg",
  "Screenshot 2026-04-01 134121.png",
  "Screenshot 2026-04-01 134216.png",
  "Screenshot 2026-04-01 134959.png",
  "Snapshot_300.PNG",
  "T a.jpg",
  "அரசு வன்முறையை பேசும் ஜெய் பீம் முக்கியமான படம் _ SuryavsPmk_Jaibhimissue _ Thirumavalavan Intervew 0-15 screenshot.png",
  "விஜயை வச்சு செய்த Thangam Tennarasu !! DMK இப்படி ஜெயிக்கும் புள்ளிவிபரத்தை அடுக்கிய உடன்பிறப்பு!! 2-42 screenshot.png",
  "விஜயை வச்சு செய்த Thangam Tennarasu !! DMK இப்படி ஜெயிக்கும் புள்ளிவிபரத்தை அடுக்கிய உடன்பிறப்பு!! 6-55 screenshot.png",
];

export default function FeaturedInterviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalVideo, setModalVideo] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextLightbox = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % COLLAGE_FILES.length
    );
  }, []);
  const prevLightbox = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + COLLAGE_FILES.length) % COLLAGE_FILES.length
    );
  }, []);

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
    <section id="interviews" className="relative overflow-hidden py-24 lg:py-32">
      <div className="section-divider w-full absolute top-0" />

      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#4B0082]/14 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/3 h-64 w-64 rounded-full bg-[#D4AF37]/8 blur-[90px]" />

      <div ref={ref} className="max-w-6xl mx-auto px-3 min-[400px]:px-4 sm:px-6 lg:px-8 relative z-10 w-full min-w-0">
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
          <h2 className="font-[var(--font-outfit)] text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 px-1">
            Featured <span className="gold-gradient">Interviews</span>
          </h2>
          <p className="text-[#A0A0B0] max-w-2xl mx-auto text-base sm:text-lg px-1">
            Conversations with leaders, thinkers, and changemakers shaping
            Tamil Nadu&apos;s political and social landscape.
          </p>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            <span className="h-px w-14 max-w-[30vw] bg-gradient-to-r from-[#4B0082] to-[#D4AF37]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4B0082]" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#4B0082]/50" />
          </div>
        </motion.div>

        {/* Photo Collage */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 sm:mb-20"
        >
          <div className="text-center mb-8 sm:mb-10 px-1">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
              On the Ground
            </span>
            <h3 className="font-[var(--font-outfit)] text-xl min-[400px]:text-2xl sm:text-3xl font-bold text-white mt-3">
              Behind the{" "}
              <span className="gold-gradient">Scenes</span>
            </h3>
            <p className="text-[#888] text-xs sm:text-sm mt-3 max-w-md mx-auto">
              Tap any photo for full screen — swipe with arrows or keyboard.
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#4B0082] to-[#D4AF37] mx-auto rounded-full mt-4" />
          </div>

          {/* Bento-style responsive grid */}
          <div className="grid max-[380px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {COLLAGE_FILES.map((filename, idx) => {
              const isHero = idx === 0;
              const isWide = idx > 0 && idx % 6 === 0;
              return (
                <motion.button
                  type="button"
                  key={filename}
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: Math.min(0.04 * idx, 0.8) }}
                  onClick={() => setLightboxIndex(idx)}
                  className={[
                    "group relative overflow-hidden rounded-xl sm:rounded-2xl text-left shadow-[0_8px_32px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.07] transition-all duration-500",
                    "hover:ring-[#D4AF37]/45 hover:shadow-[0_16px_48px_rgba(75,0,130,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]",
                    "active:scale-[0.985] sm:hover:-translate-y-0.5",
                    isHero
                      ? "max-[380px]:col-span-1 col-span-2 sm:col-span-2 sm:row-span-2 min-h-[180px] sm:min-h-[260px]"
                      : "",
                    isWide ? "sm:col-span-2" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(75,0,130,0.12), rgba(255,255,255,0.02))",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/pics/${filename}`}
                    alt={`ARAKALAGAM MEDIA interview moment ${idx + 1}`}
                    loading="lazy"
                    className={[
                      "w-full h-full object-cover block transition-transform duration-700 group-hover:scale-[1.03]",
                      isHero ? "min-h-[180px] sm:min-h-[280px]" : "min-h-[100px] sm:min-h-[120px]",
                    ].join(" ")}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/75 via-transparent to-transparent opacity-40 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] backdrop-blur-sm opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="h-3.5 w-3.5" />
                    View
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative px-11 sm:px-12 md:px-14 lg:px-16"
        >
          {/* Card */}
          <div className="glass-card glass-card-elevated overflow-hidden rounded-2xl">
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
                    className="font-[var(--font-outfit)] text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 break-words"
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

          {/* Nav arrows — inset on small screens so they stay visible */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center border border-[rgba(212,175,55,0.2)] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)] active:scale-95 transition-all duration-300 z-20 shadow-xl touch-manipulation"
            aria-label="Previous interview"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center border border-[rgba(212,175,55,0.2)] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.1)] active:scale-95 transition-all duration-300 z-20 shadow-xl touch-manipulation"
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

        {/* Thumbnail strip — scroll horizontally on narrow screens */}
        <div className="flex gap-2 sm:gap-4 mt-6 overflow-x-auto pb-2 horizontal-scroll justify-start sm:justify-center px-1 -mx-1 min-w-0 w-full max-w-full touch-pan-x">
          {interviews.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(i)}
              className="relative w-[72px] h-[52px] sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 touch-manipulation"
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

      <CollageLightbox
        open={lightboxIndex !== null}
        images={COLLAGE_FILES}
        index={lightboxIndex}
        onClose={closeLightbox}
        onPrev={prevLightbox}
        onNext={nextLightbox}
      />

      <VideoModal
        videoId={modalVideo}
        isOpen={!!modalVideo}
        onClose={() => setModalVideo(null)}
      />
    </section>
  );
}
