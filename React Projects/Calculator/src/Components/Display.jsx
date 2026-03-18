export const CalculatorDisplay = ({ value, isDarkMode }) => {
  const theme = {
    display: isDarkMode ? "bg-[#2d2d2d]" : "bg-[#f8f9fa]",
    text: isDarkMode ? "text-[#ffffff]" : "text-[#333333]",
  };

  return (
    <div className={`w-full mb-6 p-4 rounded-[12px] text-right shadow-inner overflow-hidden ${theme.display}`}>
      <div className="text-[15px] text-[white] opacity-60 h-4 mb-1">Calculation</div>
      <input
        type="text"
        value={value}
        readOnly
        className={`w-full bg-transparent text-[32px] font-light outline-none text-right ${theme.text}`}
        placeholder="0"
      />
    </div>
  );
};