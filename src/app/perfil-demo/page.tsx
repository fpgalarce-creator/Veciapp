import StarsRating from "@/components/StarsRating";
import SectionTitle from "@/components/SectionTitle";

const reviews = [
  { user: "Claudia", comment: "Llegó puntual y dejó todo impecable. Lo recomiendo.", rating: 5 },
  { user: "Matías", comment: "Buen trato y transparente con los precios.", rating: 4 },
  { user: "Valentina", comment: "Resolvió rápido la urgencia, muy amable.", rating: 5 },
];

const gallery = ["Instalación eléctrica", "Reparación enchufe", "Cambio luminaria", "Tablero revisado"];

export default function ProfileDemoPage() {
  return (
    <div className="space-y-6">
      <SectionTitle title="Perfil de ejemplo" subtitle="Así se verá tu ficha pública" />
      <div className="section-card grid gap-6 md:grid-cols-3">
        <div className="space-y-3 md:col-span-2">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-secondary/20" />
            <div>
              <h2 className="text-2xl font-bold text-text">Carlos Díaz</h2>
              <p className="text-gray-600">Electricista residencial</p>
              <StarsRating value={4.8} />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-text">Sectores donde trabaja</p>
              <p className="text-gray-700">Rancagua norte, oriente y Machalí</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-text">Rango de precios</p>
              <p className="text-gray-700">$18.000 hora · trabajos pequeños desde $25.000</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-text">Sobre mí</p>
            <p className="text-gray-700">
              Más de 8 años de experiencia en electricidad domiciliaria. Trabajo ordenado, materiales
              certificados y solución rápida a emergencias.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-text">Reseñas</p>
            <div className="grid gap-3 md:grid-cols-3">
              {reviews.map((review) => (
                <div key={review.user} className="rounded-lg bg-gray-50 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-text">{review.user}</p>
                    <StarsRating value={review.rating} />
                  </div>
                  <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold text-text">Galería de trabajos</p>
          <div className="grid grid-cols-2 gap-3">
            {gallery.map((item) => (
              <div
                key={item}
                className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 via-white to-secondary/10 text-center text-sm font-semibold text-text"
              >
                {item}
              </div>
            ))}
          </div>
          <button className="w-full rounded-xl bg-secondary px-4 py-3 text-white font-semibold shadow-soft hover:bg-secondary/90 transition">
            Contactar
          </button>
        </div>
      </div>
    </div>
  );
}
