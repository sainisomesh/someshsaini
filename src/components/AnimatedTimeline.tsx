"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TimelineEntry {
  title: string;
  organization: string;
  date: string;
  bullets: string[];
  tags: string[];
}

interface AnimatedTimelineProps {
  entries: TimelineEntry[];
}

function TimelineItem({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative pl-10 pb-12 last:pb-0 group"
    >
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-primary/30 bg-background group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300 z-10" />

      {/* Content */}
      <div className="space-y-3">
        <div>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-lg font-display">{entry.title}</h3>
            <span className="text-sm text-muted-foreground font-sans">
              {entry.organization}
            </span>
          </div>
          <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/70 mt-1 font-sans">
            {entry.date}
          </p>
        </div>

        <ul className="space-y-1.5">
          {entry.bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-sm text-muted-foreground leading-relaxed font-sans flex items-start gap-2"
            >
              <span className="text-primary/40 mt-1.5 shrink-0">—</span>
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          {entry.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function AnimatedTimeline({ entries }: AnimatedTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative">
      {/* Static background line */}
      <div className="absolute left-[5px] top-0 bottom-0 w-px bg-border" />

      {/* Animated fill line */}
      <motion.div
        className="absolute left-[5px] top-0 w-px bg-primary origin-top"
        style={{ height: lineHeight }}
      />

      {/* Entries */}
      <div className="space-y-0">
        {entries.map((entry, index) => (
          <TimelineItem key={index} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
}
