"use client";

import { motion } from "framer-motion";

import { NavList } from "@/components/nav-list";

import { heightAnimation } from "@/lib/variants";

interface NavProps {
  setNavActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Nav = ({ setNavActive }: NavProps) => {
  return (
    <motion.nav
      variants={heightAnimation}
      initial="initial"
      animate="open"
      exit="close"
      className="bg-primary overflow-hidden absolute z-30 -top-full w-full"
    >
      <div className="container flex justify-center items-center">
        <NavList setNavActive={setNavActive} />
      </div>
    </motion.nav>
  );
};
