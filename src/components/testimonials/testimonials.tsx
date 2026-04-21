import { Badge } from "@/components/ui/badge";
import { TestimonialMarquee } from "@/components/testimonials/testimonial-marquee";

export type Testimonial = {
  name: string;
  date: string;
  title: string;
  content: string;
  avatar?: string;
  rating: number;
};

const testimonials = [
  {
    name: "Giana Herwitz",
    date: "4 de mayo",
    title: "Buena App",
    content: `"reservApp nos ayudó a lanzar nuestra comunidad en días, no semanas. Las opciones de personalización son de primer nivel."`,
    rating: 5,
  },
  {
    name: "Hanna Gouse",
    date: "4 de mayo",
    title: "Excelente",
    content: `"Registrarme en reservApp fue una decisión obvia. Ha sido una de las mejores decisiones que he tomado para mi comunidad."`,
    rating: 5,
  },
  {
    name: "Kaiya Donin",
    date: "4 de mayo",
    title: "Muy útil",
    content: `"Me encanta lo fácil que es gestionar todo desde el panel. reservApp lo mantiene simple pero potente."`,
    rating: 5,
  },
  {
    name: "Alex Bergwijn",
    date: "4 de mayo",
    title: "Mejorable, pero útil",
    content: `"reservApp hizo que nuestra comunidad brillara: nuestra app se ve y se siente como si hubiera sido construida solo para nosotros."`,
    rating: 5,
  },
] satisfies Testimonial[];

export function Testimonials() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-14 md:py-25">
      <Badge variant="secondary" className="mb-2 uppercase">
        Testimonios
      </Badge>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        No te fíes<div className="text-muted-foreground">Solo de nuestra palabra</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Más usuarios como tú ya han probado reservApp y han podido opinar sobre nuestra app, siéntete libre tú también
        de hacerlo, estás como en casa.
      </p>
      <div className="relative w-[calc(100%+3rem)] overflow-x-hidden py-4 lg:w-full">
        <TestimonialMarquee testimonials={testimonials} className="mb-4" />
        <TestimonialMarquee testimonials={testimonials} reverse />
      </div>
    </div>
  );
}
