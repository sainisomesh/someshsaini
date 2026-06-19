import React from "react";

interface CalloutProps {
  icon?: React.ReactNode | string;
  children: React.ReactNode;
}

export function Callout({ icon, children }: CalloutProps) {
  return (
    <div className="flex p-4 rounded-[8px] bg-white/80 backdrop-blur-md text-[#171717] my-3 shadow-subtle border border-[rgba(0,0,0,0.06)] relative overflow-hidden">
      {/* Subtle highlight edge */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 to-gray-100" />
      
      {icon && <div className="mr-3 mt-0.5 text-[1.3em] leading-none shrink-0">{icon}</div>}
      <div className="flex-1 leading-relaxed text-[15px]">
        {children}
      </div>
    </div>
  );
}
