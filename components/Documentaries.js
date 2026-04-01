"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Play, Crown } from "lucide-react";
import VideoModal from "./VideoModal";

const documentaries = [
  {
    id: "thiruparankundram",
    videoId: "21tZWM5l7xY",
    /** Used to compute midpoint start for background autoplay (~77 min film) */
    durationSeconds: 4617,
    title: "Thiruparankundram Files",
    subtitle: "Investigative Documentary Film",
    description:
      "A deep dive into the controversies surrounding Thiruparankundram — uncovering hidden truths through rigorous investigation and firsthand testimonies by Thavam and Thamizh Dasan.",
    tag: "Original film",
  },
];

/** YouTube embed: muted autoplay from `start`, loop, chromeless — cinematic background */
function cinematicEmbedSrc(videoId, startSeconds) {
  const q = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    iv_load_policy: "3",
    disablekb: "1",
    fs: "0",
    start: String(Math.max(0, Math.floor(startSeconds))),
  });
  return `https://www.youtube.com/embed/${videoId}?${q.toString()}`;
}

export default function Documentaries() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();
  const [modalVideo, setModalVideo] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const doc = documentaries[0];
  const centerStartSeconds = useMemo(
    () => Math.floor((doc.durationSeconds ?? 0) / 2),
    [doc.durationSeconds]
  );

  const shouldAutoplay = mounted && inView && !prefersReducedMotion;
  const thumbSrc = `https://img.youtube.com/vi/${doc.videoId}/maxresdefault.jpg`;

  return (
    <section
      id="documentaries"
      ref={ref}
      className="relative min-h-[100dvh] overflow-hidden bg-black"
    >
      {/* Cinematic background video — starts at timeline midpoint */}
      <div className="absolute inset-0 z-0">
        {shouldAutoplay ? (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <iframe
              title="Documentary preview (muted)"
              aria-hidden
              src={cinematicEmbedSrc(doc.videoId, centerStartSeconds)}
              allow="autoplay; encrypted-media; picture-in-picture"
              className="absolute left-1/2 top-1/2 border-0"
              style={{
                width: "100vw",
                height: "56.25vw",
                minHeight: "100vh",
                minWidth: "177.78vh",
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>
        ) : (
          <div className="absolute inset-0">
            <Image
              src={thumbSrc}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, #000 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Section title + thumbnail / copy */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col px-6 pb-14 pt-24 sm:px-10 sm:pb-20 sm:pt-28 lg:px-16 lg:pb-24">
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-10 w-full max-w-[1200px] text-center lg:mb-12 lg:text-left"
        >
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span
                className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]/80 sm:w-14"
                aria-hidden
              />
              <Crown
                className="h-6 w-6 text-[#D4AF37] drop-shadow-[0_0_12px_rgba(212,175,55,0.45)] sm:h-7 sm:w-7"
                aria-hidden
              />
              <span
                className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]/80 sm:w-14"
                aria-hidden
              />
            </div>
            <h2 className="font-[var(--font-outfit)] text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#E8C84A] via-[#D4AF37] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(212,175,55,0.25)]">
                Our Documentary
              </span>{" "}
              <span className="text-white/95">films</span>
            </h2>
          </div>
        </motion.header>

        <div className="mt-auto flex w-full flex-col gap-10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 lg:flex-row lg:items-end lg:gap-14">
          {/* Left: video thumbnail box */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="w-full shrink-0 lg:max-w-[380px]"
          >
            <button
              type="button"
              onClick={() => setModalVideo(doc.videoId)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-black/40 ring-1 ring-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:ring-white/20 sm:rounded-3xl"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={thumbSrc}
                  alt={`${doc.title} thumbnail`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-black shadow-2xl transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    {doc.tag}
                  </p>
                  <p className="mt-1 font-[var(--font-outfit)] text-lg font-semibold leading-tight text-white sm:text-xl">
                    {doc.title}
                  </p>
                </div>
              </div>
            </button>
            <p className="mt-3 text-center text-[11px] text-white/40 lg:text-left">
              Tap to watch from the beginning with sound
            </p>
          </motion.div>

          {/* Right: headline + copy + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-0 flex-1 pb-1"
          >
            <h3 className="font-[var(--font-outfit)] text-[clamp(2rem,5.5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
              {doc.title}
            </h3>
            <p className="mt-4 max-w-xl text-base font-medium text-white/55 sm:text-lg">
              {doc.subtitle}
            </p>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-[17px] sm:leading-[1.65]">
              {doc.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:mt-12">
              <button
                type="button"
                onClick={() => setModalVideo(doc.videoId)}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-black transition-all duration-300 hover:bg-white/90 active:scale-[0.98] sm:px-8 sm:py-4 sm:text-base"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:scale-105">
                  <Play className="ml-0.5 h-4 w-4 fill-current text-black" />
                </span>
                Watch the film
              </button>
              <p className="text-xs text-white/35 sm:text-sm">
                Background plays muted from mid‑film; full player has sound
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-14 h-px max-w-[1200px] origin-left bg-gradient-to-r from-transparent via-white/20 to-transparent sm:mt-16"
        />
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
