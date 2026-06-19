"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Beaker, Award } from "lucide-react";

const researchThemes = [
  {
    title: "Machine learning in healthcare",
    desc: "Developing predictive models and clinical decision support systems using EHR and multi-modal patient data.",
  },
  {
    title: "Voice as a diagnostic interface",
    desc: "Exploring speech biomarkers for non-invasive screening of neurological and respiratory conditions.",
  },
  {
    title: "Biomedical informatics",
    desc: "Building computational pipelines for clinical data integration, analysis, and knowledge discovery.",
  },
  {
    title: "Physician-scientist pathway",
    desc: "Bridging computational research with clinical medicine to create translational impact.",
  },
  {
    title: "Health equity & access",
    desc: "Designing AI tools that are accessible, equitable, and useful across diverse patient populations.",
  },
];

const programs = [
  {
    title: "Goldman Sachs Emerging Leaders",
    type: "Leadership Program",
  },
  {
    title: "Cleveland Clinic Research Fellowship",
    type: "Research",
  },
  {
    title: "Dean's High Achievers Program",
    type: "Academic Distinction · CWRU",
  },
  {
    title: "Undergraduate Research Award",
    type: "Research Grant · CWRU",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function Research() {
  return (
    <section id="research" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Research & Programs"
          subtitle="Areas of inquiry and recognition."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Research themes */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Beaker className="h-4 w-4 text-muted-foreground" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans">
                Research interests
              </p>
            </div>
            <div className="space-y-6">
              {researchThemes.map((theme, i) => (
                <motion.div
                  key={theme.title}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <h4 className="text-base font-display mb-1 group-hover:text-foreground transition-colors">
                    {theme.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                    {theme.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Programs & Recognition */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Award className="h-4 w-4 text-muted-foreground" />
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans">
                Programs & Recognition
              </p>
            </div>
            <div className="space-y-0">
              {programs.map((program, i) => (
                <motion.div
                  key={program.title}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="py-5 border-b border-border last:border-b-0 group"
                >
                  <h4 className="text-base font-display group-hover:text-foreground transition-colors">
                    {program.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 font-sans">
                    {program.type}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
