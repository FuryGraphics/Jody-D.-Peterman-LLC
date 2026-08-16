"use client";

import { motion } from "framer-motion";

/**
 * Scroll-triggered fade-up reveal used site-wide.
 * Respects prefers-reduced-motion via Framer Motion's viewport once behavior.
 */
export default function FadeUp({
  children,
  as = "div",
  delay = 0,
  y = 28,
  className = "",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
