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
    title: "Pre-Op Triage Agent",
    description: "Built an evidence-grounded pre-operative review system that turns patient charts into traceable scheduling decisions and nurse-ready follow-up items.",
    tags: ["Clinical AI", "Python", "LLM", "Decision Support"],
    image: "/someshsaini/images/projects/preop-triage-workflow.svg",
    content: (
      <div className="space-y-6 text-[#404040]">
        <h2 className="text-xl font-bold text-[#171717] font-display">What I built</h2>
        <p>I designed a two-stage system for pre-operative chart review. A constrained language-model call extracts facts from notes and documents with verbatim source quotes. A deterministic Python policy engine then checks documentation, vitals, medications, consent, procedure details, and timing to return READY, NEEDS_FOLLOW_UP, or NOT_CLEARED.</p>
        <div className="grid gap-3 sm:grid-cols-3 text-sm" aria-label="Pre-operative triage workflow">
          <div className="rounded-lg border border-[#e5e5e5] bg-white p-4"><strong className="block text-[#171717] mb-1">01 · Extract</strong>Structured facts and source quotes from the chart</div>
          <div className="rounded-lg border border-[#e5e5e5] bg-white p-4"><strong className="block text-[#171717] mb-1">02 · Check</strong>Explicit clinical rules in a deterministic policy engine</div>
          <div className="rounded-lg border border-[#e5e5e5] bg-white p-4"><strong className="block text-[#171717] mb-1">03 · Review</strong>Decision, issues, and a nurse-readable audit trail</div>
        </div>
        <h2 className="text-xl font-bold text-[#171717] font-display mt-8">Engineering decisions</h2>
        <p>I kept date math, unit conversion, medication classification, and procedure matching in code. The system verifies extracted quotes against the chart and sends uncertain or malformed findings to review instead of silently clearing them. Each issue records the rule, supporting source, and reason for follow-up.</p>
        <p>I also spoke with an electrophysiology clinic stakeholder about day-of-surgery gaps such as missed fasting instructions and anticoagulant hold windows. I used that feedback to add informational nurse checks to the audit trail while keeping scheduling decisions bound to the explicit policy.</p>
        <h2 className="text-xl font-bold text-[#171717] font-display mt-8">Evaluation</h2>
        <p>On a 50-case labeled evaluation set, the final pipeline matched all reference decisions and issue categories on both tested models. I also tested repeated-run consistency and policy edge cases. These are evaluation-set results for a prototype, not a clinical deployment or validation study.</p>
        <h2 className="text-xl font-bold text-[#171717] font-display mt-8">Model and caching comparison</h2>
        <p>I compared the baseline approach with my two-layer pipeline on the same 50 labeled cases. I kept instructions and schema in a stable, roughly 2,100-token prompt prefix with a versioned cache key, then placed case-specific details afterward. That layout reuses input across cases while the policy engine makes the final decision from verified facts.</p>
        <figure className="my-7 border-y border-[#292929] bg-white py-4 md:-mx-12">
          <figcaption className="mb-4 font-serif text-[15px] leading-snug text-[#171717]">
            <span className="font-bold">Table 1.</span> Model performance and resource use in pre-operative triage (50 labeled cases).
          </figcaption>
          <div className="overflow-x-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#525252]" role="region" aria-label="Scroll to view the full pre-op triage comparison table" tabIndex={0}>
            <table className="w-full min-w-[780px] border-collapse border-y-2 border-[#292929] font-serif text-[13px] leading-snug text-[#303030] tabular-nums" aria-describedby="preop-table-note">
              <caption className="sr-only">Comparison of baseline and two-layer pipeline results for gpt-4.1-mini and gpt-5.6-luna</caption>
              <thead className="text-[#171717]">
                <tr className="border-b border-[#999]">
                  <th scope="col" rowSpan={2} className="w-[230px] px-2 py-2 text-left align-bottom font-semibold">Measure</th>
                  <th scope="colgroup" colSpan={2} className="px-2 py-2 text-center font-semibold">gpt-4.1-mini</th>
                  <th scope="colgroup" colSpan={2} className="px-2 py-2 text-center font-semibold">gpt-5.6-luna</th>
                </tr>
                <tr className="border-b border-[#292929] text-[12px]">
                  <th scope="col" className="px-2 py-2 text-right font-medium">Baseline</th>
                  <th scope="col" className="px-2 py-2 text-right font-medium">Two-layer pipeline</th>
                  <th scope="col" className="px-2 py-2 text-right font-medium">Baseline</th>
                  <th scope="col" className="px-2 py-2 text-right font-medium">Two-layer pipeline</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e0e0e0] [&_td]:whitespace-nowrap [&_td]:px-2 [&_td]:py-2.5 [&_td]:text-right [&_th]:px-2 [&_th]:py-2.5">
                <tr><th scope="row" className="text-left font-normal">Evaluation score</th><td>74.67%</td><td className="font-bold">100%</td><td>97.33%</td><td className="font-bold">100%</td></tr>
                <tr><th scope="row" className="text-left font-normal">Byte-identical across 3 runs</th><td>—</td><td>36 / 50</td><td>—</td><td>50 / 50</td></tr>
                <tr><th scope="row" className="text-left font-normal">Cached input, new / repeat</th><td>4.0% / —</td><td>44% / 79%</td><td>0% / —</td><td>54% / 99.9%</td></tr>
                <tr><th scope="row" className="text-left font-normal">Reasoning / output tokens per case</th><td>0 / 234</td><td>0 / 633</td><td>145 / 297</td><td>0 / 511</td></tr>
                <tr><th scope="row" className="text-left font-normal">Median call latency</th><td>2.1 s</td><td>4.3 s</td><td>3.3 s</td><td>3.8 s</td></tr>
                <tr><th scope="row" className="text-left font-normal">Estimated cost / 1,000, new / repeat</th><td>$1.55 / —</td><td>$2.04 / $1.62</td><td>$0.96 / —</td><td>$1.01 / $0.70</td></tr>
              </tbody>
            </table>
          </div>
          <p id="preop-table-note" className="mt-3 text-[12px] leading-relaxed text-[#5f5f5f]">
            <span className="font-semibold">Note.</span> The final gpt-4.1-mini pipeline scored 100% after an earlier 96% run exposed a quote-validation edge case. Cache and cost figures are from recorded usage replays; costs extrapolate measured tokens using the prices recorded with the project. A dash denotes a measure not reported for that baseline. These results describe a 50-case evaluation, not clinical validation.
          </p>
        </figure>
        <a href="https://github.com/sainisomesh/preop-triage#measured-comparison" target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-[#37574e] underline underline-offset-4 hover:text-[#171717]">View the comparison and results on GitHub ↗</a>
      </div>
    )
  },
  {
    title: "Virtual Staining with U-Net",
    description: "Trained and evaluated U-Net models that predict fluorescent microscopy channels from brightfield z-stacks, comparing model size, loss, and training choices.",
    tags: ["PyTorch", "U-Net", "Microscopy", "Model Evaluation"],
    image: "/someshsaini/images/projects/virtual-staining-l2-panel.jpg",
    content: (
      <div className="space-y-6 text-[#404040]">
        <h2 className="text-xl font-bold text-[#171717] font-display">Goal and contribution</h2>
        <p>I built a U-Net training and evaluation workflow for virtual staining: predicting green and blue fluorescence from 13 brightfield focal planes. I prepared paired image crops, trained models, selected checkpoints on held-out validation fields, and packaged the selected models for the shared inference pipeline.</p>
        <h2 className="text-xl font-bold text-[#171717] font-display mt-8">Approaches I tested</h2>
        <p>I compared an initial U-Net with smaller and wider/deeper variants, MSE versus L1 loss, and training changes including rotation augmentation, a cosine learning-rate schedule, and exponential moving average weights. I recorded validation quality, parameter count, and training time to make the quality–compute tradeoff visible.</p>
        <figure className="rounded-lg border border-[#e5e5e5] bg-white p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/someshsaini/images/projects/virtual-staining-tradeoff.png" alt="Validation error and training time plotted against U-Net parameter count" width="1320" height="560" loading="lazy" decoding="async" className="w-full h-auto" />
          <figcaption className="text-xs text-[#737373] mt-2">Model size, validation error, and training time. Timing comparisons across the first and second rounds use different batch sizes.</figcaption>
        </figure>
        <h2 className="text-xl font-bold text-[#171717] font-display mt-8">Held-out results</h2>
        <p>The larger selected model reached mean MSE of 0.00461 (green) and 0.00216 (blue), with SSIM of 0.777 and 0.928, across three held-out test wells. Its scores were close to the dataset&apos;s published reference predictions. With only three test wells and one training seed, I treat that comparison as descriptive rather than a claim of superiority.</p>
        <figure className="rounded-lg border border-[#e5e5e5] bg-white p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/someshsaini/images/projects/virtual-staining-l2-panel.jpg" alt="Brightfield input, measured fluorescence, U-Net predictions, and error maps for one held-out well" width="1600" height="680" loading="lazy" decoding="async" className="w-full h-auto" />
          <figcaption className="text-xs text-[#737373] mt-2">One held-out well: brightfield input, measured fluorescence, predicted fluorescence, and absolute error.</figcaption>
        </figure>
        <figure className="rounded-lg border border-[#e5e5e5] bg-white p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/someshsaini/images/projects/virtual-staining-test-results.png" alt="Per-well test error and structural similarity for selected U-Net models and reference predictions" width="1440" height="520" loading="lazy" decoding="async" className="w-full h-auto" />
          <figcaption className="text-xs text-[#737373] mt-2">Per-well test quality for selected models, a constant baseline, and the dataset reference predictions.</figcaption>
        </figure>
        <p>I also checked full-field tiled inference against direct inference, verified saved image values against float predictions, and documented a visible tile-boundary limitation in the deeper model.</p>
      </div>
    )
  },
  {
    title: "Vocalis Platform",
    description: "An AI tool startup for community-based medium-sized clinics. Backed by NSF I-Corps, Google Cloud, and the Veale Institute for Entrepreneurship.",
    tags: ["Entrepreneurship", "Healthcare", "AI/ML"],
    image: "/someshsaini/images/vocalis_banner.jpg",
    logo: "/someshsaini/images/vocalis logo.png",
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
    image: "/someshsaini/images/ml cardio logo.png",
    logo: "/someshsaini/images/ml cardio logo.png",
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
    image: "/someshsaini/images/goldman_sachs_banner.jpg",
    logo: "/someshsaini/images/goldman sachs logo.png",
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
