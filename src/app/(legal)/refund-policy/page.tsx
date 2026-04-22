import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de reembolso - reservApp",
  description: "Política de reembolso de reservApp",
};

export default function RefundPolicy() {
  return <h1 className="mt-20 text-center text-4xl font-medium tracking-tight sm:text-5xl">Política de reembolso</h1>;
}
