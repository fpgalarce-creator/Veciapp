import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/AppProviders";

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
      <body className={`${inter.variable} min-h-screen bg-base text-surface antialiased theme-galaxy`}>
        <div className="space-time-warp-layer" aria-hidden />
        <div className="space-time-grid fixed inset-0 -z-10" aria-hidden />
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
