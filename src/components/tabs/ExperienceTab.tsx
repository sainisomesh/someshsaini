"use client";

import { Page } from "@/components/notion/Page";
import { Callout } from "@/components/notion/Callout";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Research & Development Engineer (Personal Health Care)",
    org: "Procter & Gamble",
    logoUrl: "/someshsaini/images/P&G logo.jpeg",
    period: "May 2026 - Present",
    description: [
      "Engineered orchestrated multi-agent AI workflows for Personal Health Care R&D, integrating experimental, biomarker, and consumer health datasets to autonomously generate product insights.",
      "Built scalable ML and agentic decision-support systems for health research, enabling automated detection of safety signals."
    ],
    tags: ["AI Agents", "Machine Learning", "Python", "Healthcare R&D"],
  },
  {
    role: "Clinical AI Researcher",
    org: "One Heart Health",
    logoUrl: "/someshsaini/images/onehearthealht logo.jpeg",
    period: "Nov 2025 - Present",
    description: [
      "Fine-tuned Audio Spectrogram Transformers on pediatric phonocardiograms to enhance congenital heart disease screening in low-resource clinics globally.",
      "Developed and deployed a transformer-based heart-sound quality classifier for the clinical pipeline, leading to a peer-reviewed publication."
    ],
    tags: ["Deep Learning", "Transformers", "Global Health", "Clinical AI"],
    paperLink: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6749564",
    paperImage: "/someshsaini/images/OHH preprint paper screenshot.jpeg"
  },
  {
    role: "Machine Learning Researcher",
    org: "Cleveland Clinic",
    logoUrl: "/someshsaini/images/cleveland clininc logo.jpeg",
    period: "Jan 2025 - Present",
    description: [
      "Developed a deep learning pipeline using PyTorch 1D CNNs to capture temporal patterns in 12-lead ECGs for early Chagas disease risk stratification.",
      "Presented this research as first author at the international Computing in Cardiology conference in São Paulo, Brazil."
    ],
    tags: ["PyTorch", "ECG", "Deep Learning", "Research"],
    paperLink: "https://www.cinc.org/archives/2025/pdf/CinC2025-408.pdf",
    paperImage: "/someshsaini/images/clevlenad clinic research paper cinc 2025.jpeg"
  },
  {
    role: "Co-Founder & Technical Lead",
    org: "Vocalis",
    logoUrl: "/someshsaini/images/vocalis logo.png",
    period: "2024 - Present",
    description: [
      "Leading technical development and business strategy for an AI receptionist and comprehensive AI suite designed to reduce administrative bottlenecks in community-based clinics.",
      "Architecting lightweight, cost-effective natural language processing (NLP) and proprietary private AI models optimized for EHR integration.",
      "Spearheading investor pitches and grant applications, securing backing from NSF I-Corps, Google Cloud, and the Veale Institute for Entrepreneurship."
    ],
    tags: ["Entrepreneurship", "Healthcare", "AI/ML"],
  },
  {
    role: "Research & Development Engineer (Fabric Care)",
    org: "Procter & Gamble",
    logoUrl: "/someshsaini/images/P&G logo.jpeg",
    period: "May 2025 - Aug 2025",
    description: [
      "Led product development on a functional fiber detergent platform, executing 20+ experiments on multi-surfactant systems to improve cleaning performance.",
      "Built an end-to-end freshness analytics platform in Python using unsupervised ML, enabling data-driven formulation decisions."
    ],
    tags: ["Product Development", "Data Science", "Python", "R&D"],
  },
  {
    role: "Data Security Analyst",
    org: "Webacy",
    logoUrl: "/someshsaini/images/webacy logo.jpeg",
    period: "Sep 2024 - Oct 2024",
    description: [
      "Conducted smart contract risk analysis and built unsupervised machine learning models for Web3 security applications."
    ],
    tags: ["Python", "Web3 Security", "Machine Learning"],
  },
  {
    role: "Child Life Assistant Volunteer",
    org: "University Hospitals",
    logoUrl: "/someshsaini/images/university hopsitals logo.jpg",
    period: "Aug 2024 - Present",
    description: [
      "Providing pediatric oncology patients with meaningful care and support during their treatment."
    ],
    tags: ["Healthcare", "Volunteering", "Pediatrics"],
  },
];

export function ExperienceTab() {
  return (
    <Page
      title="Experience"
      icon="🎓"
    >
      <div className="mb-2">
        <p className="text-[17px] text-[#525252] font-medium">
          My professional background spanning research institutions, startups, and product development.
        </p>
      </div>

      <div className="mt-8">
        {experiences.map((exp, index) => (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            key={index}
            className="py-6 border-b border-[rgba(0,0,0,0.06)] last:border-0 relative group"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 mt-[2px] rounded-[4px] border border-[#ededed] overflow-hidden shrink-0 bg-white flex items-center justify-center shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={exp.logoUrl} alt={exp.org} className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-[16px] text-[#171717] leading-tight font-display">{exp.role}</h3>
                  <div className="text-[14px] text-[#525252] mt-0.5">{exp.org}</div>
                </div>
              </div>
              <div className="text-[13px] text-[#737373] self-start sm:self-auto sm:mt-[2px] font-medium">
                {exp.period}
              </div>
            </div>

            <div className="sm:pl-[48px]">
              <ul className="list-disc pl-5 space-y-1.5 text-[14px] text-[#37352f] leading-relaxed mb-4 marker:text-[#a3a3a3]">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex gap-1.5 flex-wrap mb-3">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-[4px] text-[11.5px] font-medium bg-[#f1f1f0] text-[rgba(55,53,47,0.65)]">
                    {tag}
                  </span>
                ))}
              </div>

              {exp.paperLink && (
                <div className="mt-3">
                  <a href={exp.paperLink} target="_blank" rel="noopener noreferrer" className="block group/paper">
                    <Callout icon="📄">
                      <span className="text-[13px] font-medium underline decoration-[rgba(0,0,0,0.2)] group-hover/paper:decoration-[#171717] transition-colors">
                        Read the Research Paper
                      </span>
                    </Callout>
                    {/* @ts-ignore */}
                    {exp.paperImage && (
                      <div className="mt-2 rounded-[6px] overflow-hidden border border-[#ededed] shadow-sm group-hover/paper:shadow transition-all duration-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={exp.paperImage} alt="Research Paper Snippet" className="w-full object-cover max-h-[160px] object-top" />
                      </div>
                    )}
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Page>
  );
}
