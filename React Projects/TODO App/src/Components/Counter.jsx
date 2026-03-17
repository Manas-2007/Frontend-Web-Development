import React from "react";

export default function Counter({ count }) {
  return (
    /* Premium Glass Container with subtle gradient and sharp border */
    <div className="flex items-center justify-between bg-[#ffffff] border-[3px] border-[#cbd5e1] px-[24px] py-[5px] rounded-[16px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-[300ms] hover:border-[#1e40af] hover:shadow-[0_10px_20px_-5px_rgba(30,64,175,0.1)]">
      
      {/* Status Section - Label with a "Live" dot indicator */}
      <div className="flex items-center gap-[12px]">
        <div className="flex items-center gap-[8px]">
          <span className="relative flex h-[10px] w-[10px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-[#22c55e]"></span>
          </span>
          <span className="text-[purple] font-[800] uppercase tracking-[2px] text-[12px]">
            Live Overview
          </span>
        </div>
      </div>

      {/* Counter Section - Matches the blue theme of your Add button */}
      <div className="flex items-center gap-[12px]">
        <span className="text-[#94a3b8] text-[14px] font-[600]">Active Tasks:</span>
        <div className="bg-gradient-to-r from-[#2563eb] to-[#1e40af] text-[#ffffff] px-[16px] py-[4px] rounded-[10px] font-[800] text-[16px] shadow-[0_4px_10px_rgba(37,99,235,0.3)] border-[1px] border-[#1e40af]">
          {count}
        </div>
      </div>
    </div>
  );
}