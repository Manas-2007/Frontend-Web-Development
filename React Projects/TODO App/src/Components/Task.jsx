import React from "react";

export default function Task({ item, date, onDelete }) {
  return (
    <div className="group bg-[#ffffff] border-[2px] border-[#cbd5e1] p-[16px] rounded-[12px] flex flex-col md:flex-row items-center gap-[20px] transition-all duration-[300ms] hover:border-[#1e40af] hover:shadow-[0_8px_20px_-10px_rgba(0,0,0,0.1)] hover:bg-[#f8fafc]">
      
      <div className="flex-grow w-full md:w-auto">
        <p className="text-[17px] font-[700] text-[#0f172a] truncate capitalize tracking-[-0.01em]">
          {item}
        </p>
      </div>

      <div className="w-full md:w-[200px]">
        <span className="text-[15px] font-[600] text-[#475569] bg-[#f1f5f9] px-[12px] py-[6px] rounded-[8px] border-[1px] border-[#e2e8f0] block text-center md:inline-block">
          {date}
        </span>
      </div>

      <div className="w-full md:w-[120px]">
        <button
          onClick={onDelete}
          className="w-full bg-[#fee2e2] hover:bg-[#ef4444] text-[#b91c1c] hover:text-[#ffffff] font-[700] py-[10px] px-[16px] rounded-[10px] transition-all duration-[200ms] border-[1px] border-[#fecaca] hover:border-[#ef4444] active:scale-[0.95] text-[14px]"
        >
          Delete
        </button>
      </div>
    </div>
  );
}