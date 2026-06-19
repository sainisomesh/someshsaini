"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "somesh@example.com",
    href: "mailto:sbs166@case.edu",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/someshsaini",
    href: "https://linkedin.com/in/someshsaini",
    icon: <Linkedin className="h-4 w-4" />,
  },
  {
    label: "GitHub",
    value: "github.com/someshsaini",
    href: "https://github.com/someshsaini",
    icon: <Github className="h-4 w-4" />,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Get in Touch"
          subtitle="Open to collaborations, research opportunities, and interesting problems."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto"
        >
          <div className="border border-border rounded-xl p-8 bg-card shadow-subtle space-y-8">
            {/* Contact links */}
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center justify-between py-3 border-b border-border last:border-b-0 hover:border-foreground/20 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground/60 font-sans">
                        {link.label}
                      </p>
                      <p className="text-sm font-sans text-foreground">
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button className="w-full" size="lg" asChild>
                <a href="mailto:sbs166@case.edu">
                  Send me a message
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground/50 mt-6 font-sans">
            Typically respond within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
