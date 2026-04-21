"use client";

import { PlanSelect, plans } from "@/components/pricing/plan-select";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const features = [
  "Gestión de reservas 24/7",
  "Comunicación directa con vecinos",
  "Alertas de incidencias en tiempo real",
  "Historial de pagos y recursos",
];

export function Plans() {
  const [selectedPriceId, setSelectedPriceId] = useState(plans[0].priceId);

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center">
      <h1 className="mt-8 mb-4 text-3xl font-bold md:text-center md:text-4xl">
        Desbloquea funciones avanzadas para tu comunidad
      </h1>
      <ul className="mt-4 mb-8 w-full space-y-3 md:mx-auto md:max-w-xs">
        {features.map((feature, index) => (
          <li key={index} className="text-foreground/60 flex items-center text-base">
            <div className="bg-success mr-2 grid place-items-center rounded-full p-0.5">
              <CheckIcon className="size-4 p-0.5 text-white" />
            </div>
            {feature}
          </li>
        ))}
      </ul>
      <PlanSelect value={selectedPriceId} onChange={setSelectedPriceId} />
      <Button className="mb-8 w-full" size="lg" asChild>
        <Link href={`/checkout?price_id=${selectedPriceId}`}>Continuar</Link>
      </Button>
      <div className="text-muted-foreground flex justify-center gap-8 text-sm underline">
        <Link href="/privacy-policy">Política de privacidad</Link>
        <Link href="/terms-and-conditions">Términos y condiciones</Link>
        <Link href="/refund-policy">Política de reembolso</Link>
      </div>
    </div>
  );
}
