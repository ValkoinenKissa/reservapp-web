"use client";

import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card/40 border-border/50 relative overflow-hidden rounded-3xl border backdrop-blur-2xl shadow-2xl sm:p-12 p-8"
      >
        {/* Decorative element */}
        <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10">
          <div className="bg-primary/10 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-2xl">
            <ShieldCheck className="h-6 w-6" />
          </div>

          <div className="mb-8 flex items-center gap-4">
            <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">Política de privacidad</h1>
          </div>

          <div className="text-foreground/90 space-y-6 text-lg leading-relaxed">
            <p>
              Tu privacidad es importante para nosotros. En esta etapa de MVP, reservApp recopila únicamente los datos
              estrictamente necesarios para el funcionamiento de la gestión de reservas de tu comunidad.
            </p>
            <p>
              Nos comprometemos a no vender, alquilar ni compartir tu información personal con terceros con fines
              comerciales. Al ser un proyecto open source, puedes auditar nuestro código en cualquier momento.
            </p>
            <p>
              Estamos redactando un documento legal completo que detallará cómo tratamos cada dato. Mientras tanto, si
              tienes cualquier duda, puedes consultar nuestro código en GitHub.
            </p>
            <p className="text-muted-foreground pt-4 text-sm font-medium">Última actualización: Mayo 2026</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
