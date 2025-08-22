import Image from "next/image";

import { ExploreItem } from "@/components/explore-item";

import { EXPLORE_DATA } from "@/constants";

export const Explore = () => {
  const leftItems = EXPLORE_DATA.filter((item) => item.align === "right");
  const rightItems = EXPLORE_DATA.filter((item) => item.align === "left");

  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen" id="explore">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        <ul className="w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          {/* Left column */}
          <li className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-100 mx-auto xl:max-w-none xl:mx-0">
            {leftItems.map((item, i) => (
              <ExploreItem key={i} {...item} />
            ))}
          </li>
          {/* Center image */}
          <li className="hidden xl:flex justify-center">
            <div className="relative w-80.5 h-125">
              <Image
                src="/assets/explore/cup.png"
                alt="Cup of coffee"
                fill
                className="object-cover"
                priority
                data-scroll
                data-scroll-speed="0.1"
              />
            </div>
          </li>
          {/* Right column */}
          <li className="flex-1 flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-100 mx-auto xl:max-w-none xl:mx-0">
            {rightItems.map((item, i) => (
              <ExploreItem key={i} {...item} />
            ))}
          </li>
        </ul>
      </div>
    </section>
  );
};
