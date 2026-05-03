import type { Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -36, filter: "blur(3px)" },
  visible: { opacity: 1, x: 0,   filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
};

export const slideRight: Variants = {
  hidden:  { opacity: 0, x: 36,  filter: "blur(3px)" },
  visible: { opacity: 1, x: 0,   filter: "blur(0px)", transition: { duration: 0.8, ease: EASE } },
};

export const scaleUp: Variants = {
  hidden:  { opacity: 0, scale: 0.94, y: 20 },
  visible: { opacity: 1, scale: 1,    y: 0,  transition: { duration: 0.65, ease: EASE } },
};

export const stagger = (delay = 0.08): Variants => ({
  hidden:  {},
  visible: { transition: { staggerChildren: delay } },
});

export const viewport = { once: true, margin: "-60px" } as const;

// ─────────── v2 Motion variants ───────────

export const cinematicLogo: Variants = {
  hidden:  { opacity: 0, scale: 0.3, filter: "blur(60px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 2.2, ease: EASE, times: [0, 0.7, 1] },
  },
};

export const letterReveal: Variants = {
  hidden:  { y: "105%" },
  visible: { y: 0, transition: { duration: 0.9, ease: EASE } },
};

export const subtleFadeUp: Variants = {
  hidden:  { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
};

export const cardLift: Variants = {
  rest:  { y: 0, transition: { duration: 0.4, ease: EASE } },
  hover: { y: -6, transition: { duration: 0.4, ease: EASE } },
};
