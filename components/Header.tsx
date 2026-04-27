"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { whatsappUrl } from "@/data/site";

const navItems = [
  { label: "História", href: "#historia" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Menu", href: "#menu" },
  { label: "Entradas", href: "#entradas" },
  { label: "Pagamentos", href: "#pagamentos" },
  { label: "Contato", href: "#contato" }
];

export function Header() {
  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-xl"
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="italian-ribbon h-1 w-full" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a className="focus-ring font-serif text-xl font-bold text-cream" href="#inicio">
          Paradise Pizza&apos;s
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-cream/75 lg:flex">
          {navItems.map((item) => (
            <a
              className="focus-ring transition hover:text-gold"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="focus-ring hidden min-h-10 items-center gap-2 rounded-lg border border-italyGreen/35 bg-italyGreen/10 px-4 text-sm font-bold text-cream transition hover:border-italyGreen hover:bg-italyGreen/25 md:inline-flex"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <WhatsAppIcon size={17} />
            Solicitar Orçamento
          </a>

          <button
            aria-label="Abrir menu"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-cream lg:hidden"
            type="button"
          >
            <Menu aria-hidden="true" size={20} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
