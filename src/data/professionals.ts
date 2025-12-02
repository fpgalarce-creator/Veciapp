export type Professional = {
  id: number;
  name: string;
  role: string;
  sectors: string;
  price: string;
  rating: number;
  badge?: string;
  avatar?: string;
  testimonials?: { author: string; text: string }[];
};

export const professionals: Professional[] = [
  {
    id: 1,
    name: "María Torres",
    role: "Gasfiter certificada",
    sectors: "Centro, El Tenis, Machalí",
    price: "$20.000 - $28.000 hora",
    rating: 4.9,
    badge: "Veci confiable",
    avatar: "/images/professionals/maria.jpg",
    testimonials: [
      {
        text: "Llegó puntual y dejó todo impecable, se nota la experiencia.",
        author: "Camilo (condominio Centro)",
      },
      {
        text: "Explica cada paso y cobra lo justo.",
        author: "Patricia de Villa Triana",
      },
    ],
  },
  {
    id: 2,
    name: "Carlos Díaz",
    role: "Electricista residencial",
    sectors: "Rancagua norte y oriente",
    price: "$18.000 hora",
    rating: 4.8,
    badge: "Top Veci",
    avatar: "/images/professionals/carlos.jpg",
    testimonials: [
      {
        text: "Dejó mi tablero seguro y ordenado. Recomendado.",
        author: "Valentina (Centro)",
      },
    ],
  },
  {
    id: 3,
    name: "Fernanda Silva",
    role: "Profesora particular Matemáticas",
    sectors: "Online y Centro",
    price: "$15.000 clase",
    rating: 4.7,
    avatar: "/images/professionals/fernanda.jpg",
    testimonials: [
      {
        text: "Mi hijo por fin entendió álgebra y subió sus notas.",
        author: "Andrea, mamá de 2º medio",
      },
    ],
  },
  {
    id: 4,
    name: "Juan Pablo Muñoz",
    role: "Jardinero y podas",
    sectors: "Graneros, Machalí, Villa Triana",
    price: "$22.000 por visita",
    rating: 4.6,
    avatar: "/images/professionals/juanpablo.jpg",
    testimonials: [
      {
        text: "Dejó el jardín listo para el verano en una mañana.",
        author: "Rodrigo (Graneros)",
      },
    ],
  },
  {
    id: 5,
    name: "Camila Rojas",
    role: "Manicure y spa de manos",
    sectors: "A domicilio en Rancagua",
    price: "$12.000 - $18.000",
    rating: 4.8,
    badge: "Destacado",
    avatar: "/images/professionals/camila.jpg",
    testimonials: [
      {
        text: "Atención delicada, colores premium y conversa bacán.",
        author: "Sofía (Alameda)",
      },
    ],
  },
];
