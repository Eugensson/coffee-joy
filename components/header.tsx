"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";

import { cn } from "@/lib/utils";

export const Header = () => {
  const [navActive, setNavActive] = useState<boolean>(false);

  return (
    <header className="absolute top-10 left-0 right-0 z-50">
      <div className="container flex justify-between items-center">
        <Logo />
        <button
          onClick={() => setNavActive(!navActive)}
          type="button"
          className="w-8 h-6 text-accent relative flex justify-center items-center z-40 outline-none cursor-pointer"
        >
          <span
            className={cn(
              "w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300",
              navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"
            )}
          />
          <span
            className={cn(
              "w-full h-[1.5px] bg-current absolute left-0 transition-opacity duration-300",
              navActive ? "opacity-0" : "top-1/2"
            )}
          />
          <span
            className={cn(
              "w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300",
              navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"
            )}
          />
        </button>
      </div>
      <AnimatePresence mode="wait">
        {navActive && <Nav setNavActive={setNavActive} />}
      </AnimatePresence>
    </header>
  );
};
