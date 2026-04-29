import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type Props = {
  className?: string;
};

/**
 * Logo de reservApp renderizado desde el archivo PNG optimizado con next/image.
 */
export function Logo({ className }: Props) {
  return (
    <Link href="/" className={cn("mt-9 inline-block select-none", className)}>
      <Image
        src="/logo.png"
        alt="reservApp"
        width={175}
        height={100}
        style={{ height: "auto" }}
        priority
      />
    </Link>
  );
}
