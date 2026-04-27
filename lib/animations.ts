import type { Variants } from "framer-motion";

export const reveal: Variants = {
  hidden: {
    opacity: 0,
    y: 34
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.78,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08
    }
  }
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};
