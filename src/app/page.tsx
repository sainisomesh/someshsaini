"use client";

import { useState, useEffect, useRef } from "react";
import { Sidebar, TabId, tabs } from "@/components/Sidebar";
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from "framer-motion";
import { SearchModal } from "@/components/SearchModal";
import { SettingsModal } from "@/components/SettingsModal";

import { HomeTab } from "@/components/tabs/HomeTab";
import { AboutTab } from "@/components/tabs/AboutTab";
import { WorkTab } from "@/components/tabs/WorkTab";
import { ExperienceTab } from "@/components/tabs/ExperienceTab";
import { ContactTab } from "@/components/tabs/ContactTab";
import { WebsitesTab } from "@/components/tabs/WebsitesTab";

const tabComponents: Record<TabId, React.ComponentType<any>> = {
  Home: HomeTab,
  About: AboutTab,
  Experience: ExperienceTab,
  Projects: WorkTab,
  Websites: WebsitesTab,
  Contact: ContactTab,
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("Home");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  const ActiveComponent = tabComponents[activeTab];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0,0,0,0.03), transparent 80%)`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, [activeTab]);

  return (
    <div 
      className="flex h-screen bg-[#fafafa] text-[#171717] overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{ background }}
      />
      
      <div className="z-10 flex h-full w-full">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onSearchClick={() => setIsSearchOpen(true)} 
          onSettingsClick={() => setIsSettingsOpen(true)}
        />
        
        <main ref={mainRef} className="flex-1 overflow-y-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="h-full"
            >
              <ActiveComponent setActiveTab={setActiveTab} />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        onSelectTab={setActiveTab} 
      />
      
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        setActiveTab={setActiveTab} 
      />
    </div>
  );
}
