import React from "react";

export default function Input({ item, date, onItemChange, onDateChange, onAdd }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-[20px] w-full group">
      
      <input
        type="text"
        placeholder="What needs to be done?"
        value={item}
        onChange={(e) => onItemChange(e.target.value)}
        className="flex-grow w-full md:w-auto bg-[#f8fafc] border-[2px] border-[#cbd5e1] rounded-[12px] px-[16px] py-[12px] focus:outline-none focus:border-[#1e40af] focus:bg-[#e2e8f0] transition-all duration-[200ms] placeholder:text-[15px] text-[15px] text-[#1e293b]"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
        className="w-full md:w-[200px] bg-[#f8fafc] border-[2px] border-[#cbd5e1] rounded-[12px] px-[12px] py-[12px] focus:outline-none focus:border-[#1e40af] focus:bg-[#e2e8f0] transition-all duration-[200ms] text-[15px] cursor-pointer text-[#1e293b]"
      />

      <button
        onClick={onAdd}
        className="w-full md:w-[120px] bg-[#2563eb] hover:bg-[#22c55e] active:scale-[0.95] text-[#ffffff] font-[700] py-[12px] px-[24px] rounded-[12px] transition-all duration-[300ms] shadow-[0_10px_15px_-3px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(34,197,94,0.3)]"
      >
        Add
      </button>
    </div>
  );
}