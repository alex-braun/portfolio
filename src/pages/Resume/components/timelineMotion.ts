import type { CSSProperties } from "react";
import type { Variants } from "motion/react";

export const TIMELINE_STAGGER_SECONDS = 0.15;

// Delays the fade/scale-in past the router's page view-transition (~0.1s crossfade) so
// the animation doesn't start while Safari is still handing off from the transition snapshot.
export const TIMELINE_START_DELAY = 0.15;

// Hints Safari to promote animating elements (title text, gradient bullets) to their own
// compositing layer up front, avoiding a repaint flicker as their transform/opacity change.
export const motionLayerStyle: CSSProperties = {
  willChange: "transform, opacity",
  backfaceVisibility: "hidden",
};

export const timelineFadeInVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      delay: TIMELINE_START_DELAY + index * TIMELINE_STAGGER_SECONDS,
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
      delay: TIMELINE_START_DELAY + index * TIMELINE_STAGGER_SECONDS,
      ease: "backOut",
    },
  }),
};

export function timelineLineDelayStyle(index: number) {
  return {
    "--line-delay": `${TIMELINE_START_DELAY + index * TIMELINE_STAGGER_SECONDS + 0.1}s`,
  } as CSSProperties;
}
