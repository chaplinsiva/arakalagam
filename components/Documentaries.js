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
              initial={{ opacity: 0, scale: 0.98 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-6xl"
            >
              <div className="glass-card overflow-hidden group h-full rounded-3xl border-0 shadow-2xl">
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] sm:aspect-[21/9] overflow-hidden bg-black">
                  <Image
                    src={`https://img.youtube.com/vi/${doc.videoId}/maxresdefault.jpg`}
                    alt={doc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80"
                  />
                  {/* Clean shadow overlay instead of pink tint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent" />

                  {/* Play button Centered */}
                  <button
                    onClick={() => setModalVideo(doc.videoId)}
                    className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[rgba(212,175,55,0.9)] flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.4)] backdrop-blur-md"
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-black fill-current ml-2" />
                  </button>

                  {/* Episode badge */}
                  <div className="absolute top-6 sm:top-8 left-6 sm:left-8 flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-[rgba(212,175,55,0.3)]">
                    <Film className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-sm font-semibold text-white tracking-widest uppercase">
                      {doc.episodes}
                    </span>
                  </div>

                  {/* Minimalist Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                    <div className="max-w-4xl">
                      <p className="text-sm sm:text-base text-[#D4AF37] font-semibold uppercase tracking-[0.2em] mb-4">
                        {doc.subtitle}
                      </p>
                      <h3 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl tracking-tight">
                        {doc.title}
                      </h3>
                      <p className="text-[#E0E0E0] text-lg sm:text-xl leading-relaxed font-light drop-shadow-md">
                        {doc.description}
                      </p>
                    </div>
                  </div>
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
