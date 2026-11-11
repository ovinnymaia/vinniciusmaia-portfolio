import "./globals.css";

export const metadata = {
  title: "Vinnicius Maia | Desenvolvimento Web, Digital & IA",
  description: "Criação de sites, landing pages, press kits, lojas virtuais, sistemas e soluções digitais com inteligência artificial.",
  openGraph: {
    title: "Vinnicius Maia | Digital Experience & AI",
    description: "Tecnologia com identidade. Experiências digitais com propósito.",
    type: "website",
    locale: "pt_BR"
  }
};

export const viewport = { themeColor: "#11100e", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
