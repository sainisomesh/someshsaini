"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const identities = [
  "computer science student",
  "healthcare AI builder",
  "aspiring physician-scientist",
  "biomedical informatics engineer",
  "ML researcher",
  "founder",
  "web designer & developer",
  "voice AI entrepreneur",
];

export function RotatingIdentity() {
  const [index, setIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % identities.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 2800);
    return () => clearInterval(interval);
  }, [advance]);

  if (prefersReducedMotion) {
    return (
      <span className="font-medium" style={{ color: "oklch(var(--primary))" }}>
        {identities[index]}
      </span>
    );
  }

  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={identities[index]}
          initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -40, opacity: 0, filter: "blur(4px)" }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block font-medium"
          style={{ color: "oklch(var(--primary))" }}
        >
          {identities[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
