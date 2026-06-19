"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Briefcase, GraduationCap, Globe, Mail } from "lucide-react";
import { TabId } from "./Sidebar";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: TabId) => void;
}

const SEARCH_INDEX = [
  { 
    id: "vocalis", 
    title: "Vocalis Platform", 
    type: "Experience & Projects", 
    tab: "Projects" as TabId, 
    icon: Briefcase,
    keywords: "startup, founder, entrepreneurship, machine learning, deep learning, ai, health clinics, nsf i-corps, google cloud, ceo, technical lead" 
  },
  { 
    id: "ccf", 
    title: "Cleveland Clinic Research", 
    type: "Experience", 
    tab: "Experience" as TabId, 
    icon: GraduationCap,
    keywords: "machine learning researcher, deep learning, ecg, chagas disease, computational medicine, cardiology, paper, publication, sao paulo" 
  },
  { 
    id: "pg", 
    title: "Procter & Gamble R&D", 
    type: "Experience", 
    tab: "Experience" as TabId, 
    icon: GraduationCap,
    keywords: "research and development engineer, fabric care, personal health care, ai workflows, data science, python, experiments, corporate" 
  },
  { 
    id: "ohh", 
    title: "One Heart Health", 
    type: "Experience", 
    tab: "Experience" as TabId, 
    icon: GraduationCap,
    keywords: "clinical ai researcher, deep learning, transformers, congenital heart disease, global health, pediatric phonocardiograms, publication" 
  },
  { 
    id: "kismat", 
    title: "Case Kismat Dance Team", 
    type: "About Me", 
    tab: "About" as TabId, 
    icon: User,
    keywords: "bollywood fusion dance, hobbies, extracurricular, culture, performance, fun, campus activities" 
  },
  { 
    id: "shoes", 
    title: "Reselling Shoes", 
    type: "About Me", 
    tab: "About" as TabId, 
    icon: User,
    keywords: "side hustle, business, entrepreneurship, hobbies, sneakers, past, sales" 
  },
  { 
    id: "lawns", 
    title: "Mowing Lawns", 
    type: "About Me", 
    tab: "About" as TabId, 
    icon: User,
    keywords: "first business, hard work, hobbies, past, discipline" 
  },
  { 
    id: "personal-sites", 
    title: "Freelance & Websites", 
    type: "Projects", 
    tab: "Websites" as TabId, 
    icon: Globe,
    keywords: "freelance, web design, engineering, next.js, tailwind css, websites for founders, professional brands" 
  },
  { 
    id: "contact", 
    title: "Contact Info & Resume", 
    type: "Contact", 
    tab: "Contact" as TabId, 
    icon: Mail,
    keywords: "email, reach out, collaborate, resume, cv, linkedin, github, phone number, hire me" 
  },
  { 
    id: "education", 
    title: "Education @ CWRU", 
    type: "About Me", 
    tab: "About" as TabId, 
    icon: GraduationCap,
    keywords: "case western reserve university, ms biomedical health informatics, ba computer science, chemistry minor, college, school, gpa, undergraduate, masters" 
  }
];

const DEFAULT_QUERIES = [
  SEARCH_INDEX[0], // Vocalis
  SEARCH_INDEX[1], // CCF
  SEARCH_INDEX[8], // Contact
  SEARCH_INDEX[7], // Websites
];

export function SearchModal({ isOpen, onClose, onSelectTab }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return SEARCH_INDEX.filter((item) => {
      const textToSearch = `${item.title} ${item.type} ${item.tab} ${item.keywords}`.toLowerCase();
      return searchTerms.every((term) => textToSearch.includes(term));
    });
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      // slight delay to allow animation to start before focus
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const filteredResults = query.trim() === "" ? DEFAULT_QUERIES : searchResults;

  const handleSelect = (tab: TabId) => {
    onSelectTab(tab);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[100]"
            onClick={onClose}
          />
          <div className="fixed inset-0 pointer-events-none z-[101] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="w-full max-w-[600px] bg-white rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_12px_34px_rgba(0,0,0,0.1)] overflow-hidden pointer-events-auto flex flex-col max-h-[80vh]"
            >
              <div className="flex items-center px-4 border-b border-[rgba(0,0,0,0.06)] shrink-0">
                <Search className="w-5 h-5 text-[#a3a3a3] shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask a question or search Somesh's workspace..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 w-full bg-transparent border-none outline-none px-3 py-4 text-[15px] text-[#171717] placeholder:text-[#a3a3a3] font-medium"
                />
                <div className="flex items-center gap-1 shrink-0">
                  <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-[#a3a3a3] bg-[rgba(0,0,0,0.04)] rounded-[4px] border border-[rgba(0,0,0,0.04)]">esc</kbd>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-2">
                {query.trim() === "" && (
                  <div className="px-3 py-2 text-xs font-semibold text-[#a3a3a3] uppercase tracking-wide">
                    Example Queries
                  </div>
                )}
                {query.trim() !== "" && filteredResults.length > 0 && (
                  <div className="px-3 py-2 text-xs font-semibold text-[#a3a3a3] uppercase tracking-wide">
                    AI-Matched Results
                  </div>
                )}
                
                {filteredResults.length === 0 ? (
                  <div className="px-4 py-8 text-center text-[#737373] text-[14px]">
                    <div className="font-semibold mb-1 text-[#171717]">No exact matches found</div>
                    <div>Try asking about &quot;deep learning&quot;, &quot;hobbies&quot;, or &quot;contact info&quot;</div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-0.5">
                    {filteredResults.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelect(item.tab)}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[rgba(0,0,0,0.04)] transition-colors text-left group"
                        >
                          <div className="w-8 h-8 rounded-[6px] bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.04)] flex items-center justify-center shrink-0 group-hover:bg-white group-hover:border-[rgba(0,0,0,0.06)] group-hover:shadow-sm transition-all">
                            <Icon className="w-4 h-4 text-[#737373] group-hover:text-[#171717]" />
                          </div>
                          <div className="flex flex-col flex-1 min-w-0">
                            <span className="text-[14px] font-semibold text-[#171717] truncate">{item.title}</span>
                            <span className="text-[12px] text-[#737373] truncate">{item.type}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
