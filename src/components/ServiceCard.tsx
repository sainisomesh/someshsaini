"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Globe, Rocket, Cpu } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  audience: string;
  description: string;
  index: number;
}

export function ServiceCard({
  icon,
  title,
  audience,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative border border-border rounded-xl p-8 bg-card shadow-subtle",
        "hover:shadow-lift hover:border-foreground/10 transition-all duration-500"
      )}
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-md border border-border flex items-center justify-center mb-6 group-hover:border-foreground/30 transition-colors duration-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-display tracking-tight mb-2">{title}</h3>
      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60 mb-4 font-sans">
        {audience}
      </p>
      <p className="text-sm text-muted-foreground leading-relaxed font-sans">
        {description}
      </p>
    </motion.div>
  );
}

const services = [
  {
    icon: <Globe className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />,
    title: "Websites & Personal Brands",
    audience: "For founders, researchers, and professionals",
    description:
      "A custom-built, premium website that communicates credibility, tells your story, and attracts the right opportunities. Designed to feel distinctly yours — not a template.",
  },
  {
    icon: <Rocket className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />,
    title: "Startup & Product Pages",
    audience: "For early-stage teams shipping fast",
    description:
      "A conversion-optimized landing page that tells your product story and drives signups. Built with modern frameworks, deployed in days, and designed to grow with you.",
  },
  {
    icon: <Cpu className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />,
    title: "AI & Technical Prototypes",
    audience: "For teams exploring voice AI, ML, or data tools",
    description:
      "A working prototype that validates your idea and accelerates development. From voice interfaces to data pipelines, built with production-grade thinking from day one.",
  },
];

export { services };
