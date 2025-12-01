# VeciApp

Plataforma demo creada con Next.js + React + Tailwind CSS para conectar vecinos de **Rancagua** con tareas, oficios y PYMEs locales. Incluye navegación completa con el App Router y datos mock para explorar la experiencia.

## Requisitos
- Node.js 18+
- npm

## Scripts
- `npm run dev`: inicia el entorno de desarrollo en `http://localhost:3000`.
- `npm run lint`: ejecuta ESLint.
- `npm run build` / `npm start`: compila y sirve la app en modo producción.

## Estructura destacada
- `src/app`: páginas con App Router, incluyendo home, explorar, publicar, ofrecer, profesionales, pymes, cómo funciona, ayuda y perfil demo.
- `src/components`: Navbar, Footer, Hero, cards reutilizables (servicios, profesionales, pymes) y utilidades.
- `src/data`: datos de ejemplo para servicios, profesionales y PYMEs.
- `src/app/globals.css`: estilos base y configuración de Tailwind.

## Branding
Colores principales:
- Primario: `#10B981`
- Secundario: `#2563EB`
- Acento: `#FBBF24`
- Fondo: `#F3F4F6`
- Texto: `#111827`

## Despliegue
El proyecto está listo para deploy en Vercel sin configuración adicional; basta con conectar el repositorio y usar los scripts por defecto.
