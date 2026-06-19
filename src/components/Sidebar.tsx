"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Search, Settings, Plus, LayoutList, Home, User, Briefcase, GraduationCap, Globe, Mail } from "lucide-react";

export const tabs = ["Home", "About", "Experience", "Projects", "Websites", "Contact"] as const;
export type TabId = (typeof tabs)[number];

const tabIcons: Record<TabId, React.ReactNode> = {
  Home: <Home className="w-4 h-4" />,
  About: <User className="w-4 h-4" />,
  Experience: <GraduationCap className="w-4 h-4" />,
  Projects: <Briefcase className="w-4 h-4" />,
  Websites: <Globe className="w-4 h-4" />,
  Contact: <Mail className="w-4 h-4" />,
};

interface SidebarProps {
  activeTab: TabId;
  setActiveTab: (id: TabId) => void;
  onSearchClick: () => void;
  onSettingsClick: () => void;
}

export function Sidebar({ activeTab, setActiveTab, onSearchClick, onSettingsClick }: SidebarProps) {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  return (
    <div className="w-[240px] h-screen shrink-0 border-r flex flex-col bg-white/60 backdrop-blur-xl border-[rgba(0,0,0,0.06)] relative z-20 shadow-[1px_0_0_0_rgba(0,0,0,0.02)]">
      {/* Workspace Header */}
      <div className="relative">
        <div 
          onClick={() => setShowEasterEgg(true)}
          className="h-12 flex items-center px-4 hover:bg-[rgba(0,0,0,0.04)] cursor-pointer transition-colors mt-2 mx-2 rounded-[6px]"
        >
          <div className="w-5 h-5 rounded-[4px] bg-[#f0f0f0] flex items-center justify-center text-xs mr-2 font-medium text-[#171717]">
            S
          </div>
          <span className="text-sm font-semibold flex-1 truncate text-[#171717] tracking-tight">
            Somesh&apos;s Workspace
          </span>
        </div>
        <AnimatePresence>
          {showEasterEgg && (
            <motion.div
              initial={{ opacity: 0, y: -5, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-14 left-2 right-2 bg-white border border-[rgba(0,0,0,0.08)] shadow-lift rounded-xl p-3.5 z-50 text-[13px] text-[#404040] leading-relaxed"
            >
              <div className="flex items-start justify-between mb-1.5">
                <span className="font-semibold text-[#171717] flex items-center gap-1.5">
                  <span className="text-base">✨</span> Hey there!
                </span>
                <button onClick={(e) => { e.stopPropagation(); setShowEasterEgg(false); }} className="text-[#a3a3a3] hover:text-[#171717] transition-colors -mt-0.5 -mr-0.5 p-1">
                  <Plus className="w-3.5 h-3.5 rotate-45" />
                </button>
              </div>
              <p>
                This button doesn&apos;t actually lead anywhere! I built this site from scratch, inspired by Notion&apos;s aesthetic—opting for clean simplicity to let the work speak for itself. Enjoy exploring!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Quick Actions */}
      <div className="px-2 py-2 space-y-0.5">
        <button 
          onClick={onSearchClick}
          className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-[#525252] hover:text-[#171717] hover:bg-[rgba(0,0,0,0.04)] rounded-[6px] cursor-pointer transition-colors text-left font-medium group"
        >
          <Search className="w-4 h-4" />
          <span className="flex-1">Search</span>
          <kbd className="px-1.5 py-0 text-[10px] font-semibold text-[#a3a3a3] bg-[rgba(0,0,0,0.04)] rounded-[4px] border border-[rgba(0,0,0,0.04)] opacity-0 group-hover:opacity-100 transition-opacity">⌘K</kbd>
        </button>
        <button 
          onClick={onSettingsClick}
          className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-[#525252] hover:text-[#171717] hover:bg-[rgba(0,0,0,0.04)] rounded-[6px] cursor-pointer transition-colors text-left font-medium"
        >
          <Settings className="w-4 h-4" />
          Settings & members
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pt-4">
        {/* Private Section */}
        <div className="px-2">
          <div className="group flex items-center justify-between px-3 py-1 mb-1">
            <span className="text-xs font-semibold text-[#a3a3a3] tracking-wide uppercase">Private</span>
            <Plus className="w-3.5 h-3.5 text-[#a3a3a3] opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity" />
          </div>

          <div className="mt-1 space-y-0.5 relative">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full flex items-center gap-2 px-3 py-1.5 text-sm rounded-[6px] cursor-pointer transition-colors text-left relative z-10 ${
                    isActive ? "text-[#171717] font-semibold" : "text-[#525252] hover:text-[#171717] hover:bg-[rgba(0,0,0,0.02)] font-medium"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-white shadow-subtle rounded-[6px] border border-[rgba(0,0,0,0.04)] z-[-1]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 text-[#a3a3a3] ${isActive ? "rotate-90" : ""}`} />
                  {tabIcons[tab]}
                  <span className="truncate">{tab}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
