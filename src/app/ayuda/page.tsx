"use client";

import SectionTitle from "@/components/SectionTitle";
import { useState } from "react";

const faqs = [
  {
    question: "¿VeciApp ya funciona en todo Chile?",
    answer: "Por ahora nos enfocamos en Rancagua y sectores cercanos para asegurar calidad y rapidez en la comunidad.",
  },
  {
    question: "¿Cómo contacto a la persona que realizará el servicio?",
    answer: "Luego de publicar, usa el botón de contactar y coordina directamente con la persona.",
  },
  {
    question: "¿Los pagos son en línea o en efectivo?",
    answer: "Los pagos se coordinan entre las partes según prefieran, con transparencia total.",
  },
  {
    question: "¿Qué pasa si el servicio sale mal?",
    answer: "Recomendamos calificar honestamente y preferir vecis con buenas reseñas. Pronto tendremos soporte dedicado.",
  },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      <SectionTitle title="Ayuda y Preguntas frecuentes" subtitle="Resuelve tus dudas sobre VeciApp" />
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="section-card">
              <button
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div>
                  <p className="font-semibold text-text">{faq.question}</p>
                </div>
                <span className="text-secondary">{isOpen ? "-" : "+"}</span>
              </button>
              {isOpen && <p className="mt-3 text-gray-700">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
