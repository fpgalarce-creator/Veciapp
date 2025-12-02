import BusinessesCarousel from "@/components/BusinessesCarousel";
import EarnSection from "@/components/EarnSection";
import Hero from "@/components/Hero";
import MapMock from "@/components/MapMock";
import ProfessionalsSection from "@/components/ProfessionalsSection";
import ServicesGrid from "@/components/ServicesGrid";

const businesses = [
  {
    id: 1,
    name: "Cafetería Andina",
    address: "Pasaje El Sol 245, Rancagua",
    whatsapp: "+56 9 1234 5678",
    schedule: "08:00 - 20:00",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Verduras San Martín",
    address: "Av. San Martín 1050, Rancagua",
    whatsapp: "+56 9 8765 4321",
    schedule: "09:00 - 18:00",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Taller Don Luis",
    address: "Calle Victoria 82, Machalí",
    whatsapp: "+56 9 5555 1212",
    schedule: "10:00 - 19:00",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Panadería La Esquina",
    address: "Plaza América 12, Rancagua",
    whatsapp: "+56 9 2222 9090",
    schedule: "07:30 - 14:00",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=800&q=80",
  },
];

const services = [
  { id: 1, name: "Clases de matemáticas", category: "Educación", sector: "Centro", price: "$15.000 - $25.000", icon: "📚" },
  { id: 2, name: "Paseo de mascotas", category: "Mascotas", sector: "Oriente", price: "$7.000 - $12.000", icon: "🐾" },
  { id: 3, name: "Mantención de jardín", category: "Jardinería", sector: "Poniente", price: "$20.000 - $40.000", icon: "🌿" },
  { id: 4, name: "Limpieza express", category: "Limpieza", sector: "Machalí", price: "$18.000 - $30.000", icon: "✨" },
  { id: 5, name: "Arreglo de bicicletas", category: "Otros", sector: "Centro", price: "$10.000 - $18.000", icon: "🚲" },
  { id: 6, name: "Asesoría de redes sociales", category: "Otros", sector: "Virtual", price: "$30.000 - $50.000", icon: "📱" },
];

const professionals = [
  {
    id: 1,
    name: "Camila Rivas",
    role: "Diseñadora UX/UI",
    rating: 4.9,
    price: "$45.000",
    sector: "Remoto",
    verified: true,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Diego Vargas",
    role: "Electricista certificado",
    rating: 4.8,
    price: "$25.000",
    sector: "Rancagua centro",
    verified: true,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Javiera Morales",
    role: "Cuidadora de mascotas",
    rating: 4.7,
    price: "$12.000",
    sector: "Machalí",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Pedro Sandoval",
    role: "Maestro multifacético",
    rating: 4.6,
    price: "$28.000",
    sector: "Oriente",
    verified: true,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Fernanda Pinto",
    role: "Chef a domicilio",
    rating: 4.9,
    price: "$35.000",
    sector: "Rancagua norte",
    verified: true,
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Andrés Soto",
    role: "Mecánico de bicis",
    rating: 4.5,
    price: "$18.000",
    sector: "Centro",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-12 pb-6">
      <Hero />
      <BusinessesCarousel businesses={businesses} />
      <EarnSection />
      <MapMock />
      <ServicesGrid services={services} />
      <ProfessionalsSection professionals={professionals} />
    </div>
  );
}
