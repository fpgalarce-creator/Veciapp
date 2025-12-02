"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AppProvider } from "@/context/AppContext";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <div className="absolute inset-0 -z-10 bg-radial-grid opacity-60" aria-hidden />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 md:pt-10 lg:pt-14">{children}</main>
        <Footer />
      </div>
    </AppProvider>
  );
}
