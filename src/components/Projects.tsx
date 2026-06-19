"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { AnimatedTabs } from "./AnimatedTabs";

const projects = [
  {
    title: "Vocalis Platform",
    summary:
      "Voice-based diagnostic screening powered by machine learning. Analyzing speech biomarkers to detect early signs of neurological and respiratory conditions, enabling accessible and non-invasive health assessments.",
    tags: ["Python", "TensorFlow", "React", "FastAPI", "Speech Processing"],
    category: "AI/ML",
    featured: true,
  },
  {
    title: "Chagas Disease ECG Model",
    summary:
      "Deep learning architecture designed to detect Chagas disease from electrocardiogram (ECG) data. Presented at the Computing in Cardiology (CinC) conference.",
    tags: ["Python", "PyTorch", "Deep Learning", "Signal Processing"],
    category: "Research",
  },
  {
    title: "Healthcare Analytics Dashboard",
    summary:
      "Real-time patient analytics visualization platform for clinical decision support and population health monitoring.",
    tags: ["Next.js", "D3.js", "PostgreSQL", "REST API"],
    category: "Web",
  },
  {
    title: "Personal Brand Websites",
    summary:
      "Custom-built websites for founders, researchers, and professionals — designed to communicate credibility and drive opportunities.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Web",
  },
  {
    title: "ML Research Toolkit",
    summary:
      "Reusable tools and pipelines for biomedical machine learning experiments, feature engineering, and model evaluation.",
    tags: ["Python", "PyTorch", "Pandas", "scikit-learn"],
    category: "Research",
  },
];

const tabs = ["All", "AI/ML", "Research", "Web"];

export function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeTab === "All" || p.category === activeTab
  );

  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            title="Projects"
            subtitle="Selected work across startups, research, and client engagements."
          />
          <div className="mb-4">
            <AnimatedTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={project.featured && activeTab === "All" ? "lg:col-span-2" : ""}
              >
                <ProjectCard
                  {...project}
                  featured={project.featured && activeTab === "All"}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
