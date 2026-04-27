"use client";

import { motion } from "framer-motion";
import { galleryItems } from "@/data/site";
import { Reveal, StaggerReveal } from "@/components/Reveal";
import { reveal } from "@/lib/animations";

export function GalleryIngredients() {
  return (
    <section className="bg-[linear-gradient(180deg,#070806,#10120D)] px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-italyRed">
            Galeria e ingredientes
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-cream md:text-5xl">
            Massa, fogo e ingredientes com protagonismo visual.
          </h2>
          <div className="mt-5 h-1 w-44 rounded-full italian-ribbon" />
          <p className="mt-6 text-base leading-8 text-cream/70 md:text-lg">
            A landing page usa fotografia em escala generosa para comunicar textura,
            técnica e frescor sem recorrer aos clichês visuais de pizzaria.
          </p>
        </Reveal>

        <StaggerReveal className="mt-12 grid auto-rows-[260px] gap-5 md:grid-cols-4">
          {galleryItems.map((item, index) => (
            <motion.article
              className={`premium-border relative overflow-hidden rounded-lg bg-basalt ${
                index === 0 || index === 3 ? "md:col-span-2" : ""
              }`}
              key={item.title}
              variants={reveal}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              />
              {item.video ? (
                <video
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={item.image}
                  preload="metadata"
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              ) : null}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,8,6,0.1),rgba(7,8,6,0.78))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-cream">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-cream/70">{item.copy}</p>
              </div>
            </motion.article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
