import type { Metadata } from "next";
import { Open_Sans, Quicksand } from "next/font/google";

import Footer from "../components/layout/Footer";
import FloatingButtons from "../components/layout/FloatingButtons";
import Header from "../components/layout/Header";
import MobileCtaBar from "../components/layout/MobileCtaBar";
import Topbar from "../components/layout/Topbar";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Funeraria Cubillos — Funeraria · Crematorio · Salas Velatorias | Iquique",
  description:
    "Servicio funerario, cremacion y traslados en Iquique, Alto Hospicio y Pozo Almonte. Atencion 24/7 los 365 dias del ano.",
  icons: { icon: "/assets/img/favicon.png" },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="es-CL"
      suppressHydrationWarning
      className={`${quicksand.variable} ${openSans.variable} h-full`}
    >
      <body
        className={`${openSans.className} min-h-full bg-white pb-[86px] text-brand-primary antialiased md:pb-0`}
      >
        <div className="flex min-h-screen flex-col">
          <Topbar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <MobileCtaBar />
        <FloatingButtons />
      </body>
    </html>
  );
}
