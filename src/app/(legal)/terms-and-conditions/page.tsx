import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones - reservApp",
  description: "Términos y condiciones de reservApp",
};

export default function TermsAndConditions() {
  return <h1 className="mt-20 text-center text-4xl font-medium tracking-tight sm:text-5xl">Términos y condiciones</h1>;
}
