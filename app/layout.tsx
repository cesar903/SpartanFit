import type { Metadata } from "next";
import { Archivo, Bebas_Neue } from "next/font/google";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { WhatsappFloat } from "./components/whatsapp-float";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Spartan Fit | Academia de Alta Performance",
    template: "%s | Spartan Fit",
  },
  description:
    "Academia com musculação, Zumba, Fit Dance, Pilates, Boxe, Jiu-jitsu e Kickboxing em Jardim Tupã.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <div id="conteudo" className="flex-1">
          {children}
        </div>
        <WhatsappFloat />
        <SiteFooter />
      </body>
    </html>
  );
}
