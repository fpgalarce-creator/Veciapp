export type Professional = {
  id: number;
  name: string;
  role: string;
  sectors: string;
  price: string;
  rating: number;
  badge?: string;
  avatar?: string;
  testimonials?: { quote: string; author: string; role: string }[];
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
        quote: "Llegó puntual y dejó todo impecable, se nota la experiencia.",
        author: "Camilo, administrador de condominio",
        role: "Cliente",
      },
      {
        quote: "Explica cada paso y cobra lo justo.",
        author: "Patricia, Villa Triana",
        role: "Vecina",
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
        quote: "Dejó mi tablero seguro y ordenado. Recomendado.",
        author: "Valentina, Centro",
        role: "Cliente",
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
        quote: "Mi hijo por fin entendió álgebra y subió sus notas.",
        author: "Andrea, mamá 2º medio",
        role: "Cliente",
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
        quote: "Dejó el jardín listo para el verano en una mañana.",
        author: "Rodrigo, Graneros",
        role: "Cliente",
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
        quote: "Atención delicada, colores premium y conversa bacán.",
        author: "Sofía, Alameda",
        role: "Cliente",
      },
    ],
  },
];
