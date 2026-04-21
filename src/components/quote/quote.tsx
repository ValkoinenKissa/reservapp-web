import React from "react";

export function Quote() {
  return (
    <figure className="mx-auto flex max-w-3xl flex-col items-center px-4 py-12 text-center">
      <blockquote className="text-3xl leading-[1.1] font-medium tracking-tighter text-balance md:text-5xl md:text-wrap">
        <span>&quot;Desde el primer dia que provamos reservApp nos hemos olvidado de gestionar una comunidad de propietarios</span>
        <span className="text-muted-foreground/50">
          {' '}a traves de WhatsApp y engorrosos avisos en zonas comunes&quot;
        </span>
      </blockquote>
      <figcaption className="mt-10">
        <span className="block font-semibold tracking-tight md:text-xl">Pablo</span>
        <span className="text-muted-foreground mt-1 block text-xs tracking-tighter md:text-xl">
          Presidente comunidad · Comunidad de los parques
        </span>
      </figcaption>
    </figure>
  );
}
