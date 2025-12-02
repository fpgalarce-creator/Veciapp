import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "VeciApp | Talento local de Rancagua",
  description:
    "Conecta con vecinos, profesionales y PYMEs de Rancagua para resolver tareas del día a día.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} min-h-screen bg-brand-navy text-surface antialiased`}
      >
        <div className="absolute inset-0 bg-radial-grid opacity-70" aria-hidden />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 md:pt-10 lg:pt-14">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
