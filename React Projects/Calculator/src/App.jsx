import { useState, useEffect } from "react";
import { CalcButton } from "./Components/Buttons";
import { CalculatorDisplay } from "./Components/Display";
import { GridLayout } from "./Components/grid";

export default function App() {
  const [value, setValue] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Logic Handlers (Your existing logic)
  const handleClick = (val) => setValue((prev) => prev + val);
  const handleClear = () => setValue("");
  const handleEqual = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;
      if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "."].includes(key)) {
        setValue((prev) => prev + key);
      } else if (key === "Enter") {
        handleEqual();
      } else if (key === "Backspace") {
        setValue((prev) => prev.slice(0, -1));
      } else if (key.toLowerCase() === "c") {
        handleClear();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [value]);

  const bgColor = isDarkMode ? "bg-[#121212]" : "bg-[#f0f2f5]";
  const cardColor = isDarkMode ? "bg-[#1e1e1e]/80" : "bg-white/80";

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${bgColor}`}>
      
      {/* Theme Switcher */}
      <button onClick={() => setIsDarkMode(!isDarkMode)} className="mb-8 text-gray-500">
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className={`p-6 rounded-[24px] shadow-2xl backdrop-blur-md border border-white/10 ${cardColor} w-[320px]`}>
        
        {/* Component 1: Display */}
        <CalculatorDisplay value={value} isDarkMode={isDarkMode} />

        {/* Component 2: Button Grid */}
        <GridLayout handleClick={handleClick} 
         handleEqual={handleEqual} 
         isDarkMode={isDarkMode}/>

        <div className="mt-4">
          <CalcButton label="CLEAR" onClick={handleClear} isDarkMode={isDarkMode} type="clear" />
        </div>
      </div>
    </div>
  );
}