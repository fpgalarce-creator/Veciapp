export type ServiceStatus = "Pendiente" | "En curso" | "Completado";

export type Service = {
  id: number;
  title: string;
  category: "Limpieza" | "Mascotas" | "Jardinería" | "Educación" | "Otros";
  sector: string;
  datetime: string;
  priceRange: string;
  status: ServiceStatus;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Lavar auto y aspirar interior",
    category: "Limpieza",
    sector: "Villa Los Andes, Rancagua",
    datetime: "Sábado 10:00",
    priceRange: "$8.000 - $10.000",
    status: "Pendiente",
  },
  {
    id: 2,
    title: "Pasear perro raza mediana",
    category: "Mascotas",
    sector: "Centro Rancagua",
    datetime: "Hoy 18:30",
    priceRange: "$5.000",
    status: "En curso",
  },
  {
    id: 3,
    title: "Revisión eléctrica departamento",
    category: "Otros",
    sector: "Alameda",
    datetime: "Viernes 19:00",
    priceRange: "$20.000 - $30.000",
    status: "Pendiente",
  },
  {
    id: 4,
    title: "Clase de matemáticas 2º medio",
    category: "Educación",
    sector: "Villa Cordillera",
    datetime: "Sábado 12:00",
    priceRange: "$12.000",
    status: "Pendiente",
  },
  {
    id: 5,
    title: "Cortar pasto y orillar patio",
    category: "Jardinería",
    sector: "Machalí",
    datetime: "Domingo 09:00",
    priceRange: "$18.000 - $22.000",
    status: "Completado",
  },
  {
    id: 6,
    title: "Armar mueble de cocina",
    category: "Otros",
    sector: "La Foresta",
    datetime: "Jueves 17:00",
    priceRange: "$15.000",
    status: "En curso",
  },
  {
    id: 7,
    title: "Baño y corte para perrita pequeña",
    category: "Mascotas",
    sector: "Villa Triana",
    datetime: "Sábado 16:00",
    priceRange: "$14.000",
    status: "Pendiente",
  },
  {
    id: 8,
    title: "Limpieza profunda depto 2D",
    category: "Limpieza",
    sector: "Centro Rancagua",
    datetime: "Miércoles 09:00",
    priceRange: "$35.000 - $40.000",
    status: "Pendiente",
  },
];
