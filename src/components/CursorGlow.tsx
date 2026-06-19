"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 70 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 70 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none fixed z-0"
      style={{
        x: springX,
        y: springY,
        width: 500,
        height: 500,
        marginLeft: -250,
        marginTop: -250,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, oklch(var(--primary) / 0.06) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}
