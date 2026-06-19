"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Badge } from "@/components/ui/badge";

const identityBadges = [
  "AI Research",
  "Medicine",
  "Startups",
  "Bioinformatics",
  "Web Design",
  "Voice AI",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About" />

        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-16 items-start">
          {/* Left: Large pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-2xl sm:text-3xl font-display leading-snug tracking-tight">
              Building technical depth
              <br />
              and clinical context —
              <br />
              <span className="text-muted-foreground">
                through research, products,
                <br />
                and hands-on work.
              </span>
            </p>
          </motion.div>

          {/* Right: Body text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-6"
          >
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              I&apos;m a computer science and chemistry student at Case Western Reserve University, 
              currently pursuing a master&apos;s in biomedical and health informatics. My work sits at the intersection
              of artificial intelligence, medicine, and entrepreneurship — building
              tools and systems that bridge the gap between clinical insight and
              computational power.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              As a Machine Learning Researcher at Cleveland Clinic, my recent work focuses on developing deep learning models to improve the detection of Chagas disease using electrocardiogram (ECG) data—research I recently presented at the Computing in Cardiology conference in São Paulo, Brazil.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              Alongside research, I am the co-founder of Vocalis, and I lead consulting initiatives for local small businesses through Consult Your Community. Whether building medical models, developing technical prototypes, or crafting premium web experiences, I bring rigor and care to every project.
            </p>
          </motion.div>
        </div>

        {/* Identity badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 pt-12 border-t border-border"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6 font-sans">
            Areas of focus
          </p>
          <div className="flex flex-wrap gap-3">
            {identityBadges.map((badge) => (
              <motion.div key={badge} variants={itemVariants}>
                <Badge className="text-sm px-4 py-1.5">{badge}</Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
