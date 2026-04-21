import { FeatureDetails } from "@/components/features/feature-details";
import type { Feature } from "@/components/features/features";
import { CodeBlock } from "@/components/features/code-block";
import Image from "next/image";

type FeatureCardProps = {
  feature: Feature;
  isActive: boolean;
};

export function FeatureCard({ feature, isActive }: FeatureCardProps) {
  return (
    <div className="flex w-[var(--carousel-item-width)] flex-col items-center gap-5 px-2 py-6">
      <FeatureDetails feature={feature} isActive={isActive} />
      <div className="bg-card flex min-h-[445px] w-full items-center justify-center rounded-lg border p-4">
        {feature.image ? (
          <Image src={feature.image} alt="App Image" width={304} height={445} className="h-auto w-full object-contain" />
        ) : (
          <CodeBlock code={feature.code || ""} className="scale-90" />
        )}
      </div>
    </div>
  );
}
