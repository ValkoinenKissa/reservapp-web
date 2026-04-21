import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  className?: string;
  /** Tamaño base de la fuente. Por defecto "1.6rem". */
  fontSize?: string;
};

/**
 * Logo de reservApp renderizado como texto CSS.
 * Es completamente independiente de la resolución y no pierde estilo
 * al reescalar, a diferencia de un SVG con texto embebido.
 */
export function Logo({ className, fontSize = "1.6rem" }: Props) {
  return (
    <Link href="/" className={cn("mt-9 inline-block select-none", className)}>
      <span
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500,
          fontSize,
          color: "inherit",
          letterSpacing: "-0.01em",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        reservApp
      </span>
    </Link>
  );
}
