import "./globals.css";
import { Orbitron, Rajdhani, Share_Tech_Mono } from "next/font/google";
import favicon from "../src/favicon_portifolio.png";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
});
const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});
const techMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-techmono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Peterson Brito - Desenvolvedor Full Stack",
  description:
    "Portfólio de Peterson Brito de Albuquerque - Desenvolvedor Full Stack em Manaus/AM. Interface HUD interativa. React, React Native, Node.js e TypeScript.",
  keywords: [
    "Peterson Brito",
    "Desenvolvedor Full Stack",
    "Full Stack Developer",
    "React",
    "React Native",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Next.js",
    "desenvolvedor web",
    "desenvolvedor mobile",
    "Manaus",
    "portfólio",
  ],
  authors: [{ name: "Peterson Brito de Albuquerque" }],
  creator: "Peterson Brito de Albuquerque",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Peterson Brito - Desenvolvedor Full Stack",
    description:
      "Aplicações web e mobile com React, React Native, Node.js e TypeScript. Do conceito ao deploy.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peterson Brito - Desenvolvedor Full Stack",
    description:
      "Aplicações web e mobile com React, React Native, Node.js e TypeScript.",
  },
  icons: {
    icon: favicon.src,
    shortcut: favicon.src,
    apple: favicon.src,
  },
};

export const viewport = {
  themeColor: "#01060e",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${orbitron.variable} ${rajdhani.variable} ${techMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
