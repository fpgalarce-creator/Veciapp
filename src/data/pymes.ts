export type Pyme = {
  id: number;
  name: string;
  type: string;
  schedule: string;
  sectors: string;
  category?: string;
  website?: string;
  phone?: string;
  location?: string;
  products?: string[];
  image?: string;
  highlighted?: boolean;
};

export const pymes: Pyme[] = [
  {
    id: 1,
    name: "Empanadas Doña Rosa",
    type: "Empanadas y pastel de choclo",
    schedule: "Lunes a sábado 18:00 - 21:30",
    sectors: "Villa Triana, Centro, Alameda",
    category: "Comida casera",
    phone: "+56 9 1234 5678",
    location: "Villa Triana",
    products: ["Empanadas de pino", "Pastel de choclo", "Pebre fresco"],
    website: "https://donarosa.veci",
    highlighted: true,
  },
  {
    id: 2,
    name: "Pan Amasado El Molino",
    type: "Pan amasado y sopaipillas",
    schedule: "Todos los días 17:00 - 20:00",
    sectors: "Villa Cordillera y alrededores",
    category: "Panadería móvil",
    phone: "+56 9 8765 4321",
    location: "Villa Cordillera",
    products: ["Pan amasado", "Sopaipillas", "Mermeladas caseras"],
    highlighted: false,
  },
  {
    id: 3,
    name: "Huerta Valle Verde",
    type: "Verduras frescas por caja",
    schedule: "Martes y viernes 09:00 - 12:00",
    sectors: "Machalí, San Damián",
    category: "Verduras y agro",
    phone: "+56 9 5643 2109",
    website: "https://valleverde.veci",
    location: "San Damián",
    products: ["Cajas mixtas", "Hierbas frescas", "Huevos de gallina feliz"],
    highlighted: true,
  },
  {
    id: 4,
    name: "Cafecito Rodante",
    type: "Café de grano y pastelería",
    schedule: "Jueves a domingo 16:00 - 22:00",
    sectors: "Parque Comunal, Centro",
    category: "Cafetería móvil",
    phone: "+56 9 9090 2020",
    location: "Parque Comunal",
    products: ["Flat white", "Brownies", "Cold brew"],
  },
  {
    id: 5,
    name: "Frutos del Teniente",
    type: "Cecinas y quesos locales",
    schedule: "Sábados 10:00 - 14:00",
    sectors: "El Tenis, Villa María",
    category: "Charcutería local",
    phone: "+56 9 2288 4433",
    location: "El Tenis",
    products: ["Queso mantecoso", "Longaniza", "Quesillo artesanal"],
  },
  {
    id: 6,
    name: "Helados La Pradera",
    type: "Helados artesanales y paletas",
    schedule: "Fines de semana 15:00 - 19:00",
    sectors: "Reina Norte, Villa Las Rosas",
    category: "Heladería artesanal",
    phone: "+56 9 7766 5511",
    location: "Villa Las Rosas",
    products: ["Paletas de fruta", "Helado de pistacho", "Sándwich helado"],
  },
];
