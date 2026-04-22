import { FooterBlur } from "@/components/footer/footer-blur";
import { XIcon, LinkedInIcon, GithubIcon } from "@/components/footer/icons";
import Link from "next/link";

const links = [
  {
    title: "reservApp",
    links: [
      {
        label: "Descargar App",
        href: "https://apps.apple.com/",
        title: "Descargar la aplicación de la App Store",
      },
      {
        label: "Funciones",
        href: "/#features",
        title: "Mira nuestras funciones",
      },
      {
        label: "Precios",
        href: "/pricing",
        title: "Ver precios",
      },
    ],
  },
  {
    title: "Productos",
    links: [
      {
        label: "Para Android",
        href: "https://play.google.com/store",
        title: "Descargar en Android",
      },
      {
        label: "Para iPhone",
        href: "https://apps.apple.com/",
        title: "Descargar en iOS",
      },
    ],
  },
  {
    title: "Compañía",
    links: [
      {
        label: "Términos y condiciones",
        href: "/terms-and-conditions",
        title: "Lee nuestros términos y condiciones",
      },
      {
        label: "Política de privacidad",
        href: "/privacy-policy",
        title: "Lee nuestra política de privacidad",
      },
      {
        label: "Política de reembolso",
        href: "/refund-policy",
        title: "Lee nuestra política de reembolso",
      },
    ],
  },
  {
    title: "Síguenos",
    links: [
      {
        label: (
          <div className="flex items-center gap-2">
            <XIcon className="h-4 w-4" />
            <span>Twitter</span>
          </div>
        ),
        href: "https://x.com/",
        title: "Síguenos en Twitter",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <LinkedInIcon className="h-4 w-4" />
            <span>LinkedIn</span>
          </div>
        ),
        href: "https://www.linkedin.com/",
        title: "Conéctate con nosotros en LinkedIn",
      },
      {
        label: (
          <div className="flex items-center gap-2">
            <GithubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </div>
        ),
        href: "https://github.com/",
        title: "Mira nuestro repositorio de GitHub",
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <FooterBlur />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 tracking-tight md:grid-cols-4">
        {links.map((link) => (
          <div key={link.title} className="mb-10 text-center">
            <h3 className="text-muted-foreground mb-8">{link.title}</h3>
            <ul className="flex flex-col items-center gap-8">
              {link.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    title={link.title}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
