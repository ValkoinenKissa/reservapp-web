# reservApp Web

reservApp Web es la interfaz de presentación (landing/showcase) del ecosistema reservApp, un sistema de gestión de reservas para comunidades.

Este repositorio contiene únicamente la capa de frontend público y experiencia de usuario, diseñada para mostrar el producto, sus funcionalidades y su propuesta visual.

La lógica de negocio, autenticación y gestión de reservas reside en la aplicación principal del sistema reservApp (repositorio separado).

## Propósito del proyecto

El objetivo de esta web es:

- Presentar reservApp como producto
- Ofrecer una experiencia visual moderna y coherente
- Servir como punto de entrada a la plataforma principal
- Mostrar capacidades de UI/UX del sistema

## Stack tecnológico

Este proyecto está construido con un stack moderno orientado a rendimiento y escalabilidad:

- Framework: Next.js 15+ (App Router)
- Lenguaje: TypeScript
- Estilos: Tailwind CSS 4
- UI: Radix UI
- Iconografía: Lucide React
- Animaciones: Motion (Framer Motion)
- Analytics: Vercel Analytics + Speed Insights
- Notificaciones: Sonner

## Arquitectura del proyecto

Este repositorio se centra exclusivamente en la capa de presentación:

- `src/components`: Componentes UI (Hero, sections, footer, etc.)
- `src/app`: Rutas y páginas (Next.js App Router)
- `src/hooks`: Hooks reutilizables de UI/estado
- `src/lib`: Utilidades compartidas
- `public`: Assets estáticos (imágenes, logos, etc.)

La lógica de negocio de reservas no forma parte de este repositorio.

## Diseño y enfoque UI

La interfaz está diseñada con un enfoque en:

- Experiencia de usuario fluida y moderna
- Componentes modulares y reutilizables
- Animaciones suaves y microinteracciones
- Sistema visual consistente basado en Tailwind CSS

## Instalación y desarrollo

### Requisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

git clone https://github.com/ValkoinenKissa/reservapp-web.git  
cd reservapp-web  
pnpm install  

### Desarrollo

pnpm dev  

Abrir en:

http://localhost:3000  

## Variables de entorno

Crear un archivo `.env.local` basado en `.env.example`:

APPLE_TEAM_ID=your_apple_team_id  
NEXT_PUBLIC_BUNDLE_IDENTIFIER=your.bundle.identifier  
NEXT_PUBLIC_DOWNLOAD_URL=https://your-download-url  

## Despliegue

Este proyecto está optimizado para desplegarse en Vercel:

1. Conectar el repositorio a Vercel  
2. Configurar variables de entorno en el dashboard  
3. Deploy automático con Next.js  

## Estado del sistema

- Web (este repo): UI / landing / showcase  
- Core app: lógica de reservas y gestión (repositorio separado)  

## Licencia

Este proyecto está basado en una template de Next.js bajo licencia Apache License 2.0.

Copyright 2025 Paddle.com Market Limited

Se han realizado modificaciones estructurales, de diseño y experiencia de usuario.

## Notas

Este repositorio forma parte del ecosistema reservApp y está orientado a demostrar:

- capacidad de diseño frontend moderno
- arquitectura de componentes en Next.js
- integración con herramientas de despliegue (Vercel)

## Créditos

Basado en una template de Next.js (Apache 2.0) con modificaciones y desarrollo propio ❤️
