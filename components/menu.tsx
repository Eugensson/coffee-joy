import { MenuItem } from "@/components/menu-item";
import { Separator } from "@/components/separator";

import { MENU_DATA } from "@/constants";

export const Menu = () => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center text-primary">Our Menu</h2>
          <Separator className="mb-4" accent />
          <p className="text-center max-w-155 mx-auto">
            Explore our carefully crafted menu featuring freshly brewed coffee,
            specialty drinks, and artisan desserts. From rich espresso and
            creamy lattes to homemade pastries and light snacks — Zenbrew has
            something for every taste.
          </p>
        </div>
        <div className="flex flex-col items-center gap-12 xl:gap-24">
          <ul className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {MENU_DATA.map((item, index) => (
              <li key={index}>
                <MenuItem item={item} />
              </li>
            ))}
          </ul>
          <button type="button" className="btn">
            View full menu
          </button>
        </div>
      </div>
    </section>
  );
};
