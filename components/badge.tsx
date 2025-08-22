import Image from "next/image";

import { cn } from "@/lib/utils";

interface BadgeProps {
  containerStyles?: string;
}

export const Badge = ({ containerStyles }: BadgeProps) => {
  return (
    <div className={cn("relative", containerStyles)}>
      <Image
        src="/assets/badge.svg"
        alt="badge"
        fill
        className="object-contain"
      />
    </div>
  );
};
