# Portfolio v2 🚀

Un portafolio personal moderno y responsivo desarrollado con **Next.js 15**, **TypeScript**, y **Tailwind CSS**. Presenta una interfaz elegante, soporte multiidioma (Español/Inglés), y componentes reutilizables construidos con Radix UI.

## ✨ Características

- 🌐 **Multiidioma**: Soporte para Español e Inglés
- 🎨 **Diseño Moderno**: Interfaz limpia y profesional con gradientes y efectos visuales
- 📱 **Completamente Responsivo**: Optimizado para todos los dispositivos
- 🎯 **Navegación Fluida**: Menú de navegación intuitivo y accesible
- 💼 **Secciones Completas**: Hero, Sobre mí, Proyectos, y Contacto
- 🛠️ **Componentes Reutilizables**: Biblioteca de componentes UI modular
- ⚡ **Alto Rendimiento**: Construido con Next.js 15 y Turbopack
- 🎨 **Animaciones Suaves**: Efectos visuales y transiciones elegantes

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Next.js 15** - Framework de React para producción
- **React 19** - Biblioteca para construir interfaces de usuario
- **TypeScript** - JavaScript con tipado estático
- **Tailwind CSS 4** - Framework de utilidades CSS

### UI Components
- **Radix UI** - Componentes primitivos accesibles
- **Lucide React** - Iconos modernos y personalizables
- **Embla Carousel** - Carrusel de imágenes fluido
- **Class Variance Authority** - Utilidad para variantes de componentes

### Herramientas de Desarrollo
- **ESLint** - Linter para mantener código consistente
- **PostCSS** - Procesador de CSS
- **tw-animate-css** - Animaciones adicionales para Tailwind

## 🚀 Instalación y Configuración

### Prerequisitos
- Node.js 18+ 
- npm, yarn, pnpm, o bun

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/davidsilva131/portafolio_v2.git
   cd portafolio_v2
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   # o
   bun install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```

4. **Abrir en el navegador**
   
   Visita [http://localhost:3000](http://localhost:3000) para ver el resultado.

## 📁 Estructura del Proyecto

```
portafolio_v2/
├── public/                 # Archivos estáticos
│   ├── favicon-*.svg      # Favicons temáticos
│   └── *.svg             # Iconos y recursos
├── src/
│   ├── app/              # App Router de Next.js
│   │   ├── globals.css   # Estilos globales
│   │   ├── layout.tsx    # Layout principal
│   │   └── page.tsx      # Página de inicio
│   ├── components/       # Componentes React
│   │   ├── ui/          # Componentes UI reutilizables
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── contact-section.tsx
│   │   └── navbar-refactored.tsx
│   ├── contexts/        # Contextos de React
│   │   └── LanguageContext.tsx  # Manejo del idioma
│   ├── data/           # Datos estáticos
│   │   ├── projects.ts
│   │   └── skills.ts
│   └── lib/
│       └── utils.ts    # Utilidades y helpers
├── components.json     # Configuración de componentes
├── tailwind.config.js  # Configuración de Tailwind
└── tsconfig.json      # Configuración de TypeScript
```

## 🎨 Componentes Principales

### Secciones
- **Hero Section**: Presentación principal con call-to-action
- **About Section**: Información personal y habilidades
- **Projects Section**: Showcase de proyectos con carrusel
- **Contact Section**: Formulario de contacto y información

### Componentes UI
- **Navigation Menu**: Menú responsive con soporte multiidioma
- **Project Cards**: Tarjetas de proyectos con efectos hover
- **Contact Form**: Formulario de contacto validado
- **Skill Tags**: Etiquetas de tecnologías y habilidades
- **Profile Card**: Tarjeta de perfil personal

## 🌐 Soporte Multiidioma

El proyecto incluye un sistema completo de internacionalización:

- **Contexto de Idioma**: Manejo global del estado del idioma
- **Selector de Idioma**: Componente para cambiar entre ES/EN
- **Traducciones Completas**: Todos los textos tienen soporte bilingüe
- **Persistencia**: El idioma seleccionado se guarda en localStorage

## 📜 Scripts Disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo con Turbopack
- **`npm run build`**: Construye la aplicación para producción
- **`npm run start`**: Inicia el servidor de producción
- **`npm run lint`**: Ejecuta ESLint para verificar el código

## 🚀 Despliegue

### Vercel (Recomendado)
La forma más fácil de desplegar es usar [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Conecta tu repositorio de GitHub
2. Vercel detectará automáticamente la configuración de Next.js
3. Tu aplicación estará disponible en minutos

### Otras Plataformas
- **Netlify**: Compatible con builds estáticos
- **Railway**: Despliegue con Node.js
- **DigitalOcean**: App Platform

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**David Silva** - [GitHub](https://github.com/davidsilva131)

Link del Proyecto: [https://github.com/davidsilva131/portafolio_v2](https://github.com/davidsilva131/portafolio_v2)

---

⭐ ¡No olvides darle una estrella al proyecto si te fue útil!
