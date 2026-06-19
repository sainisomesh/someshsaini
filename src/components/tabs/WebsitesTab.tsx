"use client";

import { Page } from "@/components/notion/Page";
import { Gallery, GalleryCard } from "@/components/notion/Gallery";
import { Callout } from "@/components/notion/Callout";
import { Mail } from "lucide-react";

const websites = [
  {
    title: "Vocalis Landing Page",
    description: "Modern SaaS landing page featuring 3D scroll animations and dynamic visual storytelling.",
    link: "https://vocalis.cc/",
    tags: ["Next.js", "3D Animations", "SaaS", "Web Design"],
    image: "/images/vocalis_landing.png"
  },
  {
    title: "Poonam Dance",
    description: "Animated digital portfolio for a professional dancer and choreographer.",
    link: "http://poonamdance.com/",
    tags: ["Next.js", "Framer Motion", "TailwindCSS"],
    image: "/images/poonamdance.png"
  },
  {
    title: "Precision Heart Rhythm",
    description: "HIPAA-compliant digital platform for a cardiology practice with optimized local SEO.",
    link: "https://precisionheartrhythm.com",
    tags: ["React", "Healthcare UI", "Local SEO"],
    image: "/images/precisionheart.png"
  },
];

export function WebsitesTab() {
  return (
    <Page
      title="Freelance Websites"
      icon="🌐"
    >
      <div className="bg-white rounded-xl border border-[rgba(0,0,0,0.06)] shadow-subtle p-6 relative overflow-hidden mb-8">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#171717] font-display flex items-center gap-2">
              Custom Web Solutions
            </h2>
            <p className="text-[#525252] leading-relaxed max-w-[600px]">
              I develop modern, highly-performant web applications and digital portfolios for businesses and professionals. I work closely with clients to architect and deliver their exact vision.
            </p>
          </div>
          <a 
            href="mailto:somesh.bhupesh@gmail.com" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[8px] bg-[#171717] text-white hover:bg-[#333] transition-colors font-medium shadow-subtle shrink-0 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4" />
            Get in touch
          </a>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-10 mb-4 pb-1 border-b border-[#ededed]">Previous Work</h2>
      <Gallery>
        {websites.map((site) => (
          <GalleryCard
            key={site.title}
            title={site.title}
            subtitle={site.description}
            link={site.link}
            tags={site.tags}
            image={site.image}
          />
        ))}
      </Gallery>
    </Page>
  );
}
