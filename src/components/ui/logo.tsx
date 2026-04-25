import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  className?: string;
};

/**
 * Logo de reservApp renderizado directamente desde el SVG original,
 * sin ningún tipo de escalado ni transformación.
 */
export function Logo({ className }: Props) {
  return (
    <Link href="/" className={cn("mt-9 inline-block select-none", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.svg"
        alt="reservApp"
        style={{ width: "175px", height: "auto" }}
      />
    </Link>
  );
}
