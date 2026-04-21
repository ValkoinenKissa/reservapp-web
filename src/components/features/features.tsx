import { FeaturesCarousel } from "@/components/features/features-carousel";
import { FeaturesTabs } from "@/components/features/features-tabs";
import { Badge } from "@/components/ui/badge";
import { ActivityIcon, ChartNoAxesColumnIcon, SlidersIcon, ZapIcon } from "lucide-react";

export type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
};

const features = [
  {
    icon: <SlidersIcon size={20} />,
    title: "Control total de tu comunidad",
    description: "Hazla tuya, personaliza el nombre, descripcion ubicacion y mas",
    image: "/app-image-1.png",
  },
  {
    icon: <ZapIcon size={20} />,
    title: "Rapida, desarrollada 100% en Kotlin",
    description: "Construida en Kotlin el estandar oficial de Google para las aplicaciones android en 2026",
    image: "/app-image-1.png",
  },
  {
    icon: <ActivityIcon size={20} />,
    title: "Incidencias en tiempo real",
    description: "Interactua con tus usuarios en tiempo real, con incidencias, recursos etc.",
    image: "/app-image-1.png",
  },
  {
    icon: <ChartNoAxesColumnIcon size={20} />,
    title: "Open-source",
    description: "Cualquiera puede visualizar y auditar nuestro codigo fuente, ademas con nostros no solo puedes limitarte a soliticar una funcion nueva, sino que tienes la libertad de desarrollarlo tu mismo",
    image: "/app-image-1.png",
  },
] satisfies Feature[];

export function Features() {
  return (
    <div id="features" className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <Badge variant="secondary" className="uppercase">
        Funciones
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Descubre nuestras<div className="text-muted-foreground">Funciones unicas</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Hemos creado la plataforma de gestión de comunidades definitiva para que puedas centrarte en disfrutar de tu
        comunidad.
      </p>
      <FeaturesCarousel features={features} className="block lg:hidden" />
      <FeaturesTabs features={features} className="hidden lg:block" />
    </div>
  );
}
