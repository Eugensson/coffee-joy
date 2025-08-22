import Image from "next/image";

import { cn } from "@/lib/utils";
import { ExploreItemType } from "@/types";

export const ExploreItem = ({
  icon,
  alt,
  title,
  description,
  align = "left",
}: ExploreItemType) => {
  return (
    <div className="relative flex items-start">
      <div
        className={cn(
          "xl:max-w-105 xl:flex xl:flex-col",
          align === "right"
            ? "xl:text-right xl:items-end"
            : "xl:text-left xl:items-start"
        )}
      >
        <div className="mb-6 flex justify-center items-center">
          <Image src={icon} alt={alt} width={56} height={56} />
        </div>
        <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">
          {title}
        </h3>
        <p className="max-w-100">{description}</p>
      </div>
    </div>
  );
};
