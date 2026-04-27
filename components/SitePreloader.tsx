"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Flame, Pizza } from "lucide-react";
import { useEffect, useState } from "react";
import { images, videos } from "@/data/site";

export function SitePreloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 3000);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-ink px-5"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.55,
              ease: "easeInOut"
            }
          }}
          role="status"
          aria-live="polite"
          aria-label="Carregando site da Paradise Pizza's"
        >
          <video
            aria-hidden="true"
            autoPlay
            className="absolute inset-0 h-full w-full object-cover opacity-[0.34]"
            loop
            muted
            playsInline
            poster={images.oven}
            preload="metadata"
            src={videos.oven.src}
          />
          <div aria-hidden="true" className="absolute inset-0 trattoria-check opacity-45" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(130deg,rgba(0,140,69,0.32),rgba(7,8,6,0.86)_35%,rgba(205,33,42,0.28))]"
          />

          <motion.div
            className="relative z-10 w-full max-w-md text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mx-auto mb-8 h-1 w-48 rounded-full italian-ribbon" />

            <div className="relative mx-auto h-56 w-56">
              <motion.div
                className="absolute inset-0 rounded-full border border-italyWhite/20 bg-cream/10 shadow-glow"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute inset-4 overflow-hidden rounded-full border-[10px] border-[#9b542e] bg-ink shadow-glow"
                animate={{
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.025, 1]
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                  src={images.loaderPizza}
                />
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,0.18),transparent_32%),linear-gradient(180deg,transparent,rgba(7,8,6,0.22))]" />
              </motion.div>

              <motion.div
                className="absolute inset-8 rounded-full border border-italyWhite/20"
                animate={{
                  opacity: [0.35, 0.8, 0.35],
                  scale: [1, 1.08, 1]
                }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-lg border border-italyWhite/20 bg-ink/72 px-4 py-2 text-sm font-bold text-italyWhite backdrop-blur"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Flame aria-hidden="true" className="text-italyRed" size={17} />
                Forno aquecendo
              </motion.div>
            </div>

            <div className="mt-9 flex items-center justify-center gap-3 text-italyWhite">
              <Pizza aria-hidden="true" className="text-italyRed" size={22} />
              <p className="font-serif text-4xl font-bold">Paradise Pizza&apos;s</p>
            </div>
            <p className="mt-3 text-sm font-bold uppercase text-cream/60">
              Abrindo o forno
            </p>

            <div className="mx-auto mt-8 h-2 max-w-xs overflow-hidden rounded-full border border-italyWhite/20 bg-cream/10">
              <motion.div
                className="h-full rounded-full italian-ribbon"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
