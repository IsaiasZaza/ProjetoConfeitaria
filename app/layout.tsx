import { Metadata } from 'next';

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import Baixo from "./components/Baixo";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Confeitaria Abelha",
  description: "Generated by create next app",
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
