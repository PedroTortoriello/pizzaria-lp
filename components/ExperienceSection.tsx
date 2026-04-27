"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  ConciergeBell,
  ShieldCheck,
  Users
} from "lucide-react";
import { Reveal, StaggerReveal } from "@/components/Reveal";
import {
  eventDetails,
  eventStructure,
  images,
  serviceFormats,
  staffRules,
  videos
} from "@/data/site";
import { reveal } from "@/lib/animations";

const detailIcons = [Clock3, ConciergeBell, Users, ShieldCheck];

export function ExperienceSection() {
  return (
    <section
      className="border-y border-white/10 bg-[linear-gradient(180deg,#10120D,#070806)] px-5 py-24 md:px-8"
      id="experiencia"
    >
      <div className="mx-auto h-1 max-w-7xl rounded-full italian-ribbon" />

      <div className="mx-auto mt-12 grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase text-italyGreen">
            Do forno à celebração
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-cream md:text-5xl">
            Um buffet organizado para servir pizzas em até 3 minutos.
          </h2>
          <p className="mt-6 text-base leading-8 text-cream/70 md:text-lg">
            A equipe chega com antecedência para montar a operação, preparar a
            bancada e ajustar o ritmo do rodízio ao perfil do evento. O serviço
            pode acontecer em entradas de 30 minutos ou no fluxo tradicional.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-italyRed/30 bg-italyRed/10 px-4 py-3 text-sm font-semibold text-italyWhite">
            <ShieldCheck aria-hidden="true" size={18} />
            Mínimo de 30 convidados
          </div>
        </Reveal>

        <Reveal>
          <motion.div
            className="premium-border relative mx-auto aspect-[16/11] w-full max-w-md overflow-hidden rounded-lg bg-basalt shadow-glow lg:mr-0 lg:max-w-sm xl:max-w-md"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <video
              aria-label="Pizza artesanal assando em forno profissional"
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster={images.oven}
              preload="metadata"
            >
              <source src={videos.oven.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,6,0.04),rgba(7,8,6,0.78))]" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-sm font-bold uppercase text-italyGreen">
                Serviço ao vivo
              </p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-cream">
                Forno, massa e finalização na hora.
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-cream/70">
                Um ponto visual de experiência para convidados acompanharem o preparo.
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>

      <StaggerReveal className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {eventDetails.map((item, index) => {
          const Icon = detailIcons[index] ?? CheckCircle2;

          return (
            <motion.article
              className="rounded-lg border border-white/10 bg-ink/50 p-6 transition hover:border-italyGreen/40 hover:bg-deepGreen/25"
              key={item.label}
              variants={reveal}
              whileHover={{ y: -6 }}
            >
              <Icon aria-hidden="true" className="text-italyGreen" size={26} />
              <p className="mt-5 text-sm font-bold uppercase text-cream/50">
                {item.label}
              </p>
              <h3 className="mt-2 font-serif text-3xl font-bold text-italyWhite">
                {item.value}
              </h3>
              <p className="mt-3 text-sm leading-6 text-cream/70">{item.copy}</p>
            </motion.article>
          );
        })}
      </StaggerReveal>

      <div className="mx-auto mt-6 grid max-w-7xl gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-lg border border-italyGreen/25 bg-deepGreen/20 p-6">
            <p className="text-sm font-bold uppercase text-italyGreen">
              O que levamos
            </p>
            <h3 className="mt-3 font-serif text-3xl font-bold text-cream">
              Estrutura do evento
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-cream/70">
              {eventStructure.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-italyGreen"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="h-full rounded-lg border border-italyRed/25 bg-deepRed/20 p-6">
            <p className="text-sm font-bold uppercase text-italyRed">
              Equipe e requisitos
            </p>
            <h3 className="mt-3 font-serif text-3xl font-bold text-cream">
              Detalhes da experiência
            </h3>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-cream/70">
              {staffRules.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-italyRed"
                    size={18}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <StaggerReveal className="mx-auto mt-6 grid max-w-7xl gap-4 lg:grid-cols-3">
        {serviceFormats.map((format) => (
          <motion.article
            className="rounded-lg border border-white/10 bg-basalt/70 p-6 transition hover:border-italyWhite/35"
            key={format.title}
            variants={reveal}
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-sm font-bold text-gold">{format.note}</p>
            <h3 className="mt-3 font-serif text-2xl font-bold text-cream">
              {format.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-cream/70">{format.copy}</p>
          </motion.article>
        ))}
      </StaggerReveal>
    </section>
  );
}
