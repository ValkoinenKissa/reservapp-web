import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Link from "next/link";

function AccordionItemFAQs(props: React.ComponentProps<typeof AccordionItem>) {
  return (
    <AccordionItem
      {...props}
      className={cn(
        "bg-secondary/30 data-[state=open]:bg-card data-[state=open]:border-border rounded-lg border border-transparent px-5 py-2 transition-colors data-[state=open]:shadow-sm lg:px-7",
        props.className,
      )}
    />
  );
}

function AccordionTriggerFAQs(props: React.ComponentProps<typeof AccordionTrigger>) {
  return (
    <AccordionTrigger
      {...props}
      className={cn("[&[data-state=open]>svg]:text-foreground text-base lg:text-lg", props.className)}
    />
  );
}

function AccordionContentFAQs(props: React.ComponentProps<typeof AccordionContent>) {
  return <AccordionContent {...props} className={cn("text-muted-foreground lg:text-base", props.className)} />;
}

export function FAQs() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25">
      <div className="flex w-full flex-col gap-6">
        <Badge variant="secondary" className="mb-2 uppercase">
          FAQ
        </Badge>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Preguntas
          <br />
          <span className="text-muted-foreground">frecuentes</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Obtén respuestas rápidas a las dudas más comunes.
        </p>
        <Button className="w-fit" size="lg" asChild>
          <Link href={process.env.NEXT_PUBLIC_DOWNLOAD_URL || "#download"}>Comienza ahora</Link>
        </Button>
      </div>
      <Accordion type="single" collapsible defaultValue="branding" className="grid w-full gap-4">
        <AccordionItemFAQs value="branding">
          <AccordionTriggerFAQs>¿Cuánto me va a costar utilizar reservApp?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Nada, actualmente este proyecto ha nacido como un MVP creado a partir de un proyecto de fin de ciclo, si
              algún día nos hiciera falta más recursos valoraríamos monetizar la app a través de funciones premium, jamás
              a través de anuncios abusivos.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="skills">
          <AccordionTriggerFAQs>¿Necesito alguna habilidad técnica para usar reservApp?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              No, hemos diseñado la app siguiendo las guías de diseño de material design para que sea sencilla y
              atractiva de usar para todo tipo de usuarios.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="devices">
          <AccordionTriggerFAQs>¿Mi app funcionará en todos los dispositivos?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Por el momento reservApp solo está disponible en dispositivos Android con una versión de Android 9 o
              superior. Estamos trabajando para traer reservApp a iOS y como aplicación web.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
        <AccordionItemFAQs value="notifcations">
          <AccordionTriggerFAQs>¿Puedo enviar o recibir notificaciones de los usuarios?</AccordionTriggerFAQs>
          <AccordionContentFAQs>
            <p>
              Sí, puedes recibir notificaciones de tus próximas reservas, pero aún estamos trabajando en otros tipos de
              notificaciones.
            </p>
          </AccordionContentFAQs>
        </AccordionItemFAQs>
      </Accordion>
    </div>
  );
}
