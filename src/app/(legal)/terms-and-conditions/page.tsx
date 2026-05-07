"use client";

import { motion } from "motion/react";
import { FileText } from "lucide-react";
import type { Metadata } from "next";

export default function TermsAndConditions() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card/40 border-border/50 relative overflow-hidden rounded-3xl border backdrop-blur-2xl shadow-2xl sm:p-12 p-8"
      >
        {/* Decorative element */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10">
          <div className="bg-primary/10 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-2xl">
            <FileText className="h-6 w-6" />
          </div>

          <div className="mb-8 flex items-center gap-4">
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">Términos y condiciones</h1>
          </div>

          <div className="text-foreground/90 space-y-6 text-lg leading-relaxed">
            <p> reservApp es una aplicación en fase MVP (Producto Mínimo Viable) destinada a facilitar la gestión de reservas y comunidades. </p> 
            <p> Al utilizar esta plataforma, aceptas hacer un uso legal, responsable y respetuoso del servicio, evitando actividades fraudulentas, accesos no autorizados o cualquier acción que pueda perjudicar a otros usuarios o al funcionamiento de la aplicación. </p> 
            <p> El software se proporciona "tal cual", sin garantías explícitas de disponibilidad continua, ausencia de errores o compatibilidad con todos los dispositivos y escenarios de uso. </p> 
            <p> El usuario es responsable de la información y contenido que comparta dentro de la plataforma. </p> 
            <p> reservApp se reserva el derecho de limitar, suspender o bloquear el acceso a usuarios que incumplan estas condiciones o hagan un uso indebido del servicio. </p> 
            <p>
              La plataforma utiliza servicios de terceros proporcionados por{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4"
              >
                Firebase y Google Analytics
              </a>{" "}
              para funcionalidades de infraestructura, almacenamiento y análisis técnico.
            </p> 
            <p> Estos términos podrán actualizarse conforme evolucione el proyecto o se incorporen nuevas funcionalidades. </p> 
            <p className="text-muted-foreground pt-4 text-sm font-medium"> Última actualización: Mayo 2026 </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
