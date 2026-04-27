"use client";

import { motion } from "framer-motion";
import { ArrowRight, Pizza, ShoppingBag } from "lucide-react";
import { menuItems, whatsappUrl } from "@/data/site";
import { Reveal, StaggerReveal } from "@/components/Reveal";
import { reveal } from "@/lib/animations";

export function MenuHighlights() {
  const sweetNames = new Set(["Banana Nevada", "Morango com Chocolate"]);
  const groups = [
    {
      label: "Pizzas salgadas",
      note: "Todas as pizzas salgadas acompanham molho de tomate",
      items: menuItems.filter((item) => !sweetNames.has(item.name)),
      tone: "text-deepGreen",
      border: "border-italyGreen/25",
      wash: "bg-italyWhite"
    },
    {
      label: "Pizzas doces",
      items: menuItems.filter((item) => sweetNames.has(item.name)),
      tone: "text-italyRed",
      border: "border-italyRed/25",
      wash: "bg-italyWhite"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-cream px-5 py-24 md:px-8" id="menu">
      <div aria-hidden="true" className="absolute inset-0 trattoria-check opacity-30" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,245,240,0.86),rgba(244,233,210,0.96)_42%,rgba(218,174,92,0.18))]"
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-italyRed">
              Sabores
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
              Escolha um dos seguintes sabores para o seu rodízio
            </h2>
            <div className="mt-5 h-1 w-56 rounded-full italian-ribbon" />
          </div>
          <a
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-lg border border-italyRed/50 bg-italyWhite/70 px-5 text-sm font-extrabold text-italyRed transition hover:bg-italyRed hover:text-italyWhite"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            Solicitar Orçamento
            <ShoppingBag aria-hidden="true" size={18} />
          </a>
        </Reveal>

        <div className="mt-12 space-y-8">
          {groups.map((group) => (
            <Reveal
              className={`relative overflow-hidden rounded-lg border ${group.border} bg-italyWhite/78 p-4 shadow-glow backdrop-blur md:p-6`}
              key={group.label}
            >
              <div className="relative h-1.5 rounded-full italian-ribbon" />
              <div className="relative mt-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className={`text-sm font-extrabold uppercase ${group.tone}`}>
                    {group.label}
                  </p>
                  {group.note ? (
                    <h3 className="mt-2 max-w-2xl font-serif text-3xl font-bold text-ink md:text-4xl">
                      {group.note}
                    </h3>
                  ) : null}
                </div>
                <Pizza aria-hidden="true" className={group.tone} size={28} />
              </div>

              <StaggerReveal className="relative mt-6 grid gap-4 lg:grid-cols-2">
                {group.items.map((item) => (
                  <motion.article
                    className={`group relative flex min-h-52 flex-col overflow-hidden rounded-lg border border-ink/10 ${group.wash} p-5 transition hover:border-gold/70 sm:flex-row sm:items-center sm:gap-5`}
                    key={item.name}
                    variants={reveal}
                    whileHover={{ y: -5, scale: 1.005 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 italian-ribbon" />
                    <div className="relative mx-auto flex h-36 w-36 shrink-0 items-center justify-center sm:mx-0 sm:h-40 sm:w-40">
                      <motion.img
                        alt={item.name}
                        className="relative z-10 h-full w-full object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.24)]"
                        src={item.image}
                        whileHover={{ rotate: -2, scale: 1.08 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                      />
                    </div>

                    <div className="relative mt-4 flex min-w-0 flex-1 flex-col sm:mt-0">
                      <div className="flex items-center justify-between gap-3">
                        <p className={`text-xs font-extrabold uppercase ${group.tone}`}>
                          {group.label}
                        </p>
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-ink/10 text-ink/55">
                          <Pizza aria-hidden="true" size={16} />
                        </span>
                      </div>
                      <h4 className="mt-2 font-serif text-3xl font-bold leading-tight text-ink">
                        {item.name}
                      </h4>
                      <p className="mt-3 text-sm leading-6 text-ink/70">
                        {item.description}
                      </p>
                      <a
                        className="focus-ring mt-5 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-italyRed transition group-hover:gap-3 group-hover:text-deepGreen"
                        href={whatsappUrl}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Solicitar Orçamento
                        <ArrowRight aria-hidden="true" size={16} />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </StaggerReveal>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
