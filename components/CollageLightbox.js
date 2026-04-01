"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function CollageLightbox({
  open,
  images,
  index,
  onClose,
  onPrev,
  onNext,
}) {
  const handleKey = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [open, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const src = index !== null && images[index] ? `/pics/${images[index]}` : null;

  return (
    <AnimatePresence>
      {open && src && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Photo full screen"
          className="fixed inset-0 z-[200] flex items-center justify-center touch-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#050508]/96 backdrop-blur-md"
            aria-label="Close"
            onClick={onClose}
          />

          <div
            className="relative z-[1] flex h-full w-full max-h-[100dvh] flex-col items-center justify-center px-2 sm:px-6"
            style={{
              paddingTop: "max(0.5rem, env(safe-area-inset-top))",
              paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))",
              paddingLeft: "max(0.5rem, env(safe-area-inset-left))",
              paddingRight: "max(0.5rem, env(safe-area-inset-right))",
            }}
          >
            <div className="relative flex max-h-full w-full max-w-[min(100vw,1600px)] flex-1 items-center justify-center">
              <motion.img
                key={src}
                src={src}
                alt=""
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="max-h-[min(100dvh,100svh)] max-w-full object-contain select-none"
                draggable={false}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <button
              type="button"
              onClick={onClose}
              className="absolute right-2 top-2 z-[2] flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white shadow-lg backdrop-blur-md transition hover:bg-black/70 sm:right-4 sm:top-4 sm:h-12 sm:w-12"
              aria-label="Close"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-1 top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(212,175,55,0.35)] bg-[#0B0B0F]/85 text-[#D4AF37] shadow-xl backdrop-blur-md transition hover:scale-105 active:scale-95 sm:left-3 sm:h-12 sm:w-12"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-1 top-1/2 z-[2] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(212,175,55,0.35)] bg-[#0B0B0F]/85 text-[#D4AF37] shadow-xl backdrop-blur-md transition hover:scale-105 active:scale-95 sm:right-3 sm:h-12 sm:w-12"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <p className="absolute bottom-2 left-0 right-0 z-[2] text-center text-xs text-white/60 sm:bottom-4">
              {index + 1} / {images.length}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
