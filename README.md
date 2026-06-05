# PobaPlus - Landing Page & Case Study

Este proyecto es una Landing Page de alto impacto diseñada con **Next.js** y **Tailwind CSS**. Su objetivo principal es servir como portafolio técnico y caso de estudio para la aplicación móvil **PobaPlus**, una solución avanzada para la gestión médica, historias clínicas y logística de turnos.

---

## 🎨 Características Principales

- **Diseño Dark Premium:** Estética moderna con fondos profundos, efectos de vidrio esmerilado (`backdrop-blur`) y gradientes tecnológicos.
- **Mobile First & Responsive:** Interfaz optimizada para todos los dispositivos, desde celulares hasta pantallas de escritorio.
- **Showcase de UI Interactivo:** Carrusel responsivo que muestra las capturas de pantalla de la aplicación móvil en un marco de celular.
- **Arquitectura Detallada:** Sección dedicada a exponer el stack técnico de la app real (React Native, Firebase, Geolocalización).
- **Casos de Estudio:** Explicación técnica de desafíos de ingeniería y sus soluciones.
- **Sección de FAQ:** Acordeones interactivos para resolver dudas comunes.
- **Integración Multimedia:** Embed de video de YouTube optimizado.

---

## 🛠️ Stack Tecnológico (Web)

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía:** [Lucide React](https://lucide.dev/)
- **Componentes:** React (Functional Components)

---

## 📂 Estructura del Proyecto

```text
src/
├── app/              # Rutas y layout global (Next.js App Router)
├── components/       # Componentes modulares (Hero, Carousel, FAQ, etc.)
public/               # Recursos estáticos (Imágenes y videos)
```

---

## 🚀 Cómo Levantar el Proyecto

Sigue estos pasos para ejecutar la landing page de forma local:

### 1. Requisitos Previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

### 2. Instalación de Dependencias
En la raíz del proyecto, ejecuta:
```bash
npm install
```

### 3. Ejecución en Desarrollo
Inicia el servidor local:
```bash
npm run dev
```
La página estará disponible en `http://localhost:3000`.

### 4. Compilación para Producción
Para generar una versión optimizada del sitio:
```bash
npm run build
npm run start
```

---

## 📱 Sobre la App PobaPlus (Resumen Técnico)
Aunque esta web es el portafolio, la aplicación móvil real utiliza:
- **Frontend:** React Native + Expo.
- **Backend:** Firebase Firestore & Storage.
- **Lógica:** Geolocalización nativa, validación de geofencing (400m) y generación de reportes PDF.