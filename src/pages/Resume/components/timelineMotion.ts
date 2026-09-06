import type { CSSProperties } from "react";
import type { Variants } from "motion/react";

export const TIMELINE_STAGGER_SECONDS = 0.15;

export const timelineFadeInVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: index * TIMELINE_STAGGER_SECONDS,
      ease: "easeOut",
    },
  }),
};

export const timelineBulletVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      delay: index * TIMELINE_STAGGER_SECONDS,
      ease: "backOut",
    },
  }),
};

export function timelineLineDelayStyle(index: number) {
  return {
    "--line-delay": `${index * TIMELINE_STAGGER_SECONDS + 0.1}s`,
  } as CSSProperties;
}
