"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, ChevronLeft, ChevronRight, Film } from "lucide-react";
import Image from "next/image";
import VideoModal from "./VideoModal";

const documentaries = [
  {
    id: "thiruparankundram",
    videoId: "21tZWM5l7xY",
    title: "Thiruparankundram Files",
    subtitle: "Investigative Documentary Film",
    description:
      "A deep dive into the controversies surrounding Thiruparankundram — uncovering hidden truths through rigorous investigation and firsthand testimonies by Thavam and Thamizh Dasan.",
    episodes: "Documentary Film",
    gradient: "from-[#4B0082] to-[#2D004F]",
  }
];

export default function Documentaries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <section id="documentaries" className="relative py-24 lg:py-32">
      <div className="section-divider w-full absolute top-0" />

      <div ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12"
          >
            <div>
              <span className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
                Original Content
              </span>
              <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4">
                Documentaries & <span className="gold-gradient">Series</span>
              </h2>
              <p className="text-[#A0A0B0] mt-4 text-lg max-w-xl">
                Cinematic storytelling that uncovers truth, preserves history,
                and amplifies voices that matter.
              </p>
            </div>

          </motion.div>
        </div>

        {/* Video Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center px-4 sm:px-6 mt-8"
        >
          {documentaries.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-3xl"
            >
              <div className="glass-card overflow-hidden group h-full">
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${doc.videoId}/maxresdefault.jpg`}
                    alt={doc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${doc.gradient} opacity-60`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent" />

                  {/* Play button */}
                  <button
                    onClick={() => setModalVideo(doc.videoId)}
                    className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                  >
                    <Play className="w-6 h-6 text-[#0B0B0F] fill-current ml-0.5" />
                  </button>

                  {/* Episode badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-[rgba(212,175,55,0.2)]">
                    <Film className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="text-xs font-medium text-white">
                      {doc.episodes}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider mb-2">
                    {doc.subtitle}
                  </p>
                  <h3 className="font-[var(--font-outfit)] text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-[#A0A0B0] text-sm leading-relaxed line-clamp-3">
                    {doc.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <VideoModal
        videoId={modalVideo}
        isOpen={!!modalVideo}
        onClose={() => setModalVideo(null)}
      />
    </section>
  );
}
