"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  className?: string;
}

export function AnimatedTabs({
  tabs,
  activeTab,
  setActiveTab,
  className,
}: AnimatedTabsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 p-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm shadow-subtle w-fit",
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium font-sans transition-colors rounded-full outline-none",
            activeTab === tab
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-tab"
              className="absolute inset-0 bg-primary rounded-full -z-10 shadow-sm"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tab}</span>
        </button>
      ))}
    </div>
  );
}
