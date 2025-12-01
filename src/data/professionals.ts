export type Professional = {
  id: number;
  name: string;
  role: string;
  sectors: string;
  price: string;
  rating: number;
  badge?: string;
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
  },
  {
    id: 2,
    name: "Carlos Díaz",
    role: "Electricista residencial",
    sectors: "Rancagua norte y oriente",
    price: "$18.000 hora",
    rating: 4.8,
    badge: "Top Veci",
  },
  {
    id: 3,
    name: "Fernanda Silva",
    role: "Profesora particular Matemáticas",
    sectors: "Online y Centro",
    price: "$15.000 clase",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Juan Pablo Muñoz",
    role: "Jardinero y podas",
    sectors: "Graneros, Machalí, Villa Triana",
    price: "$22.000 por visita",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Camila Rojas",
    role: "Manicure y spa de manos",
    sectors: "A domicilio en Rancagua",
    price: "$12.000 - $18.000",
    rating: 4.8,
    badge: "Destacado",
  },
];
