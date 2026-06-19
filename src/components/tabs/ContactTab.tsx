"use client";

import { Page } from "@/components/notion/Page";
import { Callout } from "@/components/notion/Callout";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactTab() {
  return (
    <Page
      title="Contact"
      icon="📬"
    >
      <div className="mb-6">
        <p className="text-[rgba(55,53,47,0.65)]">
          I&apos;m always open to discussing new research opportunities, freelance website builds, or collaborations in healthcare AI.
        </p>
      </div>

      <div className="space-y-3 mt-8 max-w-xl">
        <a
          href="mailto:sbs166@case.edu"
          className="group flex items-center justify-between p-4 rounded-xl bg-white border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-subtle hover:border-[rgba(0,0,0,0.1)] transition-all duration-200"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-[15px] text-[#171717]">Email</div>
              <div className="text-[14px] text-[#525252]">sbs166@case.edu</div>
            </div>
          </div>
          <div className="text-[#a3a3a3] group-hover:text-[#171717] transition-colors pr-2">
            ↗
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/someshsaini/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 rounded-xl bg-white border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-subtle hover:border-[rgba(0,0,0,0.1)] transition-all duration-200"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-sky-50 text-sky-600 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-[15px] text-[#171717]">LinkedIn</div>
              <div className="text-[14px] text-[#525252]">linkedin.com/in/someshsaini</div>
            </div>
          </div>
          <div className="text-[#a3a3a3] group-hover:text-[#171717] transition-colors pr-2">
            ↗
          </div>
        </a>

        <a
          href="https://github.com/sainisomesh"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 rounded-xl bg-white border border-[rgba(0,0,0,0.06)] shadow-sm hover:shadow-subtle hover:border-[rgba(0,0,0,0.1)] transition-all duration-200"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-50 text-gray-700 group-hover:scale-110 transition-transform duration-300">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-[15px] text-[#171717]">GitHub</div>
              <div className="text-[14px] text-[#525252]">github.com/sainisomesh</div>
            </div>
          </div>
          <div className="text-[#a3a3a3] group-hover:text-[#171717] transition-colors pr-2">
            ↗
          </div>
        </a>
      </div>

      <div className="mt-8">
        <Callout icon="☕">
          Based in Cleveland, OH. Happy to grab coffee if you&apos;re in the area!
        </Callout>
      </div>
    </Page>
  );
}
