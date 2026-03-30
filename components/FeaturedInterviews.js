"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import Image from "next/image";
import VideoModal from "./VideoModal";

const interviews = [
  {
    id: "vanjinathan",
    name: "Advocate Vanjinathan",
    role: "Legal Expert & Human Rights Advocate",
    description:
      "Expert legal perspectives exposing the investigation of the Srimathi case, custodial justice, and systemic reform.",
    videoId: "QlkXjLBt_Ic",
    color: "#D4AF37",
  },
];

export default function FeaturedInterviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <section id="interviews" className="relative py-24 lg:py-32">
      <div className="section-divider w-full absolute top-0" />

      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#4B0082]/10 blur-[150px]" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-medium">
            Voices That Matter
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
            Featured <span className="gold-gradient">Interviews</span>
          </h2>
          <p className="text-[#A0A0B0] max-w-2xl mx-auto text-lg">
            Conversations with leaders, thinkers, and changemakers who are
            shaping Tamil Nadu&apos;s political and social landscape.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#4B0082] to-[#D4AF37] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Interview Cards */}
        <div className="max-w-4xl mx-auto">
          {interviews.map((person, i) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`glass-card overflow-hidden group relative`}
            >
              <div className={`flex flex-col lg:flex-row`}>
                {/* Video Preview */}
                <div
                  className={`relative overflow-hidden ${
                    i === 0
                      ? "lg:w-1/2 aspect-video lg:aspect-auto"
                      : "aspect-video"
                  }`}
                >
                  <Image
                    src={`https://img.youtube.com/vi/${person.videoId}/hqdefault.jpg`}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/20 to-transparent" />

                  {/* Play overlay */}
                  <button
                    onClick={() => setModalVideo(person.videoId)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                      <Play className="w-6 h-6 text-white fill-current ml-0.5" />
                    </div>
                  </button>
                </div>

                {/* Info */}
                <div
                  className={`p-6 ${
                    i === 0 ? "lg:w-1/2 lg:flex lg:flex-col lg:justify-center" : ""
                  }`}
                >
                  <div
                    className="w-1 h-8 rounded-full mb-4"
                    style={{ background: person.color }}
                  />
                  <h3 className="font-[var(--font-outfit)] text-xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {person.name}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: person.color }}
                  >
                    {person.role}
                  </p>
                  <p className="text-[#A0A0B0] text-sm leading-relaxed mb-4">
                    {person.description}
                  </p>
                  <button
                    onClick={() => setModalVideo(person.videoId)}
                    className="text-sm text-[#D4AF37] font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
                  >
                    Watch Interview
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
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
