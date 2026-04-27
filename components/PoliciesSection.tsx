"use client";

import { motion } from "framer-motion";
import { Banknote, CalendarCheck2, CreditCard, UsersRound } from "lucide-react";
import { Reveal, StaggerReveal } from "@/components/Reveal";
import { paymentPolicies } from "@/data/site";
import { reveal } from "@/lib/animations";

const icons = [CalendarCheck2, Banknote, UsersRound, CreditCard];

export function PoliciesSection() {
  return (
    <section
      className="border-y border-white/10 bg-[linear-gradient(180deg,#10120D,#070806)] px-5 py-24 md:px-8"
      id="pagamentos"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <div className="mb-6 h-1 w-40 rounded-full italian-ribbon" />
          <p className="text-sm font-bold uppercase text-italyGreen">
            Política de valores & pagamentos
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-cream md:text-5xl">
            Reserva da data, parcelamento e formas de pagamento.
          </h2>
          <p className="mt-6 text-base leading-8 text-cream/70 md:text-lg">
            Para reserva da data, é necessário o pagamento de 20% do valor total.
            Os 80% restantes deverão ser quitados até a data do evento.
          </p>
        </Reveal>

        <StaggerReveal className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {paymentPolicies.map((policy, index) => {
            const Icon = icons[index] ?? Banknote;
            const accent =
              index % 3 === 0
                ? "text-italyGreen"
                : index % 3 === 1
                  ? "text-italyWhite"
                  : "text-italyRed";

            return (
              <motion.article
                className="rounded-lg border border-white/10 bg-basalt/70 p-6 transition hover:border-italyRed/35 hover:bg-deepRed/15"
                key={policy.title}
                variants={reveal}
                whileHover={{ y: -6 }}
              >
                <Icon aria-hidden="true" className={accent} size={28} />
                <h3 className="mt-5 font-serif text-2xl font-bold text-cream">
                  {policy.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-cream/70">{policy.copy}</p>
              </motion.article>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
