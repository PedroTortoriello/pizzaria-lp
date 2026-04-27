"use client";

import { motion } from "framer-motion";
import { Flame, Leaf, Utensils } from "lucide-react";
import { images } from "@/data/site";
import { Reveal, StaggerReveal } from "@/components/Reveal";
import { reveal } from "@/lib/animations";

const values = [
  {
    icon: Leaf,
    title: "Longa fermentação",
    copy: "48 horas de descanso para uma massa leve, aromática e de alta digestibilidade."
  },
  {
    icon: Utensils,
    title: "Produção artesanal",
    copy: "Pizzas abertas, montadas e assadas na hora, com acabamento de buffet gourmet."
  },
  {
    icon: Flame,
    title: "Ritual de evento",
    copy: "Equipe e estrutura dimensionadas para receber convidados com ritmo e elegância."
  }
];

export function StorySection() {
  return (
    <section className="bg-ink px-5 py-24 md:px-8" id="historia">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase text-italyGreen">
            A experiência Paradise
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-cream md:text-5xl">
            Tradição italiana com presença de alta gastronomia.
          </h2>
          <div className="mt-5 h-1 w-44 rounded-full italian-ribbon" />
          <p className="mt-6 max-w-2xl text-base leading-8 text-cream/70 md:text-lg">
            A Paradise Pizza&apos;s foi pensada para eventos que pedem mais do que
            um cardápio: pedem cena, aroma, ritmo e memória. A massa de
            fermentação natural de 48 horas chega ao evento pronta para ser
            trabalhada artesanalmente, recebendo ingredientes selecionados antes
            de ir ao forno.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-cream/70 md:text-lg">
            O resultado é um serviço elegante, organizado e caloroso, ideal para
            casamentos, aniversários, confraternizações e celebrações especiais.
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
                Fermentação lenta para leveza, sabor e crocância equilibrada.
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
                className={item.title === "Produção artesanal" ? "text-italyWhite" : item.title === "Ritual de evento" ? "text-italyRed" : "text-italyGreen"}
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
