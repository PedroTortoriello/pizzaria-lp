import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paradise Pizza's | Buffet Gourmet de Pizza",
  description:
    "Landing page premium para a Paradise Pizza's, buffet gourmet de pizzas de longa fermentação para eventos.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg"
  },
  openGraph: {
    title: "Paradise Pizza's",
    description:
      "Massa de fermentação natural de 48 horas, produção artesanal e pizzas montadas na hora para eventos.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
