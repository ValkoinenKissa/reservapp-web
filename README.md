# reservApp - Gestión de Comunidades Open Source

**reservApp** es una solución integral y 100% de código abierto diseñada para simplificar la gestión de comunidades. Este proyecto proporciona una interfaz moderna, rápida y centrada en el usuario para facilitar la administración y reserva de espacios comunes.

Este proyecto se basa en la plantilla oficial de [Paddle Mobile Web Payments Starter](https://github.com/PaddleHQ/paddle-mobile-web-payments-starter), adaptada para ofrecer una experiencia premium en la gestión de servicios comunitarios con integración de pagos segura.

## Tecnologías Usadas

El proyecto utiliza un stack tecnológico de última generación para garantizar rendimiento y escalabilidad:

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router & Turbopack)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Componentes UI**: [Radix UI](https://www.radix-ui.com/) y [Lucide React](https://lucide.dev/)
- **Animaciones**: [Motion](https://motion.dev/) (framer-motion)
- **Pagos**: [Paddle Billing](https://www.paddle.com/) vía `@paddle/paddle-js`
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics) y [Speed Insights](https://vercel.com/speed-insights)
- **Notificaciones**: [Sonner](https://sonner.emilkowal.ski/)

## Características Principales

- **Gestión Transparente**: Control total sobre las reservas de la comunidad.
- **Pagos Integrados**: Checkout web optimizado para dispositivos móviles mediante Paddle.
- **Diseño Premium**: Interfaz fluida con efectos de "Liquid Glass" y animaciones micro-interactivas.
- **Cumplimiento Global**: Manejo automático de impuestos y cumplimiento mediante Paddle como Merchant of Record.
- **Soporte Apple Pay**: Totalmente compatible con Apple Pay incluso en redirecciones web.

## Primeros Pasos

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (v18+) y un gestor de paquetes como `pnpm`, `npm` o `yarn`.

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/ValkoinenKissa/reservapp-web.git
   cd reservapp-web
   ```

2. Instala las dependencias:
   ```bash
   pnpm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Variables de Entorno

Crea un archivo `.env.local` basado en `.env.example` con las siguientes variables:

- `APPLE_TEAM_ID`: Tu ID de equipo de Apple (para Universal Links).
- `NEXT_PUBLIC_BUNDLE_IDENTIFIER`: Identificador de paquete de tu aplicación iOS.
- `NEXT_PUBLIC_APP_REDIRECT_URL`: URL de redirección profunda de vuelta a tu app tras el pago.
- `NEXT_PUBLIC_DOWNLOAD_URL`: Enlace personalizado para los botones de descarga (por defecto `#download`).
- `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN`: Tu token de cliente de Paddle.
- `NEXT_PUBLIC_PADDLE_ENV`: Entorno de Paddle (`sandbox` o `production`).

## Guía de Desarrollo

### Estructura del Proyecto

- `src/components`: Componentes modulares de la interfaz (Hero, Footer, FAQs, etc.).
- `src/app`: Rutas y páginas principales utilizando Next.js App Router.
- `src/hooks`: Hooks personalizados para la integración con Paddle y lógica de estado.
- `src/lib`: Utilidades, tipos y configuraciones compartidas.
- `public`: Activos estáticos como imágenes, logos y fuentes.

### Estilo y Diseño

Utilizamos un sistema de diseño basado en componentes de Radix UI estilizados con Tailwind CSS. Para mantener la coherencia visual:
- Usa las variables de color definidas en el tema.
- Implementa animaciones suaves usando el componente `Motion`.
- Asegúrate de que todos los nuevos componentes sean responsivos.

## Despliegue

La forma más sencilla de desplegar reservApp es usando la [Plataforma Vercel](https://vercel.com/new).

1. Conecta tu repositorio de GitHub a Vercel.
2. Configura las variables de entorno mencionadas anteriormente en la configuración del proyecto en Vercel.
3. Vercel detectará automáticamente Next.js y realizará el despliegue.

---

Desarrollado con ❤️ para comunidades modernas. Basado en el trabajo original de [Paddle](https://paddle.com).
