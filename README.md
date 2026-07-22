# FixBattery

Sitio web de FixBattery: servicio técnico de cambio de baterías y pantallas
AmpSentrix Premium para iPhone en Santiago, Chile.

## Stack

- [Vite](https://vitejs.dev/) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/) para el ruteo del lado del cliente
- [Motion](https://motion.dev/) para animaciones
- Express (`server.ts`) para servir el build de producción y una ruta de health-check

## Requisitos

- Node.js 20 o superior

## Desarrollo local

```bash
npm install
npm run dev
```

El servidor de desarrollo queda disponible en `http://localhost:3000`.

## Scripts disponibles

| Script            | Descripción                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm run dev`     | Levanta el servidor de desarrollo con Vite en modo middleware.      |
| `npm run build`   | Genera el build de producción (`dist/`) y empaqueta `server.ts`.    |
| `npm run start`   | Sirve el build de producción ya generado.                           |
| `npm run preview` | Previsualiza el build de producción con el servidor de Vite.        |
| `npm run lint`    | Chequeo de tipos con TypeScript (`tsc --noEmit`).                   |
| `npm run clean`   | Elimina los artefactos de build generados.                          |

## Estructura del proyecto

```
src/
  components/   Componentes de página y de UI
  data/         Catálogo de modelos, pantallas y artículos del blog
  lib/          Utilidades (WhatsApp, SEO por página, sanitización)
  assets/       Imágenes de producto
public/         Archivos estáticos (favicons, sitemap, robots.txt, OG image)
server.ts       Servidor Express para desarrollo y producción
```
