import Image from "next/image";

import { cn } from "@/lib/utils";

interface SeparatorProps {
  accent?: boolean;
  className?: string;
}

export const Separator = ({ accent = false, className }: SeparatorProps) => {
  const imgSrc = accent
    ? "/assets/separator-accent.svg"
    : "/assets/separator-white.svg";

  return (
    <div className={cn("relative w-40 h-6.5 mx-auto", className)}>
      <Image src={imgSrc} alt="separator" fill className="object-contain" />
    </div>
  );
};
