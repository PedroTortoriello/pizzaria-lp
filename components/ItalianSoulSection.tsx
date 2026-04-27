"use client";

import { motion } from "framer-motion";
import { Flame, Leaf, Pizza, Wheat } from "lucide-react";
import { Reveal, StaggerReveal } from "@/components/Reveal";
import { images } from "@/data/site";
import { reveal } from "@/lib/animations";

const pillars = [
  {
    title: "Montagem artesanal",
    copy: "Pizzas montadas e assadas na hora.",
    image: images.oven,
    icon: Flame,
    tone: "text-italyRed"
  },
  {
    title: "Ingredientes selecionados",
    copy: "Uma experiência gastronômica pensada para eventos.",
    image: images.margherita,
    icon: Leaf,
    tone: "text-italyGreen"
  },
  {
    title: "Fermentação natural de 48 horas",
    copy: "Garante leveza e alta digestibilidade.",
    image: images.dough,
    icon: Wheat,
    tone: "text-italyWhite"
  }
];

export function ItalianSoulSection() {
  return (
    <section className="relative overflow-hidden bg-basalt px-5 py-24 md:px-8">
      <div aria-hidden="true" className="absolute inset-0 trattoria-check opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-italyWhite/20 bg-ink/70 text-italyRed shadow-glow">
            <Pizza aria-hidden="true" size={28} />
          </div>
          <p className="text-sm font-bold uppercase text-italyGreen">
            A experiência Paradise Pizza&apos;s
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-cream md:text-5xl">
            Produção artesanal, ingredientes selecionados e pizzas montadas na hora.
          </h2>
          <p className="mt-6 text-base leading-8 text-cream/70 md:text-lg">
            Pizza de longa fermentação, buffet gourmet e uma experiência
            inesquecível.
          </p>
        </Reveal>

        <StaggerReveal className="mt-14 grid gap-5 lg:grid-cols-3">
          {pillars.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="group overflow-hidden rounded-lg  bg-ink/78"
                key={item.title}
                variants={reveal}
                whileHover={{ y: -8 }}
              >
                <div className="relative aspect-[4/5] overflow-hidden arched-frame">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,6,0.08),rgba(7,8,6,0.78))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Icon aria-hidden="true" className={item.tone} size={28} />
                    <h3 className="mt-4 font-serif text-3xl font-bold text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-cream/70">{item.copy}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
