"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { reveal, stagger } from "@/lib/animations";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={{
        ...reveal,
        visible: {
          ...reveal.visible,
          transition: {
            duration: 0.78,
            delay,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerReveal({ children, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}
