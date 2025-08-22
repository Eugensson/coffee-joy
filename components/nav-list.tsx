"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { NAV_LINKS } from "@/constants";
import { letterAnimation } from "@/lib/variants";

const getLetter = (name: string) => {
  const letters: React.ReactNode[] = [];

  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnimation}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.04, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });

  return letters;
};

interface NavListProps {
  setNavActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavList = ({ setNavActive }: NavListProps) => {
  return (
    <ul className="flex flex-col items-center gap-8 font-primary text-4xl font-semibold text-accent uppercase">
      {NAV_LINKS.map(({ href, label }, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="py-4 flex justify-center items-center gap-2 overflow-hidden hover:text-white transition-all"
        >
          <Link href={href} onClick={() => setNavActive(false)}>
            {getLetter(label)}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};
