"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function MouseSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  // Use springs for smooth following
  const springX = useSpring(mousePosition.x, { stiffness: 50, damping: 20 });
  const springY = useSpring(mousePosition.y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      springX.set(e.clientX);
      springY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [springX, springY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-0 overflow-hidden mix-blend-screen"
      style={{
        background: "transparent",
      }}
    >
      <motion.div
        className="absolute rounded-full opacity-30 dark:opacity-20 blur-[100px]"
        style={{
          width: 600,
          height: 600,
          left: -300,
          top: -300,
          x: springX,
          y: springY,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
