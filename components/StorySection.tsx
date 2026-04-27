"use client";

import { motion } from "framer-motion";
import { Flame, Leaf, Utensils } from "lucide-react";
import { images } from "@/data/site";
import { Reveal, StaggerReveal } from "@/components/Reveal";
import { reveal } from "@/lib/animations";

const values = [
  {
    icon: Leaf,
    title: "Fermentação natural de 48 horas",
    copy: "Garante leveza e alta digestibilidade."
  },
  {
    icon: Utensils,
    title: "Produção artesanal",
    copy: "Pizzas montadas e assadas na hora."
  },
  {
    icon: Flame,
    title: "Ingredientes selecionados",
    copy: "Uma experiência gastronômica pensada para eventos."
  }
];

export function StorySection() {
  return (
    <section className="bg-ink px-5 py-24 md:px-8" id="historia">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase text-italyGreen">
            A experiência Paradise Pizza&apos;s
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-cream md:text-5xl">
            Uma experiência gastronômica pensada para eventos.
          </h2>
          <div className="mt-5 h-1 w-44 rounded-full italian-ribbon" />
          <p className="mt-6 max-w-2xl text-base leading-8 text-cream/70 md:text-lg">
            Nossa massa é produzida com fermentação natural de 48 horas, o que
            garante leveza e alta digestibilidade.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-cream/70 md:text-lg">
            Produção artesanal, ingredientes selecionados e pizzas montadas e
            assadas na hora.
          </p>
        </Reveal>

        <Reveal className="relative">
          <div className="premium-border relative aspect-[4/5] overflow-hidden rounded-lg bg-basalt shadow-glow">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${images.oven})` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,6,0.1),rgba(7,8,6,0.72))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="font-serif text-3xl font-bold text-italyWhite">48 horas</p>
              <p className="mt-2 max-w-sm text-sm leading-6 text-cream/70">
                Fermentação natural de 48 horas para leveza e alta digestibilidade.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <StaggerReveal className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-3">
        {values.map((item) => {
          const Icon = item.icon;

          return (
            <motion.article
              className="rounded-lg border border-white/10 bg-basalt/70 p-6"
              key={item.title}
              variants={reveal}
            >
              <Icon
                aria-hidden="true"
                className={item.title === "Produção artesanal" ? "text-italyWhite" : item.title === "Ingredientes selecionados" ? "text-italyRed" : "text-italyGreen"}
                size={26}
              />
              <h3 className="mt-5 font-serif text-2xl font-bold text-cream">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-cream/70">{item.copy}</p>
            </motion.article>
          );
        })}
      </StaggerReveal>
    </section>
  );
}
