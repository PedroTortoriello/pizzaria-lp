import { WhatsAppIcon } from "@/components/BrandIcons";
import { whatsappUrl } from "@/data/site";

export function FloatingWhatsApp() {
  return (
    <a
      aria-label="Falar com a Paradise Pizza's no WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 min-h-14 w-14 min-w-14 items-center justify-center rounded-lg border border-italyGreen/50 bg-italyGreen text-italyWhite shadow-glow transition hover:bg-italyWhite hover:text-ink"
      href={whatsappUrl}
      rel="noreferrer"
      target="_blank"
      title="WhatsApp"
    >
      <WhatsAppIcon size={24} />
    </a>
  );
}
