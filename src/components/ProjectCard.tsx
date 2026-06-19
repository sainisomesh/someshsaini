"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  className?: string;
}

export function ProjectCard({
  title,
  summary,
  tags,
  featured = false,
  className,
}: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative border border-border rounded-xl p-6 bg-card shadow-subtle hover:shadow-lift hover:border-foreground/10 transition-all duration-500 cursor-pointer overflow-hidden",
        featured && "lg:col-span-2 p-8",
        className
      )}
    >
      {/* Interactive Hover Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              hsl(var(--primary) / 0.08),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            {featured && (
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-2 font-sans">
                Featured
              </p>
            )}
            <h3
              className={cn(
                "font-display tracking-tight",
                featured ? "text-2xl sm:text-3xl" : "text-xl"
              )}
            >
              {title}
            </h3>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 ml-4" />
        </div>

        {/* Summary */}
        <p
          className={cn(
            "text-muted-foreground leading-relaxed font-sans mb-6 flex-1",
            featured ? "text-base" : "text-sm"
          )}
        >
          {summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
