import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ToggleListProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function ToggleList({ title, children, defaultOpen = false }: ToggleListProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="py-2 my-2 border-b border-[rgba(0,0,0,0.04)] last:border-b-0">
      <div
        className="flex items-start gap-2 cursor-pointer group px-2 py-1.5 rounded-[6px] hover:bg-white hover:shadow-subtle transition-all duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-[2px] bg-[#f5f5f5] rounded-[4px] group-hover:bg-[#f0f0f0] transition-colors border border-[rgba(0,0,0,0.04)]">
          <ChevronRight
            className={`w-3.5 h-3.5 transition-transform duration-200 text-[#525252] ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </div>
        <div className="flex-1 font-semibold text-[#171717] leading-normal mt-[3px]">
          {title}
        </div>
      </div>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="ml-9 pl-4 border-l-2 border-[rgba(0,0,0,0.06)] mt-2 mb-4 space-y-2 text-[#525252]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
