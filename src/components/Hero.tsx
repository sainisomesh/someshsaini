"use client";

import { motion } from "framer-motion";
import { RotatingIdentity } from "./RotatingIdentity";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

function EKGLine() {
  return (
    <svg
      viewBox="0 0 800 100"
      className="absolute bottom-20 left-0 right-0 w-full h-24 opacity-[0.06] dark:opacity-[0.08]"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0,50 L150,50 L180,50 L200,20 L210,80 L220,35 L230,65 L240,50 L300,50 L400,50 L430,50 L450,15 L460,85 L470,30 L480,70 L490,50 L550,50 L650,50 L680,50 L700,20 L710,80 L720,35 L730,65 L740,50 L800,50"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
}

function GridBackground() {
  return (
    <>
      {/* Subtle glowing blob in the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg grid-bg-mask opacity-60 dark:opacity-40" />
    </>
  );
}

function FloatingCards() {
  return (
    <div className="hidden lg:flex flex-col items-end gap-4 relative">
      {[
        { label: "Healthcare AI", delay: 0.4 },
        { label: "Clinical Research", delay: 0.6 },
        { label: "Voice Diagnostics", delay: 0.8 },
        { label: "Biomedical Informatics", delay: 1.0 },
      ].map(({ label, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="border border-border rounded-lg px-5 py-3 bg-card/50 backdrop-blur-sm text-sm font-sans text-muted-foreground hover:border-foreground/30 hover:text-foreground transition-all duration-300 cursor-default"
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <GridBackground />
      <EKGLine />

      <div className="relative z-10 mx-auto max-w-6xl px-6 w-full py-32 lg:py-0">
        <div className="grid lg:grid-cols-[1fr,auto] gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Portfolio &mdash; 2025
              </p>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display tracking-tight leading-[0.95]">
                Somesh Saini
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-sans font-light tracking-normal leading-tight">
                  is a{" "}
                  <RotatingIdentity />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-sans"
            >
              An undergraduate at Case Western Reserve University building at the
              intersection of computer science, medicine, and community impact. 
              Currently a Machine Learning Researcher at Cleveland Clinic and Co-founder of Vocalis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button size="lg" onClick={() => scrollTo("#projects")}>
                View my work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollTo("#contact")}
              >
                Get in touch
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <FloatingCards />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-foreground/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
