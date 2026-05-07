# reservApp Web

![Next.js](https://img.shields.io/badge/Next.js_15+-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/Apache_2.0-D22128?style=flat-square&logo=apache&logoColor=white)

Interfaz pública y showcase del ecosistema reservApp — un sistema de gestión de reservas para comunidades.

Este repositorio contiene únicamente la capa de presentación y experiencia de usuario. La lógica de negocio, autenticación y gestión de reservas reside en el repositorio del core (separado).

---

## Propósito

- Presentar reservApp como producto
- Ofrecer una experiencia visual moderna y coherente
- Servir como punto de entrada a la plataforma principal
- Demostrar capacidades de UI/UX del sistema

---

## Stack tecnológico

| Categoría | Tecnología |
|---|---|
| Framework | Next.js 15+ (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS 4 |
| UI | Radix UI |
| Iconografía | Lucide React |
| Animaciones | Motion (Framer Motion) |
| Analytics | Vercel Analytics + Speed Insights |
| Notificaciones | Sonner |

---

## Arquitectura

```
src/
├── components/   # Hero, sections, footer, etc.
├── app/          # Rutas y páginas (Next.js App Router)
├── hooks/        # Hooks reutilizables de UI/estado
└── lib/          # Utilidades compartidas
public/           # Assets estáticos (imágenes, logos, etc.)
```

> La lógica de negocio de reservas no forma parte de este repositorio.

---

## Instalación y desarrollo

**Requisitos:** Node.js 18+ · pnpm (recomendado)

```bash
git clone https://github.com/ValkoinenKissa/reservapp-web.git
cd reservapp-web
pnpm install
```

```bash
pnpm dev
# → http://localhost:3000
```

---

## Variables de entorno

Crea un archivo `.env.local` basado en `.env.example`:

```env
APPLE_TEAM_ID=your_apple_team_id
NEXT_PUBLIC_BUNDLE_IDENTIFIER=your.bundle.identifier
NEXT_PUBLIC_DOWNLOAD_URL=https://your-download-url
```

---

## Despliegue en Vercel

1. Conectar el repositorio a Vercel
2. Configurar las variables de entorno en el dashboard
3. El deploy automático se activa con cada push a `main`

---

## Estado del sistema

| Componente | Estado | Descripción |
|---|---|---|
| 🟢 Web (este repo) | Activo | UI · landing · showcase |
| 🔵 Core app | Separado | App completa con todas sus funcionalidades |

---

## Licencia y créditos

Basado en una template de Next.js bajo licencia **Apache License 2.0** — Copyright 2025 Paddle.com Market Limited.

Se han realizado modificaciones estructurales, de diseño y experiencia de usuario ❤️
