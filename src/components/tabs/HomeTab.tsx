"use client";

import { Page } from "@/components/notion/Page";
import { Callout } from "@/components/notion/Callout";
import { ArrowRight, FileText, Globe, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const titles = [
  "an AI engineer & founder",
  "building clinical AI at Vocalis",
  "researching deep learning at Cleveland Clinic",
  "a Goldman Sachs Emerging Leader",
  "engineering healthcare infrastructure",
  "a Bollywood fusion dancer",
  "a design enthusiast"
];
import { TabId } from "@/components/Sidebar";

interface HomeTabProps {
  setActiveTab?: (tab: TabId) => void;
}

export function HomeTab({ setActiveTab }: HomeTabProps) {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <Page
      title="Somesh Saini"
      icon={
        <div className="w-[78px] h-[78px] relative rounded shadow-sm border border-[rgba(55,53,47,0.1)] bg-white overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/someshsaini/images/somesh saini headshot.jpg" alt="Somesh" className="w-full h-full object-cover" />
        </div>
      }
      coverUrl="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000&auto=format&fit=crop"
    >
      <div className="flex items-center gap-3 text-[22px] font-medium text-[#737373] mb-10 mt-4 h-[44px]">
        <span className="whitespace-nowrap flex-shrink-0">Somesh Saini is</span>
        <div className="relative flex-1 h-full overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={titleIndex}
              initial={{ y: 40, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              exit={{ y: -40, opacity: 0, rotateX: 90 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 25 }}
              className="absolute inset-0 flex items-center justify-start"
              style={{ transformOrigin: "center center" }}
            >
              <span className="text-[#171717] font-bold bg-white px-3 py-1.5 rounded-[8px] shadow-subtle border border-[rgba(0,0,0,0.06)] whitespace-nowrap text-[19px] leading-none">
                {titles[titleIndex]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_250px] gap-8">
        <div className="pr-0 md:pr-8">
          <Callout icon="👋">
            Hi, I&apos;m Somesh. I&apos;m an undergraduate at Case Western Reserve University building at the intersection of computer science, medicine, and community.
          </Callout>

          <p className="mt-8 text-[16px] text-[#37352f] leading-relaxed">
            My work is deeply focused on developing deep learning architectures for clinical diagnostics. I have a profound love for medicine and am driven by the goal of improving health on a global level through computational medicine and accessible AI.
          </p>

          <h2 className="text-xl font-bold mt-12 pb-2 border-b border-[rgba(0,0,0,0.06)] text-[#171717] font-display">Quick Links</h2>
          
          <div className="space-y-3 mt-6">
            <a href="https://case.edu/news/meet-second-year-computer-science-student-helping-make-disease-detection-more-accessible-worldwide" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-xl border border-[rgba(0,0,0,0.06)] hover:shadow-subtle hover:border-[rgba(0,0,0,0.1)] transition-all group bg-white">
              <div className="p-2 rounded-full bg-orange-50 text-orange-600 group-hover:scale-110 transition-transform">
                <FileText className="w-4 h-4" />
              </div>
              <span className="flex-1 font-medium text-[#171717]">Read my Media Highlight</span>
              <ArrowRight className="w-4 h-4 text-[#a3a3a3] group-hover:text-[#171717] group-hover:translate-x-1 transition-all" />
            </a>
            
            <div onClick={() => setActiveTab && setActiveTab('Projects')} className="flex items-center gap-4 p-3 rounded-xl border border-[rgba(0,0,0,0.06)] hover:shadow-subtle hover:border-[rgba(0,0,0,0.1)] transition-all group bg-white cursor-pointer">
              <div className="p-2 rounded-full bg-indigo-50 text-indigo-600 group-hover:scale-110 transition-transform">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="flex-1 font-medium text-[#171717]">View my Work Experience</span>
              <ArrowRight className="w-4 h-4 text-[#a3a3a3] group-hover:text-[#171717] group-hover:translate-x-1 transition-all" />
            </div>
            
            <div onClick={() => setActiveTab && setActiveTab('Websites')} className="flex items-center gap-4 p-3 rounded-xl border border-[rgba(0,0,0,0.06)] hover:shadow-subtle hover:border-[rgba(0,0,0,0.1)] transition-all group bg-white cursor-pointer">
              <div className="p-2 rounded-full bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                <Globe className="w-4 h-4" />
              </div>
              <span className="flex-1 font-medium text-[#171717]">Explore Freelance Portfolio</span>
              <ArrowRight className="w-4 h-4 text-[#a3a3a3] group-hover:text-[#171717] group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-[rgba(0,0,0,0.06)] p-2 shadow-sm bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/someshsaini/images/Somesh.jpg" alt="Somesh Portrait" className="w-full h-auto rounded-[8px]" />
          </div>
          
          <div className="rounded-xl border border-[rgba(0,0,0,0.06)] p-5 shadow-sm bg-white relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-emerald-400" />
            <h3 className="font-semibold text-[15px] mb-4 text-[#171717] font-display">Currently</h3>
            <ul className="space-y-4 text-[14px] text-[#525252]">
              <li className="flex gap-3 items-start">
                <span className="text-[16px] leading-none mt-0.5">📍</span> 
                <span className="leading-snug font-medium">Cleveland, OH</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[16px] leading-none mt-0.5">🎓</span> 
                <span className="leading-snug">MS in Biomedical and Health Informatics</span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-[16px] leading-none mt-0.5">🎓</span> 
                <span className="leading-snug">BA in Computer Science; Minor in Chemistry</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Page>
  );
}
