import { Transition, Variants } from "framer-motion";

export const letterAnimation: Variants = {
  initial: { y: "100%", opacity: 0 },
  enter: (i: [number, number]) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.6, 0, 0.2, 1],
      delay: i[0],
    } as Transition,
  }),
  exit: (i: [number, number]) => ({
    y: "100%",
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0, 0.2, 1],
      delay: i[1],
    } as Transition,
  }),
};

export const heightAnimation: Variants = {
  initial: { height: 0 },
  open: {
    height: "85vh",
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] } as Transition,
  },
  close: {
    height: 0,
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] } as Transition,
  },
};
