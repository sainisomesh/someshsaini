"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageProps {
  title: string;
  icon?: React.ReactNode | string;
  coverUrl?: string;
  children: React.ReactNode;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  },
};

export function Page({ title, icon, coverUrl, children }: PageProps) {
  return (
    <div className="w-full min-h-full pb-32">
      {/* Cover */}
      {coverUrl ? (
        <div className="w-full h-[30vh] min-h-[220px] relative group overflow-hidden border-b border-[rgba(0,0,0,0.06)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={coverUrl} 
            alt="Cover" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      ) : (
        <div className="w-full h-16" />
      )}

      {/* Main Content Area */}
      <motion.div 
        className="max-w-[900px] mx-auto px-8 md:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Icon & Title */}
        <motion.div variants={itemVariants} className={`${coverUrl ? "-mt-16" : ""} mb-8 relative z-10`}>
          {icon && (
            <div className="mb-5 inline-block">
              {icon}
            </div>
          )}
          <h1 className="text-[44px] font-bold text-[#171717] leading-[1.1] tracking-tight font-display">
            {title}
          </h1>
        </motion.div>

        {/* Blocks */}
        <div className="space-y-4 text-[#171717]">
          {React.Children.map(children, (child) => (
            <motion.div variants={itemVariants}>
              {child}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
