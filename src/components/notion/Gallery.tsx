import React from "react";
import { motion } from "framer-motion";

interface GalleryCardProps {
  image?: string;
  logo?: string;
  title: string;
  subtitle?: string;
  tags?: string[];
  link?: string;
  onClick?: () => void;
}

export function GalleryCard({ image, logo, title, subtitle, tags = [], link, onClick }: GalleryCardProps) {
  const CardContent = (
    <motion.div 
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`group rounded-[8px] overflow-hidden border border-[rgba(0,0,0,0.06)] shadow-subtle hover:shadow-lift bg-white transition-shadow flex flex-col h-full ${onClick || link ? 'cursor-pointer' : ''}`}
    >
      {image ? (
        <div className="h-[160px] w-full border-b border-[rgba(0,0,0,0.04)] overflow-hidden relative bg-[#fafafa]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={image} 
            alt={title} 
            className={`w-full h-full ${image.includes('logo') ? 'object-contain p-6' : 'object-cover'} group-hover:scale-105 transition-transform duration-500 ease-out`} 
          />
        </div>
      ) : (
        <div className="h-[160px] w-full border-b border-[rgba(0,0,0,0.04)] bg-gradient-to-br from-[#fafafa] to-[#f0f0f0] flex items-center justify-center text-5xl">
          📄
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start gap-2.5 mb-1.5">
          {logo && (
            <div className="w-6 h-6 rounded-[4px] border border-[rgba(0,0,0,0.06)] overflow-hidden shrink-0 bg-white p-0.5 mt-0.5 shadow-sm">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
          )}
          <h3 className="font-semibold text-[15px] text-[#171717] leading-snug font-display">{title}</h3>
        </div>
        {subtitle && (
          <p className="text-[13px] text-[#525252] leading-relaxed mb-4 line-clamp-3">
            {subtitle}
          </p>
        )}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-[#f5f5f5] text-[#525252] border border-[rgba(0,0,0,0.04)] shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full outline-none">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}

interface GalleryProps {
  children: React.ReactNode;
}

export function Gallery({ children }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-6">
      {children}
    </div>
  );
}
