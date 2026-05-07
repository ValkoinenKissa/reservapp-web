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
            <p>
              Estamos trabajando para definir los términos y condiciones detallados de reservApp. Al tratarse de una
              versión MVP (Producto Mínimo Viable) y un proyecto de código abierto, nuestro objetivo principal es
              facilitar la gestión de comunidades de forma transparente y gratuita.
            </p>
            <p>
              Por el momento, el uso de esta aplicación implica la aceptación de que el software se proporciona "tal cual",
              sin garantías de ningún tipo, y que el usuario es responsable del uso que haga de la plataforma y del
              contenido que comparta en ella.
            </p>
            <p className="text-muted-foreground pt-4 text-sm font-medium">Última actualización: Mayo 2026</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
