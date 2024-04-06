import { Metadata } from 'next';

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Baixo from "./components/Baixo";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Confeitaria Abelhinha Doces",
  description: "Bem-vindo à nossa confeitaria Abelinha, onde cada página é uma tentação irresistível! Explore nossa variedade de bolos, doces, tortas e muito mais. Deixe-se levar pelos aromas e sabores únicos de nossas criações artesanais. Encomende online e receba nossas delícias fresquinhas no conforto da sua casa. Satisfaça seu paladar com a nossa confeitaria de qualidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <header>
          <Menu />
          <Logo />
          <NavBar />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Baixo />
        </footer>
      </body>
    </html>
  );
}
