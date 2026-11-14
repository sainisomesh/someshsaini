"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Page } from "@/components/notion/Page";
import { Activity, ChevronDown } from "lucide-react";

const interestsData = [
  {
    title: "Case Kismat Bollywood Fusion Dance Team",
    story: "Dancing has been a huge part of my college experience. Being part of Case Kismat allowed me to connect with my culture, perform on big stages, and build a family on campus. We blend various dance styles to create energetic and expressive performances. For Case Kismat, dancing is an integral part of my whole family, and we compete across the nation to showcase our talent.",
    image: "/someshsaini/images/IMG_6840.JPG"
  },
  {
    title: "Reselling Shoes",
    story: "What started as a side hustle turned into a deep dive into market trends, supply chain, and entrepreneurship. Reselling sneakers taught me the fundamentals of buying low, selling high, and understanding consumer demand in a fast-paced market.",
    image: "/someshsaini/images/IMG_8207.jpg"
  },
  {
    title: "Mowing Lawns",
    story: "Mowing lawns was mostly something my dad made me do before he'd let me drive a real car, but those early mornings ultimately sparked my interest in creating simple, elegant, and direct designs—a philosophy I carry into everything I build today.",
    image: "/someshsaini/images/mowing_lawns.jpg"
  }
];

function InterestItem({ interest }: { interest: typeof interestsData[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[rgba(0,0,0,0.06)] rounded-xl bg-white mb-3 overflow-hidden shadow-sm hover:shadow-subtle transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between bg-white text-left focus:outline-none group"
      >
        <span className="font-semibold text-[#171717] group-hover:text-blue-600 transition-colors">{interest.title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-[#737373] group-hover:text-blue-600 transition-colors" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-[rgba(0,0,0,0.04)]">
              <div className="flex flex-col md:flex-row gap-5 mt-4">
                <div className="w-full md:w-1/3 aspect-video md:aspect-square relative rounded-lg overflow-hidden shrink-0 border border-[rgba(0,0,0,0.06)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={interest.image} alt={interest.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="text-[14px] text-[#404040] leading-relaxed flex flex-col justify-center">
                  <p>{interest.story}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AboutTab() {
  return (
    <Page
      title="About Me"
      icon="👤"
    >




      <h2 className="text-2xl font-bold mt-12 mb-6 pb-2 border-b border-[rgba(0,0,0,0.06)] font-display tracking-tight text-[#171717]">Education</h2>
      <div className="mb-10">
        <div className="p-6 rounded-xl border border-[rgba(0,0,0,0.06)] bg-white shadow-subtle hover:shadow-lift transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-300 to-emerald-300" />
          
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-16 h-16 rounded-[8px] bg-white border border-[rgba(0,0,0,0.06)] overflow-hidden flex items-center justify-center shadow-sm shrink-0 mt-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/someshsaini/images/cwru logo.avif" alt="CWRU Logo" className="w-full h-full object-cover object-center scale-[1.35]" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-bold text-[#171717] text-lg">Case Western Reserve University</h3>
              <div className="text-[14px] text-[#737373] font-medium mt-1 mb-5">Expected 2028 • GPA: 4.0</div>
              
              <div className="space-y-4 relative before:absolute before:inset-y-2 before:left-0 before:w-px before:bg-[rgba(0,0,0,0.06)] pl-5">
                <div className="relative">
                  <div className="absolute left-[-24px] top-1.5 w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <h4 className="font-semibold text-[#171717] leading-tight text-[15px]">MS in Biomedical and Health Informatics</h4>
                </div>
                <div className="relative">
                  <div className="absolute left-[-24px] top-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <h4 className="font-semibold text-[#171717] leading-tight text-[15px]">BA in Computer Science</h4>
                </div>
                <div className="relative">
                  <div className="absolute left-[-24px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#737373]" />
                  <h4 className="font-semibold text-[#171717] leading-tight text-[15px]">Minor in Chemistry</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-6 pb-2 border-b border-[rgba(0,0,0,0.06)] font-display tracking-tight text-[#171717]">Interests</h2>
      <div className="mb-10">
        {interestsData.map((interest, idx) => (
          <InterestItem key={idx} interest={interest} />
        ))}
      </div>


    </Page>
  );
}
