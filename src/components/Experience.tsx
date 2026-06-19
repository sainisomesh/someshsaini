"use client";

import { SectionHeading } from "./SectionHeading";
import { AnimatedTimeline } from "./AnimatedTimeline";

const experienceEntries = [
  {
    title: "Founder & CEO",
    organization: "Vocalis",
    date: "2023 — Present",
    bullets: [
      "Founded a startup developing voice AI technology for healthcare diagnostics and screening",
      "Building speech-based screening tools for neurological and respiratory conditions",
      "Secured partnerships with clinical research institutions and university labs",
      "Leading product development, research strategy, and fundraising efforts",
    ],
    tags: ["Voice AI", "Healthcare", "Entrepreneurship", "Python", "ML"],
  },
  {
    title: "Machine Learning Researcher",
    organization: "Cleveland Clinic",
    date: "2023 — Present",
    bullets: [
      "Developing deep-learning models to improve the detection of Chagas disease using electrocardiogram (ECG) data",
      "Presented research findings at the Computing in Cardiology (CinC) conference in São Paulo, Brazil at age 18",
      "Conducting computational medicine research to build translational AI applications for patient care",
    ],
    tags: ["Deep Learning", "ECG", "Clinical Research", "Python"],
  },
  {
    title: "Vice-President",
    organization: "Consult Your Community (CWRU)",
    date: "2023 — Present",
    bullets: [
      "Leading the university chapter of a national organization providing pro-bono consulting to local small businesses",
      "Managing teams of student consultants to deliver actionable business and technical strategies",
      "Fostering community impact through direct engagement with Cleveland entrepreneurs",
    ],
    tags: ["Leadership", "Consulting", "Strategy", "Community"],
  },
  {
    title: "Emerging Leaders Program",
    organization: "Goldman Sachs",
    date: "2024",
    bullets: [
      "Selected for competitive leadership development program among top undergraduates",
      "Engaged with senior leaders on technology strategy, markets, and finance",
    ],
    tags: ["Leadership", "Finance", "Strategy"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Experience"
          subtitle="A timeline of research, industry, and entrepreneurial work."
        />
        <div className="max-w-3xl">
          <AnimatedTimeline entries={experienceEntries} />
        </div>
      </div>
    </section>
  );
}
