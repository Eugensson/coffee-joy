import Link from "next/link";

import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

import { NAV_LINKS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat pt-16 relative">
      <div className="absolute top-0 w-full h-full bg-black/[0.9] z-10" />
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col justify-center items-center gap-14">
          <Logo />
          <nav>
            <ul className="flex flex-col justify-center items-center xl:flex-row gap-8 xl:gap-12">
              {NAV_LINKS.map(({ label, href }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="uppercase text-white tracking-widest hover:text-accent transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Socials />
          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex justify-center items-center py-6">
            <p>&copy; Copyright 2025 - Zenbrew. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
