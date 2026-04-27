"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  ChefHat,
  Leaf,
  Pizza,
  Wheat
} from "lucide-react";
import { useRef } from "react";
import { images, videos, whatsappUrl } from "@/data/site";
import { reveal, stagger } from "@/lib/animations";

const stats = [
  { label: "48h", copy: "fermentação natural", tone: "text-italyGreen" },
  { label: "4 horas", copy: "tempo total", tone: "text-italyWhite" },
  { label: "até 3min", copy: "pizzas servidas", tone: "text-italyRed" }
];

const ingredients = [
  { label: "Fermentação natural de 48 horas", icon: Wheat, tone: "text-italyGreen" },
  { label: "Produção artesanal", icon: ChefHat, tone: "text-italyWhite" },
  { label: "Ingredientes selecionados", icon: Leaf, tone: "text-italyRed" },
  { label: "Pizzas montadas e assadas na hora", icon: Pizza, tone: "text-italyWhite" }
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.15]);

  return (
    <section
      className="relative min-h-[88svh] overflow-hidden pt-16"
      id="inicio"
      ref={sectionRef}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.hero})`,
          scale,
          y
        }}
      />
      <motion.video
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={images.hero}
        preload="metadata"
        style={{ scale, y }}
      >
        <source src={videos.hero.src} type="video/mp4" />
      </motion.video>
      <div aria-hidden="true" className="image-vignette absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,6,0.18),rgba(0,140,69,0.22)_28%,rgba(7,8,6,0.52)_52%,rgba(205,33,42,0.2)_72%,rgba(7,8,6,0.96))]"
      />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[calc(88svh-64px)] max-w-7xl items-center px-5 py-16 md:px-8"
        initial={false}
        animate="visible"
        variants={stagger}
      >
        <div className="max-w-4xl">
          <motion.div
            className="mb-6 inline-flex items-center gap-3 rounded-lg border border-italyWhite/25 bg-ink/50 px-4 py-2 text-sm font-semibold text-italyWhite backdrop-blur"
            variants={reveal}
          >
            <Pizza aria-hidden="true" className="text-italyRed" size={17} />
            Pizza de Longa Fermentação • Buffet Gourmet
          </motion.div>

          <motion.h1
            className="font-serif text-5xl font-bold leading-none text-cream sm:text-6xl md:text-8xl"
            variants={reveal}
          >
            Paradise Pizza&apos;s
          </motion.h1>

          <motion.div
            className="mt-5 flex items-center gap-4"
            variants={reveal}
          >
            <span className="h-1 w-56 rounded-full italian-ribbon" />
            <span className="hidden font-serif text-xl italic text-italyWhite/80 sm:inline">
              Uma experiência inesquecível
            </span>
          </motion.div>

          <motion.div
            className="mt-7 flex flex-wrap gap-3"
            variants={stagger}
          >
            {ingredients.map((item) => {
              const Icon = item.icon;

              return (
                <motion.span
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-ink/50 px-4 py-2 text-sm font-bold text-cream backdrop-blur"
                  key={item.label}
                  variants={reveal}
                >
                  <Icon aria-hidden="true" className={item.tone} size={17} />
                  {item.label}
                </motion.span>
              );
            })}
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="mt-8 flex items-center gap-3 text-cream/50"
            variants={reveal}
          >
            <span className="h-px w-10 bg-italyGreen" />
            <ChefHat size={18} />
            <span className="h-px w-10 bg-italyWhite" />
            <Pizza size={18} />
            <span className="h-px w-10 bg-italyRed" />
          </motion.div>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-cream/80 md:text-xl"
            variants={reveal}
          >
            Pizza de longa fermentação, buffet gourmet e uma experiência
            gastronômica pensada para eventos.
          </motion.p>

          <motion.div className="mt-10 flex flex-col gap-4 sm:flex-row" variants={reveal}>
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-italyGreen px-6 text-base font-extrabold text-italyWhite transition hover:bg-italyWhite hover:text-ink hover:shadow-glow"
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              Solicitar Orçamento
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-italyRed/40 bg-italyRed/10 px-6 text-base font-bold text-cream backdrop-blur transition hover:border-italyRed hover:bg-italyRed/20"
              href="#menu"
            >
              Cardápio
              <Pizza aria-hidden="true" size={18} />
            </a>
          </motion.div>

          <motion.div
            className="mt-12 grid max-w-2xl grid-cols-3 gap-3"
            variants={stagger}
          >
            {stats.map((item) => (
              <motion.div
                className="rounded-lg border border-white/10 bg-ink/50 p-4 backdrop-blur"
                key={item.label}
                variants={reveal}
              >
                <p className={`font-serif text-3xl font-bold ${item.tone}`}>
                  {item.label}
                </p>
                <p className="mt-1 text-sm leading-5 text-cream/70">{item.copy}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <div className="relative z-10 border-y border-white/10 bg-basalt/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 text-sm text-cream/70 md:flex-row md:items-center md:justify-between md:px-8">
          <span className="inline-flex items-center gap-2">
            <CalendarCheck aria-hidden="true" className="text-sage" size={17} />
            Casamentos, aniversários, eventos corporativos e confraternizações
          </span>
          <span className="text-italyRed">Montagem artesanal • forno • serviço imediato</span>
        </div>
      </div>
    </section>
  );
}
