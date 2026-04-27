"use client";

import { motion } from "framer-motion";
import { ChefHat, Sparkles } from "lucide-react";
import { Reveal, StaggerReveal } from "@/components/Reveal";
import { specialEntries, whatsappUrl } from "@/data/site";
import { reveal } from "@/lib/animations";

export function SpecialEntriesSection() {
  return (
    <section
      className="bg-[linear-gradient(180deg,#070806,#10120D)] px-5 py-24 md:px-8"
      id="entradas"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase text-italyRed">
              Entradas especiais
            </p>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-cream md:text-5xl">
              Crostini e Canapés.
            </h2>
          </div>
        </Reveal>

        <StaggerReveal className="mt-12 grid gap-5 lg:grid-cols-2">
          {specialEntries.map((entry, index) => (
            <motion.article
              className={`relative overflow-hidden rounded-lg border p-7 ${
                index === 0
                  ? "border-italyGreen/25 bg-deepGreen/25"
                  : "border-italyRed/25 bg-deepRed/20"
              }`}
              key={entry.title}
              variants={reveal}
              whileHover={{ y: -7, scale: 1.01 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="absolute left-0 top-0 h-1 w-full italian-ribbon" />
              <div className="flex items-start justify-between gap-5">
                <ChefHat
                  aria-hidden="true"
                  className={index === 0 ? "text-italyGreen" : "text-italyRed"}
                  size={30}
                />
                <span className="rounded-lg border border-white/10 bg-italyWhite/10 px-3 py-1 text-xs font-bold text-italyWhite">
                  {entry.price}
                </span>
              </div>
              <h3 className="mt-8 font-serif text-4xl font-bold text-cream">
                {entry.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-cream/70">{entry.copy}</p>
            </motion.article>
          ))}
        </StaggerReveal>

        <Reveal className="mt-8">
          <a
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-italyRed px-5 text-sm font-extrabold text-italyWhite transition hover:bg-italyWhite hover:text-ink"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            Solicitar Orçamento
            <Sparkles aria-hidden="true" size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
