import type { Transition, Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Shared subtle entrance motion for in-page sections (respects reduced motion). */
export function sectionMotion(reduceMotion: boolean | null) {
  const off = reduceMotion === true;
  const transition: Transition = { duration: off ? 0 : 0.42, ease };
  const item: Variants = {
    hidden: off ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition },
  };
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: off ? 0 : 0.07,
        delayChildren: off ? 0 : 0.03,
      },
    },
  };
  return { container, item };
}
