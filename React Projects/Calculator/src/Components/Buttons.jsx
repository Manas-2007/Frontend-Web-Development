export const CalcButton = ({ label, onClick, isDarkMode, type = "number" }) => {
  // Logic for custom colors based on button type
  let colorClass = isDarkMode ? "bg-[#333333] hover:bg-[#444444]" : "bg-[#e9ecef] hover:bg-[#dee2e6]";
  
  if (type === "operator") colorClass = "bg-[#3b82f6] hover:bg-[#2563eb] text-white";
  if (type === "action") colorClass = "bg-[#10b981] hover:bg-[#059669] text-white";
  if (type === "clear") colorClass = "bg-[#ef4444] hover:bg-[#dc2626] text-white px-[5px] px-[5px]";

  const textColor = isDarkMode ? "text-white" : "text-[#333333]";

  return (
    <button
      onClick={onClick}
      className={`h-14 rounded-[12px] text-xl font-medium transition-all active:scale-95 ${colorClass} ${type === "number" ? textColor : ""}`}
    >
      {label}
    </button>
  );
};