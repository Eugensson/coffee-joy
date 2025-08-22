import Image from "next/image";

import { MenuItemType } from "@/types";

interface MenuItemProps {
  item: MenuItemType;
}

export const MenuItem = ({ item }: MenuItemProps) => {
  const { imageSrc, name, description, price } = item;

  return (
    <div className="flex items-center gap-4">
      <div className="relative size-15 xl:size-18 rounded-full">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex justify-between items-baseline gap-4">
          <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">
            {name}
          </p>
          <div className="flex-1 border-b border-dashed border-primary" />
          <p className="leading-none font-primary font-semibold text-[30px] text-primary">
            {price.toFixed(2)}
          </p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
