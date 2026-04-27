import { Clock3, MapPin } from "lucide-react";
import {
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
  YouTubeIcon
} from "@/components/BrandIcons";
import { socialLinks, whatsappUrl } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-14 md:px-8" id="contato">
      <div className="mx-auto mb-12 h-1 max-w-7xl rounded-full italian-ribbon" />
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-serif text-3xl font-bold text-cream">Paradise Pizza&apos;s</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-cream/70">
            Buffet gourmet de pizza de longa fermentação para eventos com produção
            artesanal, ingredientes selecionados e serviço no local.
          </p>
          <a
            className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-italyGreen px-5 text-sm font-extrabold text-italyWhite transition hover:bg-italyWhite hover:text-ink"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <WhatsAppIcon size={18} />
            Chamar no WhatsApp
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase text-italyGreen">Atendimento</h2>
          <div className="mt-5 space-y-4 text-sm leading-6 text-cream/70">
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-1 shrink-0 text-sage" size={18} />
              Eventos sob agendamento. Endereço de base a confirmar.
            </p>
            <p className="flex gap-3">
              <Clock3 aria-hidden="true" className="mt-1 shrink-0 text-italyRed" size={18} />
              Horários ajustáveis conforme o evento, com chegada 2h antes para montagem.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase text-italyRed">Redes sociais</h2>
          <div className="mt-5 flex gap-3">
            <a
              aria-label="WhatsApp da Paradise Pizza's"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-cream transition hover:border-italyGreen hover:bg-italyGreen hover:text-italyWhite"
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              <WhatsAppIcon size={20} />
            </a>
            <a
              aria-label="Instagram da Paradise Pizza's"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-cream transition hover:border-italyRed hover:bg-italyRed hover:text-italyWhite"
              href={socialLinks.instagram}
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              aria-label="TikTok da Paradise Pizza's"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-cream transition hover:border-italyWhite hover:bg-italyWhite hover:text-ink"
              href={socialLinks.tiktok}
              rel="noreferrer"
              target="_blank"
            >
              <TikTokIcon size={20} />
            </a>
            <a
              aria-label="YouTube da Paradise Pizza's"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 text-cream transition hover:border-italyRed hover:bg-italyRed hover:text-italyWhite"
              href={socialLinks.youtube}
              rel="noreferrer"
              target="_blank"
            >
              <YouTubeIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Paradise Pizza&apos;s. Todos os direitos reservados.</span>
        <span>Desenvolvido por Pedro Tortoriello.</span>
      </div>
    </footer>
  );
}
