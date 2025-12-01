export type Pyme = {
  id: number;
  name: string;
  type: string;
  schedule: string;
  sectors: string;
  highlighted?: boolean;
};

export const pymes: Pyme[] = [
  {
    id: 1,
    name: "Empanadas Doña Rosa",
    type: "Empanadas y pastel de choclo",
    schedule: "Lunes a sábado 18:00 - 21:30",
    sectors: "Villa Triana, Centro, Alameda",
    highlighted: true,
  },
  {
    id: 2,
    name: "Pan Amasado El Molino",
    type: "Pan amasado y sopaipillas",
    schedule: "Todos los días 17:00 - 20:00",
    sectors: "Villa Cordillera y alrededores",
    highlighted: false,
  },
  {
    id: 3,
    name: "Huerta Valle Verde",
    type: "Verduras frescas por caja",
    schedule: "Martes y viernes 09:00 - 12:00",
    sectors: "Machalí, San Damián",
    highlighted: true,
  },
  {
    id: 4,
    name: "Cafecito Rodante",
    type: "Café de grano y pastelería",
    schedule: "Jueves a domingo 16:00 - 22:00",
    sectors: "Parque Comunal, Centro",
  },
  {
    id: 5,
    name: "Frutos del Teniente",
    type: "Cecinas y quesos locales",
    schedule: "Sábados 10:00 - 14:00",
    sectors: "El Tenis, Villa María",
  },
  {
    id: 6,
    name: "Helados La Pradera",
    type: "Helados artesanales y paletas",
    schedule: "Fines de semana 15:00 - 19:00",
    sectors: "Reina Norte, Villa Las Rosas",
  },
];
