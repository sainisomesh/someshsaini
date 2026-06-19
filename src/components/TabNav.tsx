"use client";

import { motion } from "framer-motion";

interface TabNavProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabNav({ tabs, activeTab, onTabChange }: TabNavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <button
          onClick={() => onTabChange("Home")}
          className="font-display text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
        >
          Somesh Saini
        </button>

        {/* Tab Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className="relative px-4 py-2 text-sm font-medium transition-colors rounded-lg outline-none"
              style={{
                color:
                  activeTab === tab
                    ? "oklch(var(--foreground))"
                    : "oklch(var(--muted-foreground))",
              }}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-lg"
                  style={{ background: "oklch(var(--accent))" }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <MobileMenu
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      </div>
    </header>
  );
}

function MobileMenu({
  tabs,
  activeTab,
  onTabChange,
}: {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="md:hidden">
      <select
        value={activeTab}
        onChange={(e) => onTabChange(e.target.value)}
        className="bg-transparent text-sm font-medium border border-border rounded-lg px-3 py-1.5 outline-none"
        style={{ color: "oklch(var(--foreground))" }}
      >
        {tabs.map((tab) => (
          <option key={tab} value={tab}>
            {tab}
          </option>
        ))}
      </select>
    </div>
  );
}
