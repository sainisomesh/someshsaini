"use client";

import { useState } from "react";
import { Page } from "@/components/notion/Page";
import { Gallery, GalleryCard } from "@/components/notion/Gallery";
import { Callout } from "@/components/notion/Callout";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  logo?: string;
  content: React.ReactNode;
};

const projects: Project[] = [
  {
    title: "Vocalis Platform",
    description: "An AI tool startup for community-based medium-sized clinics. Backed by NSF I-Corps, Google Cloud, and the Veale Institute for Entrepreneurship.",
    tags: ["Entrepreneurship", "Healthcare", "AI/ML"],
    image: "/images/vocalis_banner.jpg",
    logo: "/images/vocalis logo.png",
    content: (
      <div className="space-y-6 text-[#404040]">
        <h2 className="text-xl font-bold text-[#171717] font-display">Overview</h2>
        <p>Vocalis is an AI receptionist and comprehensive AI suite designed for small to medium-sized community-based clinics. Our platform reduces administrative bottlenecks and deeply integrates with EHR systems, optimizing workflows specifically for communities that struggle with consistent healthcare outcomes.</p>
        <h2 className="text-xl font-bold text-[#171717] font-display mt-8">My Role & Architecture</h2>
        <p>As Co-Founder and Technical Lead, my role bridges business development and advanced AI engineering. On the business side, I lead grant applications, pitch to investors, and drive strategic growth. Technically, I architect and build our natural language processing (NLP) pipelines and proprietary private AI models. These models are specifically engineered to be lightweight, secure, and highly cost-effective for the clinical challenges we solve.</p>
        <h2 className="text-xl font-bold text-[#171717] font-display mt-8">Traction</h2>
        <p>We recently secured backing from the National Science Foundation (NSF) I-Corps program, Google Cloud, and the Veale Institute for Entrepreneurship. We are actively engaged in pitching to investors and running pilot studies with local clinical partners to validate our models in real-world settings.</p>
      </div>
    )
  },
  {
    title: "Exploring ML Architectures for Cardiovascular Disease Detection",
    description: "Collaborated in a high-performance computing setting to compare Random Forest, Naive Bayes, KNN, SVM, and XGBoost on Kaggle and PTB-XL datasets, utilizing parallel processing for optimal hyperparameter tuning.",
    tags: ["Python", "HPC", "SVM", "XGBoost", "Parallel Computing"],
    image: "/images/ml cardio logo.png",
    logo: "/images/ml cardio logo.png",
    content: (
      <div className="space-y-6 text-[#404040]">
        <h2 className="text-xl font-bold text-[#171717] font-display">Research Focus</h2>
        <p>This project investigated the robustness of various classical and ensemble machine learning architectures in predicting cardiovascular disease from structured clinical datasets (Kaggle) and time-series extracted features (PTB-XL).</p>
        <h2 className="text-xl font-bold text-[#171717] font-display mt-8">Collaboration & HPC Implementation</h2>
        <p>Working collaboratively alongside a team of student researchers, we built a machine learning pipeline heavily reliant on High-Performance Computing (HPC) environments. Because the clinical datasets were substantial and the hyperparameter space was massive, we used Singularity containers to execute parallel workloads across multiple CPU cores. This allowed us to asynchronously run distributed cross-validation folds and GridSearchCV parameter sweeps simultaneously, drastically reducing the overall training time for complex models.</p>
        <h2 className="text-xl font-bold text-[#171717] font-display mt-8">Findings</h2>
        <p>By leveraging this parallel programming model, we discovered that Support Vector Machines (utilizing the kernel trick) and XGBoost consistently outperformed simpler probabilistic models. They were exceptionally capable of modeling the complex, non-linear relationships inherent in the PTB-XL cardiovascular data, achieving an impressive F1-Score of 0.992 after expanding diagnostic variables.</p>
      </div>
    )
  },

  {
    title: "AI-Driven Mutual Fund Calculator",
    description: "Goldman Sachs Emerging Leaders Fellow project focused on building an AI-driven model for mutual fund portfolio allocation and investment strategy optimization. Developed and evaluated portfolio performance scenarios using data-driven methods and presented findings to Managing Directors at the Dallas office.",
    tags: ["Artificial Intelligence", "Financial Analysis", "Portfolio Strategy"],
    image: "/images/goldman_sachs_banner.jpg",
    logo: "/images/goldman sachs logo.png",
    content: (
      <div className="space-y-6 text-[#404040]">
        <div className="text-sm font-semibold text-[#737373] uppercase tracking-wider mb-2">Dec 2025 – Apr 2026</div>
        <h2 className="text-xl font-bold text-[#171717] font-display">Project Overview</h2>
        <p>As a Goldman Sachs Emerging Leaders Fellow, I developed an AI-driven model for mutual fund portfolio allocation and investment strategy optimization.</p>
        <h2 className="text-xl font-bold text-[#171717] font-display mt-8">Impact & Presentation</h2>
        <p>I developed and evaluated multiple portfolio performance scenarios using data-driven methods, ultimately presenting my findings to Managing Directors at the Dallas office.</p>
        <div className="mt-8">
          <a href="https://docs.google.com/presentation/d/1ylRFFsZqx-dptmct7PL4AypBQB8lwoIxQ-pWo-QLEv0/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="block group/presentation">
            <Callout icon="📊">
              <span className="text-[14px] font-medium underline decoration-[rgba(0,0,0,0.2)] group-hover/presentation:decoration-[#171717] transition-colors">
                View Presentation to Leadership at Dallas Office
              </span>
            </Callout>
          </a>
        </div>
      </div>
    )
  },

];

export function WorkTab() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  if (activeProject) {
    return (
      <div className="w-full min-h-full pb-32 bg-[#fafafa]">
        {/* Cover Image Area */}
        <div className="w-full h-[24vh] min-h-[160px] relative bg-gradient-to-br from-[#e5e5e5] to-[#d4d4d4] border-b border-[rgba(0,0,0,0.06)] overflow-hidden">
          {activeProject.image && !activeProject.image.includes('logo') && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={activeProject.image} alt="Cover" className="w-full h-full object-cover opacity-60" />
          )}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[800px] mx-auto px-8 md:px-12 -mt-8 relative z-10"
        >
          {/* Back Button */}
          <button 
            onClick={() => setActiveProject(null)}
            className="flex items-center gap-1.5 text-[13px] font-semibold text-[#737373] hover:text-[#171717] transition-colors bg-white px-3 py-1.5 rounded-full shadow-subtle border border-[rgba(0,0,0,0.06)] mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Work
          </button>

          {/* Project Header */}
          <div className="mb-10">
            {activeProject.logo && (
              <div className="w-16 h-16 rounded-[8px] bg-white border border-[#ededed] shadow-sm flex items-center justify-center p-2 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={activeProject.logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
            )}
            <h1 className="text-4xl font-bold text-[#171717] font-display tracking-tight leading-tight mb-4">
              {activeProject.title}
            </h1>
            <div className="flex gap-2 flex-wrap mb-6">
              {activeProject.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-[6px] text-xs font-semibold tracking-wide uppercase bg-[rgba(0,0,0,0.03)] text-[#525252] border border-[rgba(0,0,0,0.04)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Content */}
          <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:tracking-tight">
            {activeProject.content}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <Page
      title="Projects"
      icon="💼"
    >
      <Gallery>
        {projects.map((project) => (
          <GalleryCard
            key={project.title}
            title={project.title}
            subtitle={project.description}
            tags={project.tags}
            image={project.image}
            logo={project.logo}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </Gallery>
    </Page>
  );
}
