"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard, services } from "./ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Services() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-32 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Services"
          subtitle="Selective collaborations for founders, students, and professionals who need polished work."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-lg font-display tracking-tight">
            Need a website or technical prototype?
            <span className="text-muted-foreground"> Let&apos;s talk.</span>
          </p>
          <Button variant="outline" onClick={scrollToContact}>
            Get in touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
