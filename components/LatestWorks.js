"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Play, ZoomIn } from "lucide-react";
import Image from "next/image";
import VideoModal from "./VideoModal";
import CollageLightbox from "./CollageLightbox";

const videos = [
  {
    id: "QzBhn0AXnYo",
    videoId: "QzBhn0AXnYo",
    title: "Thiruparankundram மக்கள் வைத்த அந்த Twist !! Kiruthika vs RAjan Chellappa அடித்துச் சொன்ன Madurai !!",
    category: "Political",
  },
  {
    id: "KoZ0ukLWph4",
    videoId: "KoZ0ukLWph4",
    title: "Thangaselvan MP Interview",
    category: "Interview",
  }
];

const photos = [
  "WhatsApp Image 2026-04-09 at 8.29.14 PM (1).jpeg",
  "WhatsApp Image 2026-04-09 at 8.29.14 PM.jpeg",
  "WhatsApp Image 2026-04-09 at 8.29.15 PM.jpeg",
];

export default function LatestWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalVideo, setModalVideo] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextLightbox = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % photos.length
    );
  }, []);
  const prevLightbox = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length
    );
  }, []);

  return (
    <section id="latest-works" className="relative overflow-hidden py-24 lg:py-32">
      <div className="section-divider w-full absolute top-0" />

      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#4B0082]/12 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[110px]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
            Recent Coverage
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Latest <span className="gold-gradient">Works</span>
          </h2>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            <span className="h-px w-16 bg-gradient-to-r from-[#4B0082] to-[#D4AF37]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4B0082]" />
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#4B0082]/50" />
          </div>
        </motion.div>

        {/* Videos Section */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-10 mb-20 max-w-5xl mx-auto">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card glass-card-elevated flex flex-col overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-2 h-full"
              onClick={() => setModalVideo(video.videoId)}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[#4B0082]/0 group-hover:bg-[#4B0082]/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                    <Play className="w-7 h-7 text-[#0B0B0F] fill-current ml-1" />
                  </div>
                </div>
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#4B0082]/80 backdrop-blur-md text-xs font-semibold text-[#D4AF37] border border-[rgba(212,175,55,0.3)] shadow-lg uppercase tracking-wide">
                  {video.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="font-[var(--font-outfit)] text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-3">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Photos Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6, delay: 0.3 }}
           className="text-center mb-10"
        >
            <h3 className="font-[var(--font-outfit)] text-2xl sm:text-3xl font-bold text-white">
              Latest <span className="gold-gradient">Gallery</span>
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#4B0082] to-[#D4AF37] mx-auto rounded-full mt-4" />
        </motion.div>
        
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {photos.map((filename, idx) => (
             <motion.button
               type="button"
               key={filename}
               initial={{ opacity: 0, y: 20 }}
               animate={inView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
               onClick={() => setLightboxIndex(idx)}
               className="group relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] text-left shadow-[0_8px_32px_rgba(0,0,0,0.3)] ring-1 ring-white/10 transition-all duration-500 hover:ring-[#D4AF37]/50 hover:shadow-[0_16px_48px_rgba(75,0,130,0.3)] focus:outline-none"
             >
               <img
                 src={`/latestpics/${filename}`}
                 alt={`Latest Work Gallery ${idx + 1}`}
                 loading="lazy"
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
               />
               <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/70 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
               <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100">
                  <div className="bg-black/40 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] p-3 text-[#D4AF37] shadow-[inset_0_0_0_1px_rgba(212,175,55,0.3)]">
                    <ZoomIn className="w-6 h-6" />
                  </div>
               </div>
             </motion.button>
          ))}
        </div>
      </div>

      <CollageLightbox
        open={lightboxIndex !== null}
        images={photos}
        basePath="/latestpics/"
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
