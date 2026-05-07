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
           <p> En reservApp nos tomamos la privacidad muy en serio. Esta aplicación recopila únicamente los datos necesarios para el funcionamiento básico de la plataforma y la gestión de reservas. </p> 
           <p> No vendemos, alquilamos ni compartimos información personal con terceros con fines comerciales. </p> 
           <p>
             La plataforma utiliza{" "}
             <a
               href="https://firebase.google.com/support/privacy"
               target="_blank"
               rel="noopener noreferrer"
               className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4"
             >
               Firebase
             </a>
             , proporcionado por Google, como infraestructura backend y sistema de almacenamiento de datos.
           </p> 
           <p> También utilizamos Google Analytics for Firebase para recopilar métricas técnicas y analíticas anónimas relacionadas con el uso, rendimiento y estabilidad de la aplicación. </p> 
           <p>
             Los datos pueden ser procesados y almacenados en la infraestructura de Google bajo sus propias{" "}
             <a
               href="https://policies.google.com/privacy"
               target="_blank"
               rel="noopener noreferrer"
               className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-4"
             >
               medidas de seguridad y políticas de privacidad
             </a>
             .
           </p> <p> Aplicamos medidas razonables de seguridad para proteger la información almacenada y restringir accesos no autorizados. Sin embargo, ningún sistema conectado a Internet puede garantizar seguridad absoluta. </p> 
           <p> Como proyecto open source, parte del código fuente de reservApp puede consultarse públicamente con fines de transparencia y auditoría. </p> <p> Los usuarios pueden solicitar la modificación o eliminación de sus datos contactando con el responsable del proyecto. </p> 
           <p> Esta política podrá actualizarse conforme evolucione el proyecto o se incorporen nuevas funcionalidades. </p> 
           <p className="text-muted-foreground pt-4 text-sm font-medium"> Última actualización: Mayo 2026 </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
