import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="es" className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-text antialiased`}
      >
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 pb-16 pt-6 md:pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
